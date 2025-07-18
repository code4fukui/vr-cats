//import { GLTFLoader } from "https://code4fukui.github.io/three.js_examples/jsm/loaders/GLTFLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//import { GLTFLoader } from "https://threejs.org/examples/jsm/loaders/GLTFLoader.js";
//import * as THREE from "https://threejs.org/build/three.module.js";

export const loadGLTF = async (path) => {
  const gltfloader = new GLTFLoader();
  const data = await (await fetch(path)).arrayBuffer();
  const gltf = await gltfloader.parseAsync(data, "");
  return gltf;
};