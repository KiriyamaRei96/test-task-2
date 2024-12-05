import { OrbitControls } from "three/examples/jsm/Addons.js";

import * as THREE from "three";
import info from "/static/info.txt";
import GUI from "lil-gui";

const sampleData = [
	{
		id: "yiJTSKydoyD",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Entrance",
		uploaded: true,
		size: 8887422,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 1.6777505763243192,
			v: 1.3889099404425649,
		},
		hotspots: [
			{
				id: "PtG13Fi0J",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 60.79821683573049,
						y: -199.83,
						z: 7.380549635512462,
					},
					scene: {
						x: 1475.568599468799,
						y: -4825.346132332203,
						z: 176.12280786207032,
					},
				},
				style: 5,
				image: {
					id: "1NPpQ7EmsKG",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nr-868VkUnwK-bubble.png",
					title: "Entrance 2",
					links: ["PtG13Fi0J"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "aYptYkMB1",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 188.20547995992106,
						y: -199.01,
						z: 19.33175589526816,
					},
					scene: {
						x: 3448.745636901463,
						y: -3669.247223013219,
						z: 355.3271301074768,
					},
				},
				style: 5,
				image: {
					id: "1aRPXlqg7FT",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--bubble.png",
					title: "Hallway ",
					links: ["aYptYkMB1"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "h26QMV9hG",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 62.544582643099844,
						y: -199.53000000000003,
						z: 118.77817037616002,
					},
					scene: {
						x: 1317.2998567479124,
						y: -4194.307673577171,
						z: 2483.5061336496515,
					},
				},
				style: 5,
				image: {
					id: "res_CO0SUhg",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
					title: "Living Room ",
					links: ["h26QMV9hG"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "Qa3pqOSXm",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 45.93544572353929,
						y: -199.7800000000001,
						z: 340.45886060139173,
					},
					scene: {
						x: 585.9506164098378,
						y: -2534.8909439367517,
						z: 4326.071651548368,
					},
				},
				style: 5,
				image: {
					id: "iM7YhwkJGIl",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-rDl5EWOobo9_-bubble.png",
					title: "Living Room  2",
					links: ["Qa3pqOSXm"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "ctDpN_K8-",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 392.4343478958163,
						y: -199.53000000000003,
						z: 59.955864936458994,
					},
					scene: {
						x: 4456.102509986752,
						y: -2271.7476745588815,
						z: 679.2402482174334,
					},
				},
				style: 5,
				image: {
					id: "YdYXyaPjgYa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-bubble.png",
					title: "Hallway 2",
					links: ["ctDpN_K8-"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
		links: [
			"OfpzFHt6B",
			"3LkmmZ16Z",
			"E0Bg9OecP",
			"-f_im2cpT",
			"W4TuWGY3D",
			"lAy7ERBnq",
			"LBzUPbucP",
			"ar-Y2Xi53",
			"KoF-UoM0w",
			"7LQz1rKIkK",
			"cn0VplDRv",
			"-6bYr35tf",
			"2OG2tMw1j",
			"6Q6QLxwMa",
			"kRbk9G3YJ",
			"S5I8gO3bh",
		],
	},
	{
		id: "1NPpQ7EmsKG",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nr-868VkUnwK-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nr-868VkUnwK-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nr-868VkUnwK-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Entrance 2",
		uploaded: true,
		size: 8802212,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		links: [
			"PtG13Fi0J",
			"dr6U0XXb0",
			"xZDr5Xif4U",
			"Cuq05pEX5",
			"LX1VlNeXp",
			"ck6_FRtIu",
			"kfQBRx0CN",
			"J3yXpEV-S",
			"5sxce89Xj",
			"kxS-hNolD",
			"9qmtKmeDI",
		],
		rotationNorthPoint: {
			h: 1.8035164176714078,
			v: 1.3334534473330144,
		},
		hotspots: [
			{
				id: "-6bYr35tf",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -170.57387710008626,
						y: -199.12999999999997,
						z: -51.28375222759288,
					},
					scene: {
						x: -3215.6476575638826,
						y: -3769.2592098822947,
						z: -966.8856060400195,
					},
				},
				style: 5,
				image: {
					id: "yiJTSKydoyD",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-bubble.png",
					title: "Entrance",
					links: [
						"OfpzFHt6B",
						"3LkmmZ16Z",
						"E0Bg9OecP",
						"-f_im2cpT",
						"W4TuWGY3D",
						"lAy7ERBnq",
						"LBzUPbucP",
						"ar-Y2Xi53",
						"KoF-UoM0w",
						"7LQz1rKIkK",
						"cn0VplDRv",
						"-6bYr35tf",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "6g0VGnkA2",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -88.44410822948167,
						y: -199.91,
						z: 86.31466310443442,
					},
					scene: {
						x: -1904.7718741043273,
						y: -4294.138883016127,
						z: 1850.7779712096758,
					},
				},
				style: 5,
				image: {
					id: "res_CO0SUhg",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
					title: "Living Room ",
					links: ["h26QMV9hG", "6g0VGnkA2"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "LzMwi2Kgs",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -149.36924369662776,
						y: -199.96000000000004,
						z: 295.6755696845679,
					},
					scene: {
						x: -1952.2547353176105,
						y: -2613.120498764915,
						z: 3852.2050128669803,
					},
				},
				style: 5,
				image: {
					id: "iM7YhwkJGIl",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-rDl5EWOobo9_-bubble.png",
					title: "Living Room  2",
					links: ["Qa3pqOSXm", "LzMwi2Kgs"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "H6am54qGs",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 221.62577833353023,
						y: -199.83000000000007,
						z: 68.14566421901218,
					},
					scene: {
						x: 3653.9740312268486,
						y: -3297.3365300567716,
						z: 1124.1000050912087,
					},
				},
				style: 5,
				image: {
					id: "YdYXyaPjgYa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-bubble.png",
					title: "Hallway 2",
					links: ["ctDpN_K8-", "H6am54qGs"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "BRYxFISq4",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 96.1136697212718,
						y: -199.64999999999998,
						z: 20.639832937926315,
					},
					scene: {
						x: 2181.502284158941,
						y: -4528.965381996499,
						z: 467.6195643915565,
					},
				},
				style: 5,
				image: {
					id: "1aRPXlqg7FT",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--bubble.png",
					title: "Hallway ",
					links: ["aYptYkMB1", "BRYxFISq4"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "1aRPXlqg7FT",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway ",
		uploaded: true,
		size: 8446120,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		links: [
			"aYptYkMB1",
			"BRYxFISq4",
			"tDxgtvMZh",
			"RRGbALQRb",
			"MklF-0M6ZC",
			"zsJ_KXcn9",
			"OeeWtk_7o",
			"r8UAfe5c9",
			"E4_L_LrYA",
			"-J8IfyySu",
			"TDcVSLCTr",
			"Qh5pTz_Zj",
			"jeG4OSbUw",
		],
		rotationNorthPoint: {
			h: 1.2674899605270238,
			v: 1.3046309210013403,
		},
		infospots: [],
		hotspots: [
			{
				id: "KPgxhhF6I",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 145.45189838362515,
						y: -199.73,
						z: -17.59475924712294,
					},
					scene: {
						x: 2964.2902195055135,
						y: -4072.087532522636,
						z: -355.68841379056545,
					},
				},
				style: 5,
				image: {
					id: "YdYXyaPjgYa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-bubble.png",
					title: "Hallway 2",
					links: ["ctDpN_K8-", "H6am54qGs", "KPgxhhF6I"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "6Q6QLxwMa",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -292.3450055262373,
						y: -199.16000000000005,
						z: 81.81936277761356,
					},
					scene: {
						x: -4059.4514265428866,
						y: -2776.6829397203187,
						z: 1136.6127246905937,
					},
				},
				style: 5,
				image: {
					id: "yiJTSKydoyD",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-bubble.png",
					title: "Entrance",
					links: [
						"OfpzFHt6B",
						"3LkmmZ16Z",
						"E0Bg9OecP",
						"-f_im2cpT",
						"W4TuWGY3D",
						"lAy7ERBnq",
						"LBzUPbucP",
						"ar-Y2Xi53",
						"KoF-UoM0w",
						"7LQz1rKIkK",
						"cn0VplDRv",
						"-6bYr35tf",
						"2OG2tMw1j",
						"6Q6QLxwMa",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "S8nrIfYw4",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -123.29805908777966,
						y: -199.44000000000003,
						z: 149.26100474729392,
					},
					scene: {
						x: -2243.714323796615,
						y: -3625.8294984958807,
						z: 2703.891873900988,
					},
				},
				style: 5,
				image: {
					id: "res_CO0SUhg",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
					title: "Living Room ",
					links: [
						"h26QMV9hG",
						"6g0VGnkA2",
						"gilA-RgEQ",
						"JWzEy1p2N",
						"wqP6JnVxK",
						"By8hhySzC",
						"lc5SMwXGY",
						"S8nrIfYw4",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "KgobZ2P1s",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -35.364324558483005,
						y: -199.96999999999994,
						z: -99.28927123467962,
					},
					scene: {
						x: -785.0451933546332,
						y: -4463.6831021309745,
						z: -2224.221354939011,
					},
				},
				style: 5,
				image: {
					id: "7qWEMMOcsi2",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-KJWtFMoMgLUs-bubble.png",
					title: "Hallway 3",
					links: [
						"4RnrPwjHa",
						"WIGngQosG",
						"6mPssABFO",
						"OJo_9oVlI",
						"YDgbKEodb",
						"kRevR9x0V",
						"RS-Vc0BZe",
						"KgobZ2P1s",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "res_CO0SUhg",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Living Room ",
		uploaded: true,
		size: 9115250,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		links: [
			"h26QMV9hG",
			"6g0VGnkA2",
			"gilA-RgEQ",
			"JWzEy1p2N",
			"wqP6JnVxK",
			"By8hhySzC",
			"lc5SMwXGY",
			"S8nrIfYw4",
			"WUWV_JYQa",
			"inyi-mEzw",
			"-JkvT8Nh3",
			"zKw6DRoEG",
			"3i0f17Vbv",
			"XqmzzovhW",
			"_7PO-JCZ7",
			"LhwNAOxD6",
		],
		rotationNorthPoint: {
			h: 1.924466879238489,
			v: 1.4426411682001197,
		},
		hotspots: [
			{
				id: "2OG2tMw1j",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -86.6064779542147,
						y: -199.48999999999998,
						z: -164.9856135814852,
					},
					scene: {
						x: -1588.9931250946613,
						y: -3696.850671129938,
						z: -3049.131817223671,
					},
				},
				style: 5,
				image: {
					id: "yiJTSKydoyD",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-bubble.png",
					title: "Entrance",
					links: [
						"OfpzFHt6B",
						"3LkmmZ16Z",
						"E0Bg9OecP",
						"-f_im2cpT",
						"W4TuWGY3D",
						"lAy7ERBnq",
						"LBzUPbucP",
						"ar-Y2Xi53",
						"KoF-UoM0w",
						"7LQz1rKIkK",
						"cn0VplDRv",
						"-6bYr35tf",
						"2OG2tMw1j",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "tDxgtvMZh",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 230.10312937005176,
						y: -199.84,
						z: -28.611039209253576,
					},
					scene: {
						x: 3790.706446249721,
						y: -3301.2219947449366,
						z: -479.527066130315,
					},
				},
				style: 5,
				image: {
					id: "1aRPXlqg7FT",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--bubble.png",
					title: "Hallway ",
					links: ["aYptYkMB1", "BRYxFISq4", "tDxgtvMZh"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "YvufxxLjb",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -90.98836678593378,
						y: -199.04000000000005,
						z: 196.42008112672178,
					},
					scene: {
						x: -1560.421831142343,
						y: -3425.465964958941,
						z: 3365.8030562147205,
					},
				},
				style: 5,
				image: {
					id: "iM7YhwkJGIl",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-rDl5EWOobo9_-bubble.png",
					title: "Living Room  2",
					links: [
						"Qa3pqOSXm",
						"LzMwi2Kgs",
						"s9WNU1USh",
						"RAFuQa9zR",
						"gVZCa7FaK",
						"rUWzAJumx",
						"PPdQRlAYr",
						"YvufxxLjb",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "aAxNg8VkS",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -411.73871486124256,
						y: -199.61999999999998,
						z: 56.58090865382382,
					},
					scene: {
						x: -4506.119274184328,
						y: -2189.5540144596666,
						z: 618.1669674236974,
					},
				},
				style: 5,
				image: {
					id: "VuId-J2GIuM",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-hcujIOgdJ7VY-bubble.png",
					title: "Living Room 3",
					links: [
						"9gAOIJIAh",
						"8T4f6472p",
						"u61hS2hc7",
						"ZQlcMuJfs",
						"Axpr4TExa",
						"aAxNg8VkS",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "iM7YhwkJGIl",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-rDl5EWOobo9_-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-rDl5EWOobo9_-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-rDl5EWOobo9_-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Living Room  2",
		uploaded: true,
		size: 8918998,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		links: [
			"Qa3pqOSXm",
			"LzMwi2Kgs",
			"s9WNU1USh",
			"RAFuQa9zR",
			"gVZCa7FaK",
			"rUWzAJumx",
			"PPdQRlAYr",
			"YvufxxLjb",
		],
		rotationNorthPoint: {
			h: 2.055805818151221,
			v: 1.3487003008202498,
		},
		hotspots: [
			{
				id: "9gAOIJIAh",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -299.1728672841885,
						y: -199.06999999999994,
						z: -189.4698500569562,
					},
					scene: {
						x: -3715.041372395057,
						y: -2482.8717422059344,
						z: -2351.9797857238104,
					},
				},
				style: 5,
				image: {
					id: "VuId-J2GIuM",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-hcujIOgdJ7VY-bubble.png",
					title: "Living Room 3",
					links: ["9gAOIJIAh"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "-JkvT8Nh3",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 138.05074114748064,
						y: -199.83999999999997,
						z: -221.71778291580827,
					},
					scene: {
						x: 2120.0898298480083,
						y: -3068.426533986918,
						z: -3402.368676177248,
					},
				},
				style: 5,
				image: {
					id: "res_CO0SUhg",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
					title: "Living Room ",
					links: [
						"h26QMV9hG",
						"6g0VGnkA2",
						"gilA-RgEQ",
						"JWzEy1p2N",
						"wqP6JnVxK",
						"By8hhySzC",
						"lc5SMwXGY",
						"S8nrIfYw4",
						"WUWV_JYQa",
						"inyi-mEzw",
						"-JkvT8Nh3",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "VuId-J2GIuM",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-hcujIOgdJ7VY-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-hcujIOgdJ7VY-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-hcujIOgdJ7VY-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Living Room 3",
		uploaded: true,
		size: 8869653,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.5689701522312387,
			v: 1.4075599845592541,
		},
		links: [
			"9gAOIJIAh",
			"8T4f6472p",
			"u61hS2hc7",
			"ZQlcMuJfs",
			"Axpr4TExa",
			"aAxNg8VkS",
		],
		hotspots: [
			{
				id: "gVZCa7FaK",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 153.82637262635282,
						y: -199.10999999999996,
						z: -252.1379945824106,
					},
					scene: {
						x: 2179.341880691941,
						y: -2828.395525688785,
						z: -3568.566547073748,
					},
				},
				style: 5,
				image: {
					id: "iM7YhwkJGIl",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-rDl5EWOobo9_-bubble.png",
					title: "Living Room  2",
					links: [
						"Qa3pqOSXm",
						"LzMwi2Kgs",
						"s9WNU1USh",
						"RAFuQa9zR",
						"gVZCa7FaK",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "gilA-RgEQ",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -27.417094889184707,
						y: -199.2199999999999,
						z: -402.37015215843724,
					},
					scene: {
						x: -300.92766199774957,
						y: -2243.5264892118353,
						z: -4512.887110362733,
					},
				},
				style: 5,
				image: {
					id: "res_CO0SUhg",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
					title: "Living Room ",
					links: ["h26QMV9hG", "6g0VGnkA2", "gilA-RgEQ"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "YdYXyaPjgYa",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway 2",
		uploaded: true,
		size: 8150454,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		links: [
			"ctDpN_K8-",
			"H6am54qGs",
			"KPgxhhF6I",
			"JWjUIFSnv",
			"nevBjKMo6",
			"WCmwFd3zP",
			"a-ojOWdYM",
			"HykM3Li-6",
			"rLO4E9vxq",
			"_M5y9bhBq",
			"TKBRm1M9o",
			"dvbAA1szx",
			"vofOQh-3n",
			"kAJvsVoBt",
		],
		rotationNorthPoint: {
			h: -1.9973560941608253,
			v: 1.2996530129139894,
		},
		hotspots: [
			{
				id: "gLlt5dV1F",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -76.15197516489333,
						y: -199.84999999999997,
						z: -77.20407947493278,
					},
					scene: {
						x: -1688.9047607935806,
						y: -4442.698343153452,
						z: -1702.226660769406,
					},
				},
				style: 5,
				image: {
					id: "cu5W_AYwbdx",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-94vxb6dUzlly-bubble.png",
					title: "Powder Room",
					links: ["gLlt5dV1F"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "T9ZKtKzTY",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -107.3621407773109,
						y: -199.15000000000003,
						z: 166.29769523657296,
					},
					scene: {
						x: -1925.425443524185,
						y: -3593.832481244547,
						z: 2977.9769582691592,
					},
				},
				style: 5,
				image: {
					id: "UrFaWo38jJN",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-c-sUkaldKdnk-bubble.png",
					title: "Kitchen",
					links: [
						"35rlD6w-A",
						"va0t2Ib0X",
						"wLvq1YYpv",
						"rJEkwVz0a",
						"hRJ1X5gEB",
						"4DdoB4R9g",
						"4ous6PsJe",
						"j1w06cpCU",
						"0AYZJ5E-j",
						"bkiIEWAAW",
						"JOUEmecTi",
						"ta7p4gKtR",
						"g6rg4sxLl",
						"T9ZKtKzTY",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "TDcVSLCTr",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 128.52013377527672,
						y: -199.98,
						z: -40.82060304804601,
					},
					scene: {
						x: 2691.924717908865,
						y: -4185.265980173846,
						z: -855.9061929430411,
					},
				},
				style: 5,
				image: {
					id: "1aRPXlqg7FT",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--bubble.png",
					title: "Hallway ",
					links: [
						"aYptYkMB1",
						"BRYxFISq4",
						"tDxgtvMZh",
						"RRGbALQRb",
						"MklF-0M6ZC",
						"zsJ_KXcn9",
						"OeeWtk_7o",
						"r8UAfe5c9",
						"E4_L_LrYA",
						"-J8IfyySu",
						"TDcVSLCTr",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "S5I8gO3bh",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 431.76228147422034,
						y: -199.52999999999997,
						z: -161.60471002238384,
					},
					scene: {
						x: 4335.035536607698,
						y: -2012.3361913390877,
						z: -1622.6600639978274,
					},
				},
				style: 5,
				image: {
					id: "yiJTSKydoyD",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-bubble.png",
					title: "Entrance",
					links: [
						"OfpzFHt6B",
						"3LkmmZ16Z",
						"E0Bg9OecP",
						"-f_im2cpT",
						"W4TuWGY3D",
						"lAy7ERBnq",
						"LBzUPbucP",
						"ar-Y2Xi53",
						"KoF-UoM0w",
						"7LQz1rKIkK",
						"cn0VplDRv",
						"-6bYr35tf",
						"2OG2tMw1j",
						"6Q6QLxwMa",
						"kRbk9G3YJ",
						"S5I8gO3bh",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "cu5W_AYwbdx",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-94vxb6dUzlly-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-94vxb6dUzlly-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-94vxb6dUzlly-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Powder Room",
		uploaded: true,
		size: 8632891,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.9827399320954426,
			v: 1.2433031323639265,
		},
		links: [
			"gLlt5dV1F",
			"IDWiWPerb",
			"3Rnt8jv9H",
			"UVUKgp6Qe",
			"0yl_VG5Xf",
			"34Dr_dGwt",
			"gvEupVMIg",
		],
		hotspots: [
			{
				id: "kAJvsVoBt",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 93.00550960825173,
						y: -199.04,
						z: -19.71229965991324,
					},
					scene: {
						x: 2126.449850303403,
						y: -4557.344794519658,
						z: -445.8239126569699,
					},
				},
				style: 5,
				image: {
					id: "YdYXyaPjgYa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-bubble.png",
					title: "Hallway 2",
					links: [
						"ctDpN_K8-",
						"H6am54qGs",
						"KPgxhhF6I",
						"JWjUIFSnv",
						"nevBjKMo6",
						"WCmwFd3zP",
						"a-ojOWdYM",
						"HykM3Li-6",
						"rLO4E9vxq",
						"_M5y9bhBq",
						"TKBRm1M9o",
						"dvbAA1szx",
						"vofOQh-3n",
						"kAJvsVoBt",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "MjB6IrfxW",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 158.42559395502738,
						y: -199.10000000000005,
						z: 162.8469071340678,
					},
					scene: {
						x: 2645.3528721583293,
						y: -3337.7947422008356,
						z: 2709.662733083569,
					},
				},
				style: 5,
				image: {
					id: "UrFaWo38jJN",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-c-sUkaldKdnk-bubble.png",
					title: "Kitchen",
					links: [
						"35rlD6w-A",
						"va0t2Ib0X",
						"wLvq1YYpv",
						"rJEkwVz0a",
						"hRJ1X5gEB",
						"4DdoB4R9g",
						"4ous6PsJe",
						"j1w06cpCU",
						"0AYZJ5E-j",
						"bkiIEWAAW",
						"JOUEmecTi",
						"ta7p4gKtR",
						"g6rg4sxLl",
						"T9ZKtKzTY",
						"MjB6IrfxW",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "UrFaWo38jJN",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-c-sUkaldKdnk-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-c-sUkaldKdnk-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-c-sUkaldKdnk-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Kitchen",
		uploaded: true,
		size: 9324383,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.487Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.320220997752079,
			v: 1.2460708951456179,
		},
		hotspots: [
			{
				id: "WCmwFd3zP",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 76.43205140314264,
						y: -199.97,
						z: -151.7987843528107,
					},
					scene: {
						x: 1472.8073997513673,
						y: -3843.0099741629874,
						z: -2924.612587972246,
					},
				},
				style: 5,
				image: {
					id: "YdYXyaPjgYa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-bubble.png",
					title: "Hallway 2",
					links: [
						"ctDpN_K8-",
						"H6am54qGs",
						"KPgxhhF6I",
						"JWjUIFSnv",
						"nevBjKMo6",
						"WCmwFd3zP",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "IDWiWPerb",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -6.699848162764331,
						y: -199.3499999999999,
						z: -212.54117804097953,
					},
					scene: {
						x: -108.90282196484716,
						y: -3456.2785228476682,
						z: -3677.6629839760285,
					},
				},
				style: 5,
				image: {
					id: "cu5W_AYwbdx",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-94vxb6dUzlly-bubble.png",
					title: "Powder Room",
					links: ["gLlt5dV1F", "IDWiWPerb"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "WUWV_JYQa",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 270.5142415645109,
						y: -199.19999999999987,
						z: -432.9806073528625,
					},
					scene: {
						x: 2489.8670090791647,
						y: -1842.203494826404,
						z: -3986.314054769964,
					},
				},
				style: 5,
				image: {
					id: "res_CO0SUhg",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
					title: "Living Room ",
					links: [
						"h26QMV9hG",
						"6g0VGnkA2",
						"gilA-RgEQ",
						"JWzEy1p2N",
						"wqP6JnVxK",
						"By8hhySzC",
						"lc5SMwXGY",
						"S8nrIfYw4",
						"WUWV_JYQa",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "kRbk9G3YJ",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 431.5268805113004,
						y: -199.74999999999986,
						z: -455.46936761185077,
					},
					scene: {
						x: 3307.0833714416563,
						y: -1534.5930039591378,
						z: -3492.9240504571294,
					},
				},
				style: 5,
				image: {
					id: "yiJTSKydoyD",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-2a-fEIlcVqYG-bubble.png",
					title: "Entrance",
					links: [
						"OfpzFHt6B",
						"3LkmmZ16Z",
						"E0Bg9OecP",
						"-f_im2cpT",
						"W4TuWGY3D",
						"lAy7ERBnq",
						"LBzUPbucP",
						"ar-Y2Xi53",
						"KoF-UoM0w",
						"7LQz1rKIkK",
						"cn0VplDRv",
						"-6bYr35tf",
						"2OG2tMw1j",
						"6Q6QLxwMa",
						"kRbk9G3YJ",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "1cApxwD4E",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 118.65031667396916,
						y: -199.19000000000003,
						z: 133.33038089242598,
					},
					scene: {
						x: 2230.1819809525064,
						y: -3770.0869793058505,
						z: 2508.884218266373,
					},
				},
				style: 5,
				image: {
					id: "A2BYrwDjahL",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9qgAKksMSg8_-bubble.png",
					title: "Kitchen 2",
					links: ["1cApxwD4E"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "kIn40-K72",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -180.7046186666244,
						y: -199.44000000000003,
						z: 72.49529615733611,
					},
					scene: {
						x: -3263.664465262457,
						y: -3619.705788137995,
						z: 1317.2343421991482,
					},
				},
				style: 5,
				image: {
					id: "6r0SDSSRjfI",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mjGDh0dNcmZR-bubble.png",
					title: "Kitchen 3",
					links: ["kIn40-K72"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
		links: [
			"35rlD6w-A",
			"va0t2Ib0X",
			"wLvq1YYpv",
			"rJEkwVz0a",
			"hRJ1X5gEB",
			"4DdoB4R9g",
			"4ous6PsJe",
			"j1w06cpCU",
			"0AYZJ5E-j",
			"bkiIEWAAW",
			"JOUEmecTi",
			"ta7p4gKtR",
			"g6rg4sxLl",
			"T9ZKtKzTY",
			"MjB6IrfxW",
			"gE5pB3due",
		],
		infospots: [],
	},
	{
		id: "A2BYrwDjahL",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9qgAKksMSg8_-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9qgAKksMSg8_-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9qgAKksMSg8_-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Kitchen 2",
		uploaded: true,
		size: 11276387,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -0.9546103098259998,
			v: 1.1872105675156137,
		},
		links: [
			"1cApxwD4E",
			"PXxOSXFLu",
			"fVKd3udoz",
			"cewa3Iqk2",
			"VI0rEGcZw",
			"DwI4rBOZT",
			"hx1-hDs2B",
		],
		hotspots: [
			{
				id: "gE5pB3due",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 66.39227440148282,
						y: -199.49999999999994,
						z: -130.4486324165518,
					},
					scene: {
						x: 1356.9723310353831,
						y: -4070.461617516532,
						z: -2660.7012989832447,
					},
				},
				style: 5,
				image: {
					id: "UrFaWo38jJN",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-c-sUkaldKdnk-bubble.png",
					title: "Kitchen",
					links: [
						"35rlD6w-A",
						"va0t2Ib0X",
						"wLvq1YYpv",
						"rJEkwVz0a",
						"hRJ1X5gEB",
						"4DdoB4R9g",
						"4ous6PsJe",
						"j1w06cpCU",
						"0AYZJ5E-j",
						"bkiIEWAAW",
						"JOUEmecTi",
						"ta7p4gKtR",
						"g6rg4sxLl",
						"T9ZKtKzTY",
						"MjB6IrfxW",
						"gE5pB3due",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "fHv-Gwp8u",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -16.901211134258944,
						y: -199.65999999999997,
						z: -284.28633313329357,
					},
					scene: {
						x: -238.10440712907143,
						y: -2902.5215221651,
						z: -4123.908788178128,
					},
				},
				style: 5,
				image: {
					id: "6r0SDSSRjfI",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mjGDh0dNcmZR-bubble.png",
					title: "Kitchen 3",
					links: [
						"kIn40-K72",
						"3L5qv2tPB",
						"GHDK-7abZ",
						"lLrwF8PRm",
						"pjHehfKDj",
						"rH4IxG7Km",
						"ywa6yATec",
						"PB15UPdfE",
						"-rgNMcJbS",
						"hnt8k4hhe",
						"h5hHuol5P",
						"fHv-Gwp8u",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "gvEupVMIg",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 268.6116134203481,
						y: -199.96999999999997,
						z: -177.39887391415635,
					},
					scene: {
						x: 3575.5600633722106,
						y: -2664.760530065658,
						z: -2365.6722398839693,
					},
				},
				style: 5,
				image: {
					id: "cu5W_AYwbdx",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-94vxb6dUzlly-bubble.png",
					title: "Powder Room",
					links: [
						"gLlt5dV1F",
						"IDWiWPerb",
						"3Rnt8jv9H",
						"UVUKgp6Qe",
						"0yl_VG5Xf",
						"34Dr_dGwt",
						"gvEupVMIg",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "6r0SDSSRjfI",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mjGDh0dNcmZR-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mjGDh0dNcmZR-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mjGDh0dNcmZR-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Kitchen 3",
		uploaded: true,
		size: 8370753,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.958245957975758,
			v: 1.2656905430027008,
		},
		links: [
			"kIn40-K72",
			"3L5qv2tPB",
			"GHDK-7abZ",
			"lLrwF8PRm",
			"pjHehfKDj",
			"rH4IxG7Km",
			"ywa6yATec",
			"PB15UPdfE",
			"-rgNMcJbS",
			"hnt8k4hhe",
			"h5hHuol5P",
			"fHv-Gwp8u",
		],
		hotspots: [
			{
				id: "g6rg4sxLl",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 134.8798914146118,
						y: -199.44,
						z: -175.79886411473822,
					},
					scene: {
						x: 2282.3713630551792,
						y: -3378.3637305313064,
						z: -2976.1926372457847,
					},
				},
				style: 5,
				image: {
					id: "UrFaWo38jJN",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-c-sUkaldKdnk-bubble.png",
					title: "Kitchen",
					links: [
						"35rlD6w-A",
						"va0t2Ib0X",
						"wLvq1YYpv",
						"rJEkwVz0a",
						"hRJ1X5gEB",
						"4DdoB4R9g",
						"4ous6PsJe",
						"j1w06cpCU",
						"0AYZJ5E-j",
						"bkiIEWAAW",
						"JOUEmecTi",
						"ta7p4gKtR",
						"g6rg4sxLl",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "a-ojOWdYM",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 98.73027872059792,
						y: -199.99999999999991,
						z: -392.53472311621937,
					},
					scene: {
						x: 1107.1936162534225,
						y: -2236.2128372607094,
						z: -4388.8961304926415,
					},
				},
				style: 5,
				image: {
					id: "YdYXyaPjgYa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-teUqscSX-vwx-bubble.png",
					title: "Hallway 2",
					links: [
						"ctDpN_K8-",
						"H6am54qGs",
						"KPgxhhF6I",
						"JWjUIFSnv",
						"nevBjKMo6",
						"WCmwFd3zP",
						"a-ojOWdYM",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "6AZH7Ryls",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 125.31925304586927,
						y: -199.54,
						z: 146.42948268198046,
					},
					scene: {
						x: 2272.979033779292,
						y: -3634.4455341977614,
						z: 2666.150914287526,
					},
				},
				style: 5,
				image: {
					id: "qquadvA2kYZ",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-PMXp8W3_mF_A-bubble.png",
					title: "Dining Room ",
					links: ["6AZH7Ryls"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "piVHrEIMm",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -167.76111136509405,
						y: -199.52,
						z: -33.32968027520316,
					},
					scene: {
						x: -3220.8523945458614,
						y: -3835.794930463166,
						z: -639.9305351729195,
					},
				},
				style: 5,
				image: {
					id: "j9fcytyNaXo",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-_26HWMhtg71o-bubble.png",
					title: "Laundry ",
					links: [
						"iLroVNMFJ",
						"nGXvVGVer",
						"Iuir-KMvz",
						"GHEnXAqRx",
						"piVHrEIMm",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "qquadvA2kYZ",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-PMXp8W3_mF_A-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-PMXp8W3_mF_A-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-PMXp8W3_mF_A-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Dining Room ",
		uploaded: true,
		size: 8318464,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.8296800462190006,
			v: 1.246112259469937,
		},
		links: [
			"6AZH7Ryls",
			"mxa42cwFS",
			"4Yz7ufotX",
			"dSPXU1IuM",
			"IdeuMMg6w",
			"dT5-YNaHD",
			"3ShPl9FZV",
		],
		hotspots: [
			{
				id: "Ph1pLOknY",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -47.48518701072885,
						y: -199.61000000000007,
						z: 136.55546583704546,
					},
					scene: {
						x: -971.9742644558798,
						y: -4090.3460480751364,
						z: 2796.0058021736636,
					},
				},
				style: 5,
				image: {
					id: "yKjxxvGiqDA",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4gzRA4ODTwRf-bubble.png",
					title: "Dining Room  2",
					links: ["Ph1pLOknY"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "h5hHuol5P",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 104.90679830850466,
						y: -199.90999999999994,
						z: -164.42625070790731,
					},
					scene: {
						x: 1897.7531379387824,
						y: -3611.1306855750972,
						z: -2975.0411125197234,
					},
				},
				style: 5,
				image: {
					id: "6r0SDSSRjfI",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mjGDh0dNcmZR-bubble.png",
					title: "Kitchen 3",
					links: [
						"kIn40-K72",
						"3L5qv2tPB",
						"GHDK-7abZ",
						"lLrwF8PRm",
						"pjHehfKDj",
						"rH4IxG7Km",
						"ywa6yATec",
						"PB15UPdfE",
						"-rgNMcJbS",
						"hnt8k4hhe",
						"h5hHuol5P",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "yKjxxvGiqDA",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4gzRA4ODTwRf-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4gzRA4ODTwRf-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4gzRA4ODTwRf-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Dining Room  2",
		uploaded: true,
		size: 8331148,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.3423206456807044,
			v: 1.4030702889279463,
		},
		links: [
			"Ph1pLOknY",
			"tCKCIN0MQ",
			"CpQ7sGqY-",
			"_2V9jjflQ",
			"Ud6gtTUHw",
			"xZRTN4Wg2",
		],
		hotspots: [
			{
				id: "dSPXU1IuM",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 157.9703240472276,
						y: -199.58999999999995,
						z: -135.1879804870811,
					},
					scene: {
						x: 2766.3616119498092,
						y: -3497.2598171966256,
						z: -2366.21663467425,
					},
				},
				style: 5,
				image: {
					id: "qquadvA2kYZ",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-PMXp8W3_mF_A-bubble.png",
					title: "Dining Room ",
					links: ["6AZH7Ryls", "mxa42cwFS", "4Yz7ufotX", "dSPXU1IuM"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "rzPeiBh5V",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -129.77920108792938,
						y: -199.06999999999994,
						z: -224.22648851884773,
					},
					scene: {
						x: -1999.972644328272,
						y: -3085.7731331791533,
						z: -3458.1578557728894,
					},
				},
				style: 5,
				image: {
					id: "_uUPwIDi8vA",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MALoydz2paJK-bubble.png",
					title: "Dining Room  3",
					links: ["rzPeiBh5V"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "_uUPwIDi8vA",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MALoydz2paJK-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MALoydz2paJK-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MALoydz2paJK-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Dining Room  3",
		uploaded: true,
		size: 8855773,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.7564263113326724,
			v: 1.3331965546899336,
		},
		links: [
			"rzPeiBh5V",
			"0Uwf8An1O",
			"I4WTmvK_h",
			"2hIFxkiw8",
			"rIpreiccM",
			"XBvXfcN_j",
			"TmIfuFKx1",
			"SK9NyniKv",
		],
		hotspots: [
			{
				id: "pqMY7Jl5-",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -58.19235018958395,
						y: -199.34000000000003,
						z: 168.86886447875017,
					},
					scene: {
						x: -1096.9245855178174,
						y: -3763.412507772976,
						z: 3180.769562504957,
					},
				},
				style: 5,
				image: {
					id: "ZS9MghbWmpR",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sOzWZaaHLyM2-bubble.png",
					title: "Porch ",
					links: ["pqMY7Jl5-"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "xZRTN4Wg2",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 216.1524245632169,
						y: -199.86999999999998,
						z: -77.04157894649488,
					},
					scene: {
						x: 3585.2307034768696,
						y: -3314.8251259339595,
						z: -1280.3242959423997,
					},
				},
				style: 5,
				image: {
					id: "yKjxxvGiqDA",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4gzRA4ODTwRf-bubble.png",
					title: "Dining Room  2",
					links: [
						"Ph1pLOknY",
						"tCKCIN0MQ",
						"CpQ7sGqY-",
						"_2V9jjflQ",
						"Ud6gtTUHw",
						"xZRTN4Wg2",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "3ShPl9FZV",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 93.35041111753695,
						y: -199.1299999999999,
						z: -331.1707881486849,
					},
					scene: {
						x: 1190.3560437686358,
						y: -2537.929704137201,
						z: -4197.251886022604,
					},
				},
				style: 5,
				image: {
					id: "qquadvA2kYZ",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-PMXp8W3_mF_A-bubble.png",
					title: "Dining Room ",
					links: [
						"6AZH7Ryls",
						"mxa42cwFS",
						"4Yz7ufotX",
						"dSPXU1IuM",
						"IdeuMMg6w",
						"dT5-YNaHD",
						"3ShPl9FZV",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "ZS9MghbWmpR",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sOzWZaaHLyM2-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sOzWZaaHLyM2-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sOzWZaaHLyM2-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Porch ",
		uploaded: true,
		size: 8720218,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.5469757283589423,
			v: 1.4640679164406611,
		},
		links: [
			"pqMY7Jl5-",
			"U-gEyzMBL",
			"WGpj9EVYn",
			"eyRe_I9sV",
			"Nr0Ksycwb",
			"6-8gRxusd",
		],
		hotspots: [
			{
				id: "hC7sY75WR",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 196.67782017100808,
						y: -199.99000000000004,
						z: 138.28692926306988,
					},
					scene: {
						x: 3174.9570125945797,
						y: -3227.540759332566,
						z: 2232.774135577762,
					},
				},
				style: 5,
				image: {
					id: "zNGLTsZSr0P",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-UQBoG1sYOBgt-bubble.png",
					title: "Porch  2",
					links: ["hC7sY75WR"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "SK9NyniKv",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 93.02698600714406,
						y: -199.15999999999997,
						z: -186.15847976989474,
					},
					scene: {
						x: 1631.0130552634043,
						y: -3495.8159118957574,
						z: -3255.653805953095,
					},
				},
				style: 5,
				image: {
					id: "_uUPwIDi8vA",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MALoydz2paJK-bubble.png",
					title: "Dining Room  3",
					links: [
						"rzPeiBh5V",
						"0Uwf8An1O",
						"I4WTmvK_h",
						"2hIFxkiw8",
						"rIpreiccM",
						"XBvXfcN_j",
						"TmIfuFKx1",
						"SK9NyniKv",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "zNGLTsZSr0P",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-UQBoG1sYOBgt-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-UQBoG1sYOBgt-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-UQBoG1sYOBgt-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Porch  2",
		uploaded: true,
		size: 10220389,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.039708966168478,
			v: 1.4346356709552452,
		},
		links: ["hC7sY75WR", "0T2inCR-d", "lCYIOMldZ"],
		hotspots: [
			{
				id: "6-8gRxusd",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 128.48725991048664,
						y: -199.08999999999997,
						z: -224.50763467639825,
					},
					scene: {
						x: 1984.9435816779069,
						y: -3088.5893242598972,
						z: -3464.570549313798,
					},
				},
				style: 5,
				image: {
					id: "ZS9MghbWmpR",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sOzWZaaHLyM2-bubble.png",
					title: "Porch ",
					links: [
						"pqMY7Jl5-",
						"U-gEyzMBL",
						"WGpj9EVYn",
						"eyRe_I9sV",
						"Nr0Ksycwb",
						"6-8gRxusd",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "j9fcytyNaXo",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-_26HWMhtg71o-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-_26HWMhtg71o-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-_26HWMhtg71o-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Laundry ",
		uploaded: true,
		size: 8909234,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 2.2025986156748796,
			v: 1.4346378180849737,
		},
		infospots: [],
		hotspots: [
			{
				id: "PB15UPdfE",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 90.61022864355894,
						y: -199.51999999999998,
						z: -139.06079187458974,
					},
					scene: {
						x: 1764.6205778699655,
						y: -3883.0415403227453,
						z: -2700.911107475145,
					},
				},
				style: 5,
				image: {
					id: "6r0SDSSRjfI",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mjGDh0dNcmZR-bubble.png",
					title: "Kitchen 3",
					links: [
						"kIn40-K72",
						"3L5qv2tPB",
						"GHDK-7abZ",
						"lLrwF8PRm",
						"pjHehfKDj",
						"rH4IxG7Km",
						"ywa6yATec",
						"PB15UPdfE",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "Qfgkoi5zh",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -111.46021345000072,
						y: -199.73000000000002,
						z: 124.36539553353543,
					},
					scene: {
						x: -2159.17864563091,
						y: -3872.960780544702,
						z: 2413.138480643434,
					},
				},
				style: 5,
				image: {
					id: "hKi0kDAZHlG",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nl6DWiG9ELUo-bubble.png",
					title: "Laundry  2",
					links: ["Qfgkoi5zh"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
		links: [
			"iLroVNMFJ",
			"nGXvVGVer",
			"Iuir-KMvz",
			"GHEnXAqRx",
			"piVHrEIMm",
			"T9Oo2cgDK",
		],
	},
	{
		id: "hKi0kDAZHlG",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nl6DWiG9ELUo-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nl6DWiG9ELUo-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nl6DWiG9ELUo-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Laundry  2",
		uploaded: true,
		size: 9319488,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 2.292099666081925,
			v: 1.4306118104522063,
		},
		links: [
			"Qfgkoi5zh",
			"jhomkHUxO",
			"3pYq2TZ86",
			"MmxDIE1B3",
			"YHAQEoEEp",
			"DsFsDEZ_T",
			"Dsx9m_4gx",
			"7NMPt-0Xk",
			"8nufNpsMT",
			"fXJseBbHv",
			"Hn6IDfZ0D",
			"h6pQFnQyy",
			"y48CVOpZs",
			"8Mamy0iAa",
		],
		hotspots: [
			{
				id: "HyeSwVg2y",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -112.3397667286,
						y: -199.95999999999998,
						z: -88.51757950249339,
					},
					scene: {
						x: -2311.674752938892,
						y: -4104.972878010921,
						z: -1814.9489017150638,
					},
				},
				style: 5,
				image: {
					id: "LekmudYP2Z-",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4ssGFU9oUE3s-bubble.png",
					title: "Laundry  3",
					links: ["HyeSwVg2y"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "fAYWuzCmc",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -224.2350102947788,
						y: -199.32999999999998,
						z: -150.71342060251686,
					},
					scene: {
						x: -3367.8693499184446,
						y: -3004.901335006634,
						z: -2260.0551403501663,
					},
				},
				style: 5,
				image: {
					id: "XVEAVGvR03S",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VdkShuNsMgy1-bubble.png",
					title: "Laundry  4",
					links: ["fAYWuzCmc"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "zG6SPekHt",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 114.48895815402068,
						y: -199.71000000000004,
						z: 74.86912813525238,
					},
					scene: {
						x: 2386.698241260829,
						y: -4164.371270268857,
						z: 1565.2512615426,
					},
				},
				style: 5,
				image: {
					id: "a67uMoRQ-an",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Rya1_eLGUA_v-bubble.png",
					title: "Garage ",
					links: ["zG6SPekHt"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "T9Oo2cgDK",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 184.51562570987838,
						y: -199.82999999999998,
						z: -149.04189227412692,
					},
					scene: {
						x: 3001.6947591890366,
						y: -3253.5990572283363,
						z: -2427.4014208181193,
					},
				},
				style: 5,
				image: {
					id: "j9fcytyNaXo",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-_26HWMhtg71o-bubble.png",
					title: "Laundry ",
					links: [
						"iLroVNMFJ",
						"nGXvVGVer",
						"Iuir-KMvz",
						"GHEnXAqRx",
						"piVHrEIMm",
						"T9Oo2cgDK",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "rKLs3icfF",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 291.0732638644174,
						y: -199.93000000000004,
						z: 179.69853673940827,
					},
					scene: {
						x: 3708.298783510072,
						y: -2550.0816288668407,
						z: 2286.0336412056217,
					},
				},
				style: 5,
				image: {
					id: "XQrNBVNtI-M",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MigLl1iGxQ7X-bubble.png",
					title: "Garage  2",
					links: [
						"GZPohVFPy",
						"hVPY00Ya1",
						"hmApE0wkr",
						"gqnjLaLnj",
						"ZQ61tnLaj",
						"Zim1ehLTA",
						"rKLs3icfF",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "LekmudYP2Z-",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4ssGFU9oUE3s-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4ssGFU9oUE3s-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4ssGFU9oUE3s-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Laundry  3",
		uploaded: true,
		size: 10488821,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.7899293619680647,
			v: 1.3886848729929786,
		},
		links: [
			"HyeSwVg2y",
			"Q89GPU3rp",
			"N-FwCsq6c",
			"tsRHapWTZ",
			"7R3v4Mhwy",
			"Rcn5Wi3p_",
			"tcgxHTREn",
		],
		infospots: [],
		hotspots: [
			{
				id: "MmxDIE1B3",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 69.34414367913932,
						y: -199.44999999999996,
						z: -86.09639353809243,
					},
					scene: {
						x: 1535.2150941525385,
						y: -4419.341452524145,
						z: -1899.1514171766742,
					},
				},
				style: 5,
				image: {
					id: "hKi0kDAZHlG",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nl6DWiG9ELUo-bubble.png",
					title: "Laundry  2",
					links: ["Qfgkoi5zh", "jhomkHUxO", "3pYq2TZ86", "MmxDIE1B3"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "JipS-ZGn6",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -96.197974647105,
						y: -199.90000000000003,
						z: 125.2319557034414,
					},
					scene: {
						x: -1904.5236579923017,
						y: -3965.7122750822014,
						z: 2477.683711430795,
					},
				},
				style: 5,
				image: {
					id: "XVEAVGvR03S",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VdkShuNsMgy1-bubble.png",
					title: "Laundry  4",
					links: ["fAYWuzCmc", "JipS-ZGn6"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "XVEAVGvR03S",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VdkShuNsMgy1-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VdkShuNsMgy1-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VdkShuNsMgy1-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Laundry  4",
		uploaded: true,
		size: 8739283,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.5778661892801124,
			v: 1.4222300184328296,
		},
		links: [
			"fAYWuzCmc",
			"JipS-ZGn6",
			"VN34GX0lN",
			"_tfe6R3C4",
			"8iohgKINK",
			"fmFnC6m1X",
		],
		hotspots: [
			{
				id: "tcgxHTREn",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 38.28878245591163,
						y: -199.05999999999995,
						z: -109.38431775395865,
					},
					scene: {
						x: 843.1799125803802,
						y: -4365.034395828932,
						z: -2392.1641250776865,
					},
				},
				style: 5,
				image: {
					id: "LekmudYP2Z-",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-4ssGFU9oUE3s-bubble.png",
					title: "Laundry  3",
					links: [
						"HyeSwVg2y",
						"Q89GPU3rp",
						"N-FwCsq6c",
						"tsRHapWTZ",
						"7R3v4Mhwy",
						"Rcn5Wi3p_",
						"tcgxHTREn",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "h6pQFnQyy",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 96.3145485006127,
						y: -199.66999999999993,
						z: -221.33836025713768,
					},
					scene: {
						x: 1553.6272876050252,
						y: -3220.772206366186,
						z: -3562.4804609988937,
					},
				},
				style: 5,
				image: {
					id: "hKi0kDAZHlG",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nl6DWiG9ELUo-bubble.png",
					title: "Laundry  2",
					links: [
						"Qfgkoi5zh",
						"jhomkHUxO",
						"3pYq2TZ86",
						"MmxDIE1B3",
						"YHAQEoEEp",
						"DsFsDEZ_T",
						"Dsx9m_4gx",
						"7NMPt-0Xk",
						"8nufNpsMT",
						"fXJseBbHv",
						"Hn6IDfZ0D",
						"h6pQFnQyy",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "a67uMoRQ-an",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Rya1_eLGUA_v-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Rya1_eLGUA_v-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Rya1_eLGUA_v-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Garage ",
		uploaded: true,
		size: 9633229,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.5800942182200877,
			v: 1.4067249690482024,
		},
		links: [
			"zG6SPekHt",
			"Exl0AQF2m",
			"VH-bUKnt3",
			"MF6ZEVI1m",
			"vRDPtsU6V",
			"foQaj1laf",
		],
		hotspots: [
			{
				id: "GZPohVFPy",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -132.68837857295995,
						y: -199.92000000000004,
						z: 202.81072506435717,
					},
					scene: {
						x: -2131.590650107834,
						y: -3212.44392367131,
						z: 3258.693872136115,
					},
				},
				style: 5,
				image: {
					id: "XQrNBVNtI-M",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MigLl1iGxQ7X-bubble.png",
					title: "Garage  2",
					links: ["GZPohVFPy"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "Hn6IDfZ0D",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 51.85928301958574,
						y: -199.16999999999996,
						z: -88.70743736325988,
					},
					scene: {
						x: 1164.6652217086255,
						y: -4493.312273813555,
						z: -1987.10389937247,
					},
				},
				style: 5,
				image: {
					id: "hKi0kDAZHlG",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nl6DWiG9ELUo-bubble.png",
					title: "Laundry  2",
					links: [
						"Qfgkoi5zh",
						"jhomkHUxO",
						"3pYq2TZ86",
						"MmxDIE1B3",
						"YHAQEoEEp",
						"DsFsDEZ_T",
						"Dsx9m_4gx",
						"7NMPt-0Xk",
						"8nufNpsMT",
						"fXJseBbHv",
						"Hn6IDfZ0D",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
		infospots: [],
	},
	{
		id: "XQrNBVNtI-M",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MigLl1iGxQ7X-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MigLl1iGxQ7X-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MigLl1iGxQ7X-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Garage  2",
		uploaded: true,
		size: 9316866,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.318916328747651,
			v: 1.3228652850425566,
		},
		links: [
			"GZPohVFPy",
			"hVPY00Ya1",
			"hmApE0wkr",
			"gqnjLaLnj",
			"ZQ61tnLaj",
			"Zim1ehLTA",
			"rKLs3icfF",
		],
		hotspots: [
			{
				id: "-eixRYGRk",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -263.15371290237624,
						y: -199.18000000000006,
						z: 162.44057011615857,
					},
					scene: {
						x: -3606.675522655705,
						y: -2741.7553615668207,
						z: 2226.343005623982,
					},
				},
				style: 5,
				image: {
					id: "5DgE2yyzgCl",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9MU3XEx1MAGK-bubble.png",
					title: "Garage  3",
					links: ["-eixRYGRk"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "foQaj1laf",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 207.91094885299805,
						y: -199.60999999999999,
						z: -210.77494694907298,
					},
					scene: {
						x: 2938.106660048819,
						y: -2825.2433855837508,
						z: -2977.812248493826,
					},
				},
				style: 5,
				image: {
					id: "a67uMoRQ-an",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Rya1_eLGUA_v-bubble.png",
					title: "Garage ",
					links: [
						"zG6SPekHt",
						"Exl0AQF2m",
						"VH-bUKnt3",
						"MF6ZEVI1m",
						"vRDPtsU6V",
						"foQaj1laf",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "5DgE2yyzgCl",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9MU3XEx1MAGK-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9MU3XEx1MAGK-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-9MU3XEx1MAGK-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Garage  3",
		uploaded: true,
		size: 8844823,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.446093725589874,
			v: 1.5409003687741407,
		},
		links: ["-eixRYGRk", "Y6WdLOyEm", "0LnzyfwAl"],
		hotspots: [
			{
				id: "gqnjLaLnj",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 196.81269281787223,
						y: -199.78999999999994,
						z: -265.7884940102598,
					},
					scene: {
						x: 2570.3777960162465,
						y: -2612.8249386360408,
						z: -3471.99648165163,
					},
				},
				style: 5,
				image: {
					id: "XQrNBVNtI-M",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-MigLl1iGxQ7X-bubble.png",
					title: "Garage  2",
					links: ["GZPohVFPy", "hVPY00Ya1", "hmApE0wkr", "gqnjLaLnj"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "7qWEMMOcsi2",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-KJWtFMoMgLUs-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-KJWtFMoMgLUs-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-KJWtFMoMgLUs-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway 3",
		uploaded: true,
		size: 9705740,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.486Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -0.8378122973773358,
			v: 1.406724954983505,
		},
		hotspots: [
			{
				id: "-J8IfyySu",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 108.7474933685774,
						y: -199.89999999999998,
						z: -120.16011422957544,
					},
					scene: {
						x: 2133.241209500196,
						y: -3919.635510422575,
						z: -2360.2230442159394,
					},
				},
				style: 5,
				image: {
					id: "1aRPXlqg7FT",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-95Vi-0rlhyL--bubble.png",
					title: "Hallway ",
					links: [
						"aYptYkMB1",
						"BRYxFISq4",
						"tDxgtvMZh",
						"RRGbALQRb",
						"MklF-0M6ZC",
						"zsJ_KXcn9",
						"OeeWtk_7o",
						"r8UAfe5c9",
						"E4_L_LrYA",
						"-J8IfyySu",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "7NDJdsDkB",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -196.5765523686149,
						y: -199.70000000000005,
						z: 225.75712606355376,
					},
					scene: {
						x: -2757.880832637069,
						y: -2803.573694674257,
						z: 3165.325669805049,
					},
				},
				style: 5,
				image: {
					id: "QomxQGCp6UH",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-fjDqWCglM8ml-bubble.png",
					title: "Hallway 4",
					links: ["7NDJdsDkB"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "inyi-mEzw",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 320.0588536803464,
						y: -199.14999999999995,
						z: -67.18287946745106,
					},
					scene: {
						x: 4214.612869304099,
						y: -2634.6184950804404,
						z: -884.4622242553111,
					},
				},
				style: 5,
				image: {
					id: "res_CO0SUhg",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-0_nDMfoVlHyP-bubble.png",
					title: "Living Room ",
					links: [
						"h26QMV9hG",
						"6g0VGnkA2",
						"gilA-RgEQ",
						"JWzEy1p2N",
						"wqP6JnVxK",
						"By8hhySzC",
						"lc5SMwXGY",
						"S8nrIfYw4",
						"WUWV_JYQa",
						"inyi-mEzw",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
		links: [
			"4RnrPwjHa",
			"WIGngQosG",
			"6mPssABFO",
			"OJo_9oVlI",
			"YDgbKEodb",
			"kRevR9x0V",
			"RS-Vc0BZe",
			"KgobZ2P1s",
		],
	},
	{
		id: "QomxQGCp6UH",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-fjDqWCglM8ml-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-fjDqWCglM8ml-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-fjDqWCglM8ml-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway 4",
		uploaded: true,
		size: 9709329,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.0277310309801193,
			v: 1.4989706772790596,
		},
		links: [
			"7NDJdsDkB",
			"Z4Jj10NiZ",
			"1K85Wriu2",
			"lX2k4PbiR",
			"HHb-j2Pov",
			"_acR_1-tr",
			"5BtnM5RU4",
			"PxsebK3qc",
			"BSII6AhOH",
		],
		hotspots: [
			{
				id: "01vOVVrP1",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 43.9946797364283,
						y: -199.22000000000003,
						z: 92.42366211486704,
					},
					scene: {
						x: 988.2187984857579,
						y: -4494.897139270768,
						z: 2078.1454499171496,
					},
				},
				style: 5,
				image: {
					id: "0i31MpX3JME",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-7iynh4jHM89n-bubble.png",
					title: "Secondary bedroom",
					links: ["01vOVVrP1"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "pHzV509sf",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -87.19934016746619,
						y: -199.07000000000002,
						z: 149.6554699257435,
					},
					scene: {
						x: -1667.3677704954166,
						y: -3812.875105038666,
						z: 2857.884188445732,
					},
				},
				style: 5,
				image: {
					id: "iRqjCDq--D",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-oX92l0RD6myj-bubble.png",
					title: "third bedroom ",
					links: ["pHzV509sf"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "YDgbKEodb",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 210.32709940574645,
						y: -199.87999999999994,
						z: -279.50080124553324,
					},
					scene: {
						x: 2632.6466977179853,
						y: -2507.057973210737,
						z: -3502.111534688435,
					},
				},
				style: 5,
				image: {
					id: "7qWEMMOcsi2",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-KJWtFMoMgLUs-bubble.png",
					title: "Hallway 3",
					links: [
						"4RnrPwjHa",
						"WIGngQosG",
						"6mPssABFO",
						"OJo_9oVlI",
						"YDgbKEodb",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "0i31MpX3JME",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-7iynh4jHM89n-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-7iynh4jHM89n-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-7iynh4jHM89n-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Secondary bedroom",
		uploaded: true,
		size: 9675445,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.6487222919247208,
			v: 1.3983389322448452,
		},
		links: [
			"01vOVVrP1",
			"9PsGIOlmA",
			"JKBrcVegV",
			"WxdEAmrjj",
			"FKMzI9XJ-",
			"WrKg9hE37",
			"ReKPvulBf",
			"XOyO-gDjM",
			"aM_9aB0zT",
			"8waAX8wHz",
			"3BHNWY2Wu",
		],
		hotspots: [
			{
				id: "nwIoyJ5_S",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -41.26065118073679,
						y: -199.77000000000007,
						z: 94.49119638740783,
					},
					scene: {
						x: -921.8677166192813,
						y: -4485.505825105406,
						z: 2126.6322455398195,
					},
				},
				style: 5,
				image: {
					id: "RZgdSUGlrd8",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Sxs416uHiw7h-bubble.png",
					title: "Secondary bedroom 2",
					links: ["nwIoyJ5_S"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "8QybzIJrT",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -49.966910878137725,
						y: -199.10999999999996,
						z: -164.23625435879018,
					},
					scene: {
						x: -953.6071302504067,
						y: -3830.4517583472366,
						z: -3147.831219516394,
					},
				},
				style: 5,
				image: {
					id: "G8ea7e1wzI",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-EAOv_31zMDnD-bubble.png",
					title: "Hallway 4",
					links: ["YrcxynD0w", "brxPqVY5Q", "9Nesc92-H", "8QybzIJrT"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "_acR_1-tr",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 132.84460072531482,
						y: -199.64,
						z: -19.918645765192966,
					},
					scene: {
						x: 2782.3038433161723,
						y: -4192.48553031222,
						z: -418.2313476417967,
					},
				},
				style: 5,
				image: {
					id: "QomxQGCp6UH",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-fjDqWCglM8ml-bubble.png",
					title: "Hallway 4",
					links: [
						"7NDJdsDkB",
						"Z4Jj10NiZ",
						"1K85Wriu2",
						"lX2k4PbiR",
						"HHb-j2Pov",
						"_acR_1-tr",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "T4FypKyh4",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -61.83641465932561,
						y: -199.05000000000007,
						z: 329.25424419712624,
					},
					scene: {
						x: -803.5568939301409,
						y: -2589.9431890100423,
						z: 4258.953329881826,
					},
				},
				style: 5,
				image: {
					id: "AusVIplra50",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sTgP28HOEj0I-bubble.png",
					title: "Secondary bedroom 3",
					links: ["MxmEVPVLI", "T4FypKyh4"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "RZgdSUGlrd8",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Sxs416uHiw7h-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Sxs416uHiw7h-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Sxs416uHiw7h-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Secondary bedroom 2",
		uploaded: true,
		size: 9909062,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 1.3109450030185428,
			v: 1.43079259098289,
		},
		links: ["nwIoyJ5_S", "DxlaqjO0r", "WO5zx8rDR", "EjwMTvXXw", "NkGF5ABi_"],
		hotspots: [
			{
				id: "MxmEVPVLI",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -179.8955634434438,
						y: -199.77000000000004,
						z: 174.4293519332896,
					},
					scene: {
						x: -2830.8009358326035,
						y: -3157.8022765029873,
						z: 2738.5917946638856,
					},
				},
				style: 5,
				image: {
					id: "AusVIplra50",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sTgP28HOEj0I-bubble.png",
					title: "Secondary bedroom 3",
					links: ["MxmEVPVLI"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "3BHNWY2Wu",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 122.58404437502716,
						y: -199.43999999999997,
						z: -107.95851484048775,
					},
					scene: {
						x: 2404.5176084833643,
						y: -3907.5531657236043,
						z: -2105.250289906125,
					},
				},
				style: 5,
				image: {
					id: "0i31MpX3JME",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-7iynh4jHM89n-bubble.png",
					title: "Secondary bedroom",
					links: [
						"01vOVVrP1",
						"9PsGIOlmA",
						"JKBrcVegV",
						"WxdEAmrjj",
						"FKMzI9XJ-",
						"WrKg9hE37",
						"ReKPvulBf",
						"XOyO-gDjM",
						"aM_9aB0zT",
						"8waAX8wHz",
						"3BHNWY2Wu",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "AusVIplra50",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sTgP28HOEj0I-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sTgP28HOEj0I-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-sTgP28HOEj0I-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Secondary bedroom 3",
		uploaded: true,
		size: 10054873,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 1.6184376904938103,
			v: 1.4391783785280703,
		},
		links: ["MxmEVPVLI", "T4FypKyh4"],
	},
	{
		id: "G8ea7e1wzI",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-EAOv_31zMDnD-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-EAOv_31zMDnD-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-EAOv_31zMDnD-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway 4",
		uploaded: true,
		size: 9943917,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.1404881041908015,
			v: 1.430792763191291,
		},
		links: ["YrcxynD0w", "brxPqVY5Q", "9Nesc92-H", "8QybzIJrT"],
		hotspots: [
			{
				id: "WxdEAmrjj",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 127.06031807861805,
						y: -199.9,
						z: -97.9698219096813,
					},
					scene: {
						x: 2502.7503765352494,
						y: -3934.57446705613,
						z: -1934.081480966313,
					},
				},
				style: 5,
				image: {
					id: "0i31MpX3JME",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-7iynh4jHM89n-bubble.png",
					title: "Secondary bedroom",
					links: ["01vOVVrP1", "9PsGIOlmA", "JKBrcVegV", "WxdEAmrjj"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "iRqjCDq--D",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-oX92l0RD6myj-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-oX92l0RD6myj-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-oX92l0RD6myj-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "third bedroom ",
		uploaded: true,
		size: 9933722,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.4099095875097908,
			v: 1.4894941340351227,
		},
		links: [
			"pHzV509sf",
			"QGJ2nd2M8",
			"OedJcNvVQ",
			"Xlyft_yAU",
			"kpy4lAsk3",
			"Zt754yNfA",
			"Rqz4mh9Yl",
			"-TWJktyI3",
			"oae2b19HE",
			"JDutQg9j4",
			"ZTDzF7yUP",
			"D_CqwDvZ3",
			"8IjenYh_6",
		],
		hotspots: [
			{
				id: "mdkJQfq9C",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -92.82125454309353,
						y: -199.08999999999997,
						z: 63.11372248927214,
					},
					scene: {
						x: -2047.4874552710169,
						y: -4400.864107824076,
						z: 1390.9323319708149,
					},
				},
				style: 5,
				image: {
					id: "XYWq07231a",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Hvi45W-uGqIr-bubble.png",
					title: "third bedroom 2",
					links: ["mdkJQfq9C"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "waNZ4pUD6",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 58.16710088110733,
						y: -199.01999999999995,
						z: -162.31671880700262,
					},
					scene: {
						x: 1113.589707132445,
						y: -3818.82603581455,
						z: -3108.5252751759876,
					},
				},
				style: 5,
				image: {
					id: "Euy8a0hP2q",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VLhLup2kzBcF-bubble.png",
					title: "Hallway 5",
					links: ["waNZ4pUD6"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "qXjz_B5AN",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 140.3491867022272,
						y: -199.18999999999994,
						z: -306.22201838120264,
					},
					scene: {
						x: 1809.1426431749517,
						y: -2579.1163847697007,
						z: -3944.4836397622976,
					},
				},
				style: 5,
				image: {
					id: "LU6-xwJMAU",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-bubble.png",
					title: "Hallway 6",
					links: [
						"HaiV7wgum",
						"AijD_rrK0",
						"jvSemufGq",
						"2aZaS6xNV",
						"9ObzsAJ7G",
						"6QCSDlSVe",
						"Il_JjQTmr",
						"t9hkhi8An",
						"0OnDtOOLi",
						"oLIrGOJ8l",
						"qnkfeLWRq",
						"_H3eyS7Tr",
						"KwV5aZEkU",
						"qXjz_B5AN",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "YrcxynD0w",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 97.1185224492009,
						y: -199.07,
						z: -49.53951162802784,
					},
					scene: {
						x: 2150.9191756640807,
						y: -4434.039963037939,
						z: -1096.057641271883,
					},
				},
				style: 5,
				image: {
					id: "G8ea7e1wzI",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-EAOv_31zMDnD-bubble.png",
					title: "Hallway 4",
					links: ["YrcxynD0w"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "XYWq07231a",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Hvi45W-uGqIr-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Hvi45W-uGqIr-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Hvi45W-uGqIr-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "third bedroom 2",
		uploaded: true,
		size: 10368638,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -0.12322815529629141,
			v: 1.531407408870778,
		},
		links: [
			"mdkJQfq9C",
			"aMR5AFUvk",
			"JHL6vfibm",
			"s4BqvF6qf",
			"rbVxxZrl2",
			"vqhlHYgy5",
			"e_QVPUz34",
			"MQYADhTxN",
		],
		hotspots: [
			{
				id: "eP42DFMFW",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -163.0621973823204,
						y: -199.14000000000001,
						z: 186.17851167310326,
					},
					scene: {
						x: -2589.858054948843,
						y: -3170.0422208865825,
						z: 2953.444366756813,
					},
				},
				style: 5,
				image: {
					id: "Q9uEOI581N",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Yx73XLuQhYoI-bubble.png",
					title: "third bedroom 3",
					links: ["eP42DFMFW"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "Xlyft_yAU",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 51.781699346219376,
						y: -199.77999999999997,
						z: -169.45750305756255,
					},
					scene: {
						x: 981.9058192076423,
						y: -3774.9997389624,
						z: -3204.560056329821,
					},
				},
				style: 5,
				image: {
					id: "iRqjCDq--D",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-oX92l0RD6myj-bubble.png",
					title: "third bedroom ",
					links: ["pHzV509sf", "QGJ2nd2M8", "OedJcNvVQ", "Xlyft_yAU"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "Q9uEOI581N",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Yx73XLuQhYoI-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Yx73XLuQhYoI-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-Yx73XLuQhYoI-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "third bedroom 3",
		uploaded: true,
		size: 10671398,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -0.10062876897167276,
			v: 1.5146523131538083,
		},
		links: ["eP42DFMFW"],
	},
	{
		id: "Euy8a0hP2q",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VLhLup2kzBcF-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VLhLup2kzBcF-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VLhLup2kzBcF-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway 5",
		uploaded: true,
		size: 10830592,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.375513001267823,
			v: 1.472722449282516,
		},
		links: [
			"waNZ4pUD6",
			"H2v-H4C-n",
			"C-XOx8CpJ",
			"t16KKpfhD",
			"EfH9hj7Y-",
			"oeI8GEQmy",
			"A1yUAEyBO",
		],
		hotspots: [
			{
				id: "HaiV7wgum",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -120.03720839180646,
						y: -199.67,
						z: 48.10480313387918,
					},
					scene: {
						x: -2539.7355727004738,
						y: -4241.528737304226,
						z: 1024.4670270272095,
					},
				},
				style: 5,
				image: {
					id: "LU6-xwJMAU",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-bubble.png",
					title: "Hallway 6",
					links: ["HaiV7wgum"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "Rqz4mh9Yl",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 115.9500655262259,
						y: -199.13999999999996,
						z: -182.48334251993694,
					},
					scene: {
						x: 1988.9722885261226,
						y: -3429.151572332914,
						z: -3128.3166047983636,
					},
				},
				style: 5,
				image: {
					id: "iRqjCDq--D",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-oX92l0RD6myj-bubble.png",
					title: "third bedroom ",
					links: [
						"pHzV509sf",
						"QGJ2nd2M8",
						"OedJcNvVQ",
						"Xlyft_yAU",
						"kpy4lAsk3",
						"Zt754yNfA",
						"Rqz4mh9Yl",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "LU6-xwJMAU",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway 6",
		uploaded: true,
		size: 9659412,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 2.864950871585256,
			v: 1.438883423510796,
		},
		links: [
			"HaiV7wgum",
			"AijD_rrK0",
			"jvSemufGq",
			"2aZaS6xNV",
			"9ObzsAJ7G",
			"6QCSDlSVe",
			"Il_JjQTmr",
			"t9hkhi8An",
			"0OnDtOOLi",
			"oLIrGOJ8l",
			"qnkfeLWRq",
			"_H3eyS7Tr",
			"KwV5aZEkU",
			"qXjz_B5AN",
		],
		hotspots: [
			{
				id: "iEh10nmLJ",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -92.35024366942864,
						y: -199.33,
						z: 20.548190898186185,
					},
					scene: {
						x: -2114.4810661918455,
						y: -4560.280806736621,
						z: 471.6341847358879,
					},
				},
				style: 5,
				image: {
					id: "UWefDT0hGl",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-LOlMxJioT92l-bubble.png",
					title: "Hallway bathroom",
					links: ["iEh10nmLJ"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "uxjRVzaLA",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -224.08418093762762,
						y: -199.16000000000003,
						z: 51.47684135165705,
					},
					scene: {
						x: -3710.868013231481,
						y: -3314.0151251331977,
						z: 853.5222787640813,
					},
				},
				style: 5,
				image: {
					id: "uRiMtBV0gj",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-DWh1EkEHgWfx-bubble.png",
					title: "Hallway bathroom 2",
					links: ["2SmAe4DaM", "uxjRVzaLA"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "yB4hGJ25I",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: "87",
				coords: {
					plane: {
						x: 194.60322442410742,
						y: -199.98999999999998,
						z: 26.57324067999652,
					},
					scene: {
						x: 3504.854873215821,
						y: -3601.8320289177636,
						z: 481.0722710150098,
					},
				},
				style: 2,
				image: {
					id: "6geCLT4Wwa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QM-9IDsLskMQ-bubble.png",
					title: "Hallway 7",
					links: [
						"rDRS8kti0",
						"2psTcZ7BH",
						"LLpAmmbMH",
						"2WYGjwceS",
						"LzkMbQNtY",
						"tW2gsEMlQ",
						"rNDrGFDIn",
						"yB4hGJ25I",
					],
					url: "",
				},
				subtype: "360",
				type: "floating",
				useTitleOfDestinationScene: true,
			},
			{
				id: "EfH9hj7Y-",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -3.185387147701193,
						y: -199.38,
						z: -148.71391145650415,
					},
					scene: {
						x: -65.28660250675587,
						y: -4049.2555457859744,
						z: -3014.1915577754835,
					},
				},
				style: 5,
				image: {
					id: "Euy8a0hP2q",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-VLhLup2kzBcF-bubble.png",
					title: "Hallway 5",
					links: [
						"waNZ4pUD6",
						"H2v-H4C-n",
						"C-XOx8CpJ",
						"t16KKpfhD",
						"EfH9hj7Y-",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "UWefDT0hGl",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-LOlMxJioT92l-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-LOlMxJioT92l-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-LOlMxJioT92l-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway bathroom",
		uploaded: true,
		size: 9644740,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 1.7627162545534802,
			v: 1.329866772527062,
		},
		links: [
			"iEh10nmLJ",
			"m_6gDvkwf",
			"QCYgnGBRi",
			"g19PgLZHN",
			"dbhq4SaFi",
			"NtsCAKApl",
		],
		hotspots: [
			{
				id: "2SmAe4DaM",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -49.036223128660005,
						y: -199.42000000000002,
						z: 128.6726709212384,
					},
					scene: {
						x: -1014.390779796495,
						y: -4158.038726863324,
						z: 2677.5573455199924,
					},
				},
				style: 5,
				image: {
					id: "uRiMtBV0gj",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-DWh1EkEHgWfx-bubble.png",
					title: "Hallway bathroom 2",
					links: ["2SmAe4DaM"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "0OnDtOOLi",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 8.481213483825863,
						y: -199.03999999999996,
						z: -129.77792951282518,
					},
					scene: {
						x: 181.4535430086002,
						y: -4233.031167691308,
						z: -2746.098065814858,
					},
				},
				style: 5,
				image: {
					id: "LU6-xwJMAU",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-bubble.png",
					title: "Hallway 6",
					links: [
						"HaiV7wgum",
						"AijD_rrK0",
						"jvSemufGq",
						"2aZaS6xNV",
						"9ObzsAJ7G",
						"6QCSDlSVe",
						"Il_JjQTmr",
						"t9hkhi8An",
						"0OnDtOOLi",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "uRiMtBV0gj",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-DWh1EkEHgWfx-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-DWh1EkEHgWfx-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-DWh1EkEHgWfx-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway bathroom 2",
		uploaded: true,
		size: 10289744,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.485Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 1.9160681805501243,
			v: 1.4388843206161435,
		},
		links: [
			"2SmAe4DaM",
			"uxjRVzaLA",
			"0EoZ58e_1",
			"lsMf9ufLd",
			"2R70NWaQM",
			"vD60ayx5R",
		],
		hotspots: [
			{
				id: "g19PgLZHN",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 50.37524704570308,
						y: -199.90999999999994,
						z: -115.88005549667366,
					},
					scene: {
						x: 1075.3658191175634,
						y: -4263.9683459707285,
						z: -2479.5331715222374,
					},
				},
				style: 5,
				image: {
					id: "UWefDT0hGl",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-LOlMxJioT92l-bubble.png",
					title: "Hallway bathroom",
					links: ["iEh10nmLJ", "m_6gDvkwf", "QCYgnGBRi", "g19PgLZHN"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "t9hkhi8An",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 62.3728294412893,
						y: -199.44999999999996,
						z: -239.876972748636,
					},
					scene: {
						x: 989.0881137692127,
						y: -3169.981380675449,
						z: -3803.2306085596433,
					},
				},
				style: 5,
				image: {
					id: "LU6-xwJMAU",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-bubble.png",
					title: "Hallway 6",
					links: [
						"HaiV7wgum",
						"AijD_rrK0",
						"jvSemufGq",
						"2aZaS6xNV",
						"9ObzsAJ7G",
						"6QCSDlSVe",
						"Il_JjQTmr",
						"t9hkhi8An",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "6geCLT4Wwa",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QM-9IDsLskMQ-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QM-9IDsLskMQ-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QM-9IDsLskMQ-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Hallway 7",
		uploaded: true,
		size: 10613353,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.484Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.8017864915918855,
			v: 1.3560733075696356,
		},
		infospots: [],
		hotspots: [
			{
				id: "kLW94qzVM",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -114.51333677789036,
						y: -199.5,
						z: 5.295578796513045,
					},
					scene: {
						x: -2512.046297271347,
						y: -4377.846369171127,
						z: 117.89003901382816,
					},
				},
				style: 5,
				image: {
					id: "QXiLtR7hfE",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QgOFRT8ZbnDm-bubble.png",
					title: "Master Bedroom ",
					links: ["kLW94qzVM"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "9ObzsAJ7G",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: "315",
				coords: {
					plane: {
						x: 127.23065750283487,
						y: -199.92,
						z: 8.7634023922827,
					},
					scene: {
						x: 2712.4209949155315,
						y: -4254.38503004921,
						z: 183.4314913891516,
					},
				},
				style: 2,
				image: {
					id: "LU6-xwJMAU",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z--PmTDN_xVai5-bubble.png",
					title: "Hallway 6",
					links: [
						"HaiV7wgum",
						"AijD_rrK0",
						"jvSemufGq",
						"2aZaS6xNV",
						"9ObzsAJ7G",
					],
					url: "",
				},
				subtype: "360",
				type: "floating",
				useTitleOfDestinationScene: true,
			},
		],
		links: [
			"rDRS8kti0",
			"2psTcZ7BH",
			"LLpAmmbMH",
			"2WYGjwceS",
			"LzkMbQNtY",
			"tW2gsEMlQ",
			"rNDrGFDIn",
			"yB4hGJ25I",
		],
	},
	{
		id: "QXiLtR7hfE",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QgOFRT8ZbnDm-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QgOFRT8ZbnDm-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QgOFRT8ZbnDm-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Master Bedroom ",
		uploaded: true,
		size: 11062141,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.484Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -2.280802750166485,
			v: 1.17996735055315,
		},
		links: [
			"kLW94qzVM",
			"vN7tmbvsR",
			"NU33dvm24",
			"vStuJZPBv",
			"lRstYxX5q",
			"7qtJ6rq2s",
		],
		hotspots: [
			{
				id: "WL_LLzLsE",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -9.551332114808755,
						y: -199.43000000000006,
						z: 129.35795742870292,
					},
					scene: {
						x: -206.29886700440673,
						y: -4233.638312474022,
						z: 2742.7972540746077,
					},
				},
				style: 5,
				image: {
					id: "pYVOGJnDCW",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-TPtiJ8G7LanA-bubble.png",
					title: "Master Bedroom  2",
					links: ["WL_LLzLsE"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "LzkMbQNtY",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 145.2686136498671,
						y: -199.63,
						z: -61.01034142742,
					},
					scene: {
						x: 2880.9248059758747,
						y: -3965.296407088982,
						z: -1212.5827019971032,
					},
				},
				style: 5,
				image: {
					id: "6geCLT4Wwa",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QM-9IDsLskMQ-bubble.png",
					title: "Hallway 7",
					links: [
						"rDRS8kti0",
						"2psTcZ7BH",
						"LLpAmmbMH",
						"2WYGjwceS",
						"LzkMbQNtY",
					],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "pYVOGJnDCW",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-TPtiJ8G7LanA-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-TPtiJ8G7LanA-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-TPtiJ8G7LanA-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Master Bedroom  2",
		uploaded: true,
		size: 11340030,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.484Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.6338511929953754,
			v: 1.3716110788770675,
		},
		links: [
			"WL_LLzLsE",
			"oMHeoJndo",
			"n1-CP4ELk",
			"4bs_uJaF4",
			"ijLlHDySq",
			"yCFLtoXas",
		],
		hotspots: [
			{
				id: "KGQVYkjUV",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -104.82640965786989,
						y: -199.50000000000003,
						z: 132.2278909776442,
					},
					scene: {
						x: -2027.3153847784538,
						y: -3856.193088809614,
						z: 2551.2434821055645,
					},
				},
				style: 5,
				image: {
					id: "6t8dldA3an",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-znTye0M8suLN-bubble.png",
					title: "Master Bedroom  3",
					links: ["KGQVYkjUV"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "vStuJZPBv",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 167.08520966580951,
						y: -199.40999999999994,
						z: -68.87558523230908,
					},
					scene: {
						x: 3126.893687492695,
						y: -3746.5618153263604,
						z: -1293.0373527052373,
					},
				},
				style: 5,
				image: {
					id: "QXiLtR7hfE",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-QgOFRT8ZbnDm-bubble.png",
					title: "Master Bedroom ",
					links: ["kLW94qzVM", "vN7tmbvsR", "NU33dvm24", "vStuJZPBv"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "6t8dldA3an",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-znTye0M8suLN-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-znTye0M8suLN-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-znTye0M8suLN-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Master Bedroom  3",
		uploaded: true,
		size: 11296857,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.484Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: -1.4833809485126546,
			v: 1.5561048498305179,
		},
		links: [
			"KGQVYkjUV",
			"9uOiyOru-",
			"g9oLDoiU5",
			"xY_cQhCph",
			"CHOmCLIrk",
			"dh0_g-6iL",
		],
		hotspots: [
			{
				id: "crEqG9SY6",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 204.70771011531383,
						y: -199.74000000000004,
						z: 120.47844337233037,
					},
					scene: {
						x: 3330.7632546449327,
						y: -3246.352431636038,
						z: 1961.7104612343958,
					},
				},
				style: 5,
				image: {
					id: "ggY5FJJGDO",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mFeLjLB5d7yP-bubble.png",
					title: "Master Bedroom  4",
					links: ["crEqG9SY6"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "4bs_uJaF4",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 197.05980269032526,
						y: -199.81999999999996,
						z: -161.51166815092392,
					},
					scene: {
						x: 3071.8157014668036,
						y: -3116.207425943906,
						z: -2519.8164432877543,
					},
				},
				style: 5,
				image: {
					id: "pYVOGJnDCW",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-TPtiJ8G7LanA-bubble.png",
					title: "Master Bedroom  2",
					links: ["WL_LLzLsE", "oMHeoJndo", "n1-CP4ELk", "4bs_uJaF4"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "ggY5FJJGDO",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mFeLjLB5d7yP-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mFeLjLB5d7yP-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mFeLjLB5d7yP-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Master Bedroom  4",
		uploaded: true,
		size: 9676201,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.484Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.5450882684607951,
			v: 1.5980344164126854,
		},
		links: [
			"crEqG9SY6",
			"Cdwawxhwi",
			"byUUNoUSh",
			"ifg-07eQg",
			"kSaKXyklM",
			"LpDsnhE3S",
		],
		hotspots: [
			{
				id: "GnD-EtiX0",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: -59.79541253386124,
						y: -199.67000000000002,
						z: 95.49753507594531,
					},
					scene: {
						x: -1319.3805616242441,
						y: -4393.613096343716,
						z: 2109.811054055289,
					},
				},
				style: 5,
				image: {
					id: "cL9gXOyflE",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nhiIGD3IBavq-bubble.png",
					title: "Master Bedroom Bathroom ",
					links: ["GnD-EtiX0"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "xY_cQhCph",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 205.43177974737253,
						y: -199.75999999999996,
						z: -115.26928021226688,
					},
					scene: {
						x: 3359.984809954034,
						y: -3266.009305413561,
						z: -1880.6242199637088,
					},
				},
				style: 5,
				image: {
					id: "6t8dldA3an",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-znTye0M8suLN-bubble.png",
					title: "Master Bedroom  3",
					links: ["KGQVYkjUV", "9uOiyOru-", "g9oLDoiU5", "xY_cQhCph"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "cL9gXOyflE",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nhiIGD3IBavq-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nhiIGD3IBavq-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nhiIGD3IBavq-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Master Bedroom Bathroom ",
		uploaded: true,
		size: 9373370,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.484Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.0000015806541081575531,
			v: 1.5980346107896402,
		},
		links: [
			"GnD-EtiX0",
			"balZ7Uzsv",
			"etlL9YVod",
			"t4bOoYVg-",
			"rjO9ysD0j",
			"ScZxmIH1U",
		],
		hotspots: [
			{
				id: "J082-3_fB",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 11.539521369400795,
						y: -199.58000000000004,
						z: 157.91073699183798,
					},
					scene: {
						x: 226.5435212215337,
						y: -3956.4187718216344,
						z: 3128.9354453166084,
					},
				},
				style: 5,
				image: {
					id: "u2alK-yG3",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-j9_n4fo6PhsG-bubble.png",
					title: "Master Bedroom Bathroom  2",
					links: ["J082-3_fB"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
			{
				id: "ifg-07eQg",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 16.642837898523062,
						y: -199.33,
						z: -172.4642944938737,
					},
					scene: {
						x: 321.3743790353788,
						y: -3812.9092836234177,
						z: -3292.99218400564,
					},
				},
				style: 5,
				image: {
					id: "ggY5FJJGDO",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-mFeLjLB5d7yP-bubble.png",
					title: "Master Bedroom  4",
					links: ["crEqG9SY6", "Cdwawxhwi", "byUUNoUSh", "ifg-07eQg"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
	{
		id: "u2alK-yG3",
		preview: false,
		dimensions: {},
		is2D: false,
		aspectRatio: 0.5,
		panoramaType: "image_panorama",
		url: "https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-j9_n4fo6PhsG-scene.jpg",
		thumbUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-j9_n4fo6PhsG-thumb.jpg",
		hotspotUrl:
			"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-j9_n4fo6PhsG-bubble.png",
		previewUrl: "https://gc.360-data.com/tours/vwO5M4A2e/undefined",
		title: "Master Bedroom Bathroom  2",
		uploaded: true,
		size: 9384273,
		dateUploaded: "2024-10-11T15:41:46.599Z",
		dateModified: "2024-10-11T15:41:46.484Z",
		type: "image/jpeg",
		nadir: null,
		rotationNorthPoint: {
			h: 0.9231091180496991,
			v: 1.6148065335054511,
		},
		links: ["J082-3_fB", "RjfqkFvX1", "LWEm5xmHU"],
		hotspots: [
			{
				id: "t4bOoYVg-",
				title: "",
				scale: 1,
				opacity: 1,
				rotation: 0,
				coords: {
					plane: {
						x: 130.53460833728127,
						y: -199.26999999999998,
						z: -137.06713300857018,
					},
					scene: {
						x: 2393.470391484093,
						y: -3665.7951688476965,
						z: -2514.5122510657834,
					},
				},
				style: 5,
				image: {
					id: "cL9gXOyflE",
					hotspotUrl:
						"https://gc.360-data.com/tours/gnRCvoJIUh8z/gnRCvoJIUh8z-nhiIGD3IBavq-bubble.png",
					title: "Master Bedroom Bathroom ",
					links: ["GnD-EtiX0", "balZ7Uzsv", "etlL9YVod", "t4bOoYVg-"],
					url: "",
				},
				subtype: "360",
				type: "floor",
				useTitleOfDestinationScene: true,
			},
		],
	},
];
let initialRotation = undefined;
// Debug
const gui = new GUI();
const debugObj = {
	sphereRotation: 0,
	cameraRotation: 0,

	setNorth: () => {
		const hotspot = scene.children.find(
			(item) => item.userData.name === sphere.material?.name,
		);
		if (hotspot?.userData.rotation === undefined) {
			if (initialRotation === undefined) {
				initialRotation = orbit.getAzimuthalAngle()
				hotspot.userData = {
					...hotspot.userData,
					rotation: 0,
				};
				return
			}
			hotspot.userData = {
				...hotspot.userData,
				rotation: initialRotation + -orbit.getAzimuthalAngle(),
			};
			sphere.rotation.y = initialRotation + -orbit.getAzimuthalAngle();
		} else {
			const newRotation =
				hotspot.userData.rotation + initialRotation + -orbit.getAzimuthalAngle();
			hotspot.userData = {
				...hotspot.userData,
				rotation: newRotation,
			};
			sphere.rotation.y = newRotation;
		}
		orbit.minAzimuthAngle =
			initialRotation + (orbit.getAzimuthalAngle() - orbit.getAzimuthalAngle());
		orbit.maxAzimuthAngle =
			initialRotation + (orbit.getAzimuthalAngle() - orbit.getAzimuthalAngle());
		orbit.update();
		orbit.minAzimuthAngle = -Infinity;
		orbit.maxAzimuthAngle = Infinity;
	},
};
gui.add(debugObj, "sphereRotation", -Math.PI, Math.PI, 0.001).onChange(() => {
	sphere.rotation.y = debugObj.sphereRotation;
});
gui.add(debugObj, "cameraRotation", -Math.PI, Math.PI, 0.001).onChange(() => {
	orbit.minAzimuthAngle = debugObj.cameraRotation;
	orbit.maxAzimuthAngle = debugObj.cameraRotation;
	orbit.update();
	orbit.minAzimuthAngle = -Infinity;
	orbit.maxAzimuthAngle = Infinity;


});
gui.add(debugObj, "setNorth");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	1,
	1000,
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
const sphere = new THREE.Mesh();
const geometry = new THREE.SphereGeometry(25, 60, 60);
geometry.scale(-1, 1, 1);
sphere.geometry = geometry;

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
					-Number(infoArr[1].split(",")[1]),
				),
				quaternion: new THREE.Quaternion(
					Number(infoArr[2].split(",")[2]),
					Number(infoArr[2].split(",")[1]),

					Number(infoArr[2].split(",")[3]),
					Number(infoArr[2].split(",")[0]),
				),
				name: infoArr[3].replace("unfurnished,", ""),
				floor: infoArr[4],
			};
		});
		panoArr.forEach((pano, index) => {
			const circle = new THREE.Mesh(
				new THREE.CircleGeometry(0.2, 30),
				new THREE.MeshBasicMaterial({
					color: "#ffffff",
					side: THREE.DoubleSide,
				}),
			);
			circle.geometry.applyMatrix4(
				new THREE.Matrix4().makeRotationX(0.5 * Math.PI),
			);
			circle.position.copy(pano.position);
			circle.name = "hotspot";
			scene.add(circle);
			const span = document.createElement("span");

			span.innerText = pano.img;

			document.body.appendChild(span);

			circle.userData = {
				texture: textureLoader.load("/static/" + pano.img),
				point: pano.position.clone(),
				el: span,
				name: pano.img,
				// quaternion: pano.quaternion.clone(),
			};
		});
		const pos = new THREE.Vector3(
			panoArr[0].position.x,
			0,
			panoArr[0].position.z,
		);
		camera.position.copy(pos);
		sphere.position.copy(pos);
		// biome-ignore lint/style/useTemplate: <explanation>
		const texture = textureLoader.load("/static/" + panoArr[0].img);
		texture.colorSpace = THREE.SRGBColorSpace;
		sphere.material = new THREE.MeshBasicMaterial({
			side: THREE.FrontSide,
			map: texture,
			name: panoArr[0].img,
		});

		// let euler = new THREE.Euler();
		// euler.setFromQuaternion(panoArr[0].quaternion.invert(), "YXZ");

		// sphere.rotation.set(0, euler.y, 0);

		scene.add(sphere);
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
			hotspot.userData.point.z,
		);
		camera.position.copy(pos);
		sphere.position.copy(pos);
		const target = pos
			.clone()
			.add(
				camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(0.0001),
			);

		orbit.target.copy(target);
		// biome-ignore lint/style/useTemplate: <explanation>
		const texture = hotspot.userData.texture;
		texture.colorSpace = THREE.SRGBColorSpace;
		// @ts-ignore
		sphere.material.dispose();
		sphere.material = new THREE.MeshBasicMaterial({
			side: THREE.FrontSide,
			map: texture,
			name: hotspot.userData.name,
		});

		// let euler = new THREE.Euler();
		// euler.setFromQuaternion(hotspot.userData.quaternion.invert(), "YXZ");

		// sphere.rotation.set(0, euler.y, 0);

		if (hotspot.userData.rotation) {
			sphere.rotation.set(0, hotspot.userData.rotation, 0);
		} else {
			sphere.rotation.set(0, 0, 0);
		}
	}
});

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	rayCaster.setFromCamera(mousePosition, camera);
	intersects = rayCaster.intersectObject(scene, true);
	// update elelement
	scene.children.forEach((child: any, _) => {
		if (child.name === "hotspot") {
			const vector: any = child.userData.point.clone();

			camera.updateMatrix();
			camera.updateMatrixWorld();
			const cameraMatrixInverse = camera.matrixWorld.clone().invert();

			// biome-ignore lint/style/noVar: <explanation>
			// biome-ignore lint/correctness/noInnerDeclarations: <explanation>
			var frustum = new THREE.Frustum();
			frustum.setFromProjectionMatrix(
				camera.projectionMatrix.clone().multiply(cameraMatrixInverse),
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
