import { OrbitControls } from "three/examples/jsm/Addons.js";

import "./style.css";
import * as THREE from "three";
import info from "./assets/info.txt";

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
orbit.update();

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
          Number(infoArr[1].split(",")[1]) * 1.5,
          -1.6,

          Number(infoArr[1].split(",")[0]) * 1.5
        ),
        quaternion: new THREE.Quaternion(
          Number(infoArr[2].split(",")[0]),
          Number(infoArr[2].split(",")[1]),
          Number(infoArr[2].split(",")[2]),
          Number(infoArr[2].split(",")[3])
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

      scene.add(circle);
      const span = document.createElement("span");

      span.innerText = pano.img;

      document.body.appendChild(span);
      circle.userData = {
        point: pano.position.clone(),
        el: span,
      };
    });
    camera.position.set(panoArr[0].position.x, 0, panoArr[0].position.z);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  scene.children.forEach((child: any) => {
    // update elelement

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
  });
}
animate();
