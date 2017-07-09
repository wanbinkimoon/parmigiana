import * as THREE from 'three'
import { birth } from './birth'
import { life } from './life'

import colors from '../../utils/colors'
export default function Scene(screen, pW, pH, models) { 

  // definiting context 
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(colors.base.black);
  
  // Adding a light. 
  const light = new THREE.PointLight(0xFFFFFF);
  light.position.set(0, 0, 100);
  scene.add(light);

  // Create a camera. 
  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.05, 1000);
  camera.position.z = 100;

  // Add a renderer.
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( pW, pH );

  // Render the scene and add it to the dom.
  const sceneDOM = document.getElementById(screen)
  sceneDOM.appendChild( renderer.domElement );

  birth(models.cube)


  // const cubeSett = {
  //   depthTest: false,
  //   opacity: 0.5,
  //   name: 'cicciobello'
  // }

  // const objectTest = Object.keys(cubeSett).map((d) => cube.material[d] = cubeSett[d])
  models.cube.map((d) => scene.add( window[`model_${d.name}`] ))

  // -----------------------------------------------------------



  // Rendering the cube.
  const render = () => {

    life(models.cube)

    requestAnimationFrame( render );
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };


  render();
}