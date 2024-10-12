import { OrbitControls } from "three/examples/jsm/Addons.js";

import "./style.css";
import * as THREE from "three";
import info from "/static/info.txt";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
const canvas: any = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
  preserveDrawingBuffer: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.minDistance = 0.00001;
orbit.maxDistance = 0.00001;
orbit.rotateSpeed = 0.6;
orbit.update();
const shpere = new THREE.Mesh();
const geometry = new THREE.SphereGeometry(25, 60, 60);
geometry.scale(-1, 1, 1);
shpere.geometry = geometry;

const textureLoader = new THREE.TextureLoader();

fetch(info)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text(); // Read the response as text
  })
  .then((text) => {
    const linesArray = text.split("\n");
    linesArray.shift();
    const panoArr = linesArray.map((item) => {
      const line = item.replace("\r", "");
      const infoArr = line.split("|");
      return {
        img: infoArr[0],
        position: new THREE.Vector3(
          Number(infoArr[1].split(",")[0]),
          -Number(infoArr[1].split(",")[2]),
          -Number(infoArr[1].split(",")[1])
        ),
        quaternion: new THREE.Quaternion(
          Number(infoArr[2].split(",")[2]),
          Number(infoArr[2].split(",")[1]),

          Number(infoArr[2].split(",")[3]),
          Number(infoArr[2].split(",")[0])
        ),
        name: infoArr[3].replace("unfurnished,", ""),
        floor: infoArr[4],
      };
    });
    panoArr.forEach((pano) => {
      const circle = new THREE.Mesh(
        new THREE.CircleGeometry(0.2, 30),
        new THREE.MeshBasicMaterial({
          color: "#ffffff",
          side: THREE.DoubleSide,
        })
      );
      circle.geometry.applyMatrix4(
        new THREE.Matrix4().makeRotationX(0.5 * Math.PI)
      );
      circle.position.copy(pano.position);
      circle.name = "hotspot";
      scene.add(circle);
      const span = document.createElement("span");

      span.innerText = pano.img;

      document.body.appendChild(span);

      circle.userData = {
        img: pano.img,
        point: pano.position.clone(),
        el: span,
        quaternion: pano.quaternion.clone(),
      };
    });
    const pos = new THREE.Vector3(
      panoArr[0].position.x,
      0,
      panoArr[0].position.z
    );
    camera.position.copy(pos);
    shpere.position.copy(pos);
    const texture = textureLoader.load("/static/" + panoArr[0].img);
    texture.colorSpace = THREE.SRGBColorSpace;
    shpere.material = new THREE.MeshBasicMaterial({
      side: THREE.FrontSide,
      map: texture,
    });

    let euler = new THREE.Euler();
    euler.setFromQuaternion(panoArr[0].quaternion.invert(), "YXZ");

    shpere.rotation.set(0, euler.y, 0);

    scene.add(shpere);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

camera.fov = 75;

camera.updateProjectionMatrix();
let scale = 75;
function zoom(event: any) {
  event.preventDefault();

  if (175 >= scale && scale >= 0.1) {
    scale -= event.deltaY * -0.01;
  }
  if (scale > 175) {
    scale = 175;
  }
  if (scale < 0.1) {
    scale = 0.1;
  }

  camera.fov = Number(Math.min(Math.max(0.1, scale), 175).toFixed(2));
  camera.updateProjectionMatrix();
}

renderer.domElement.onwheel = zoom;

const mousePosition = new THREE.Vector2();
const rayCaster = new THREE.Raycaster();
renderer.domElement.onselectstart = () => {
  return false;
};
renderer.domElement.addEventListener("mousemove", (e) => {
  mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
});
let intersects: any[] = [];
renderer.domElement.addEventListener("dblclick", () => {
  const hotspot = intersects.filter((int) => int.object.name === "hotspot")[0]
    ?.object;
  if (hotspot) {
    const pos = new THREE.Vector3(
      hotspot.userData.point.x,
      0,
      hotspot.userData.point.z
    );
    camera.position.copy(pos);
    shpere.position.copy(pos);
    orbit.target.copy(pos);
    const texture = textureLoader.load("/static/" + hotspot.userData.img);
    texture.colorSpace = THREE.SRGBColorSpace;
    // @ts-ignore
    shpere.material.dispose();
    shpere.material = new THREE.MeshBasicMaterial({
      side: THREE.FrontSide,
      map: texture,
    });

    let euler = new THREE.Euler();
    euler.setFromQuaternion(hotspot.userData.quaternion.invert(), "YXZ");

    shpere.rotation.set(0, euler.y, 0);
  }
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  rayCaster.setFromCamera(mousePosition, camera);
  intersects = rayCaster.intersectObject(scene, true);
  // update elelement
  scene.children.forEach((child: any) => {
    if (child.name === "hotspot") {
      const vector: any = child.userData.point.clone();

      camera.updateMatrix();
      camera.updateMatrixWorld();
      const cameraMatrixInverse = camera.matrixWorld.clone().invert();

      var frustum = new THREE.Frustum();
      frustum.setFromProjectionMatrix(
        camera.projectionMatrix.clone().multiply(cameraMatrixInverse)
      );
      const isInview = frustum.containsPoint(vector);
      vector.project(camera);

      vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);

      vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

      const el: HTMLElement = child.userData.el;

      el.style.top = `${vector.y - el.clientHeight / 2}px`;
      el.style.left = `${vector.x - el.clientWidth / 2}px`;
      el.style.display = !isInview ? "none" : "block";
    }
  });
}
animate();
