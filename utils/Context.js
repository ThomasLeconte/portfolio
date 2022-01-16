import { AxesHelper, PerspectiveCamera, PointLight, RectAreaLight, Scene, SpotLight, Vector3, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

export class Context {
  domId = null;
  scene = new Scene();
  debug = false;
  camera = new PerspectiveCamera();
  renderer = new WebGLRenderer();
  controls = null;
  modelLoader = new GLTFLoader();
  primaryLight = null;
  objects = [];

  /**
   * 
   * @param {string} domId - Id of the dom element
   * @param {boolean} controls - If true, add controls to the scene
   * @param {boolean} antialiasing - If true, antialiasing is enabled
   * @param {boolean} transparent - If true, the background is transparent
   * @param {boolean} debug - If true, add axes to the scene
   */
  constructor(domId, controls, antialiasing, transparent, debug){
    this.domId = domId;
    this.debug = debug;
    this.loadCamera();
    this.loadRenderer(controls, antialiasing, transparent);
    this.setLight();
  }

  loadRenderer(controls, antialiasing, transparent){
    const domElement = document.getElementById(this.domId);
    this.renderer = new WebGLRenderer({ antialias: antialiasing, alpha: transparent });
    this.renderer.setSize(domElement.offsetWidth, domElement.offsetHeight);

    if(!this.debug) this.renderer.setClearColor(0x000000, 0);
    if (controls){
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    domElement.appendChild(this.renderer.domElement);
  }

  loadCamera(){
    const domElement = document.getElementById(this.domId);
    this.camera = new PerspectiveCamera(
      50,
      domElement.offsetWidth / domElement.offsetHeight,
      0.01,
      1000
    );
    this.camera.position.x = 4;
    this.camera.position.y = 5;
    this.camera.position.z = 1;
    this.scene.add(this.camera);
    if(this.debug) this.scene.add(new AxesHelper(1));
  }

  /**
   * 
   * @param {string} path - Path to the model
   * @param {number} scale - Scale of the model
   * @param {object} position {x, y, z}
   */
  addObjectToScene(name, path, scale, position, rotation){
    this.modelLoader.load(path, (gltf) => {
      const object = gltf.scene;
      if(scale){
        object.scale.set(scale, scale, scale);
      }else{
        object.scale.set(1, 1, 1);
      }
      if(position){
        object.position.set(position.x, position.y, position.z);
      }else{
        object.position.set(0, 0, 0);
      }
      this.scene.add(object);
      this.objects[name] = object;
    });
  }

  setLight(){
    this.primaryLight = new SpotLight(0xffffff, 1.3, 100, Math.PI / 2, 0.1);
    this.primaryLight.position.set(10, 5, 0);
    this.scene.add(this.primaryLight);
  }

  resize(){
    const domElement = document.getElementById(this.domId);
    this.camera.aspect = domElement.offsetWidth / domElement.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(domElement.offsetWidth, domElement.offsetHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}