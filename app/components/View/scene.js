import * as THREE from 'three'

export default function Scene(screen, pW, pH, models){ 
  // Calling threejs. 
  
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("rgb(70, 70, 70)");

  // Create a camera. 
  // THREE.PerspectiveCamera(fov, aspect, near, far)
  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.05, 1000);

  // Place the camera at z of 100.
  camera.position.z = 100;

  // Add a renderer.
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( pW, pH );

  // Render the scene and add it to the dom.
  const sceneDOM = document.getElementById(screen)
  sceneDOM.appendChild( renderer.domElement );

  // Create a wireframe cube.
  const geometry = new THREE.BoxGeometry( 40, 40, 40 );
  const wirezz = new THREE.EdgesGeometry( geometry );
  const mat = new THREE.LineBasicMaterial( { color: 0x82E0AA, linewidth: 5 } );
  const cube = new THREE.LineSegments( wirezz, mat );

  // Create a wireframe icosaedro
  const ico = new THREE.IcosahedronGeometry(20, 0)  
  const wireframe2 = new THREE.EdgesGeometry( ico );
  const material2 = new THREE.LineBasicMaterial( { color: 0xF39C12 } );
  const cube2 = new THREE.LineSegments( wireframe2 , material2 );

  // -----------------------------------------------------------
  // TEST DATA PARSING
      const { soma, name, type, material, wire } = models.cube[0]

      const widthC = soma.size.width
      const heightC = soma.size.height
      const depthC = soma.size.depth

      window[name] = new THREE.BoxGeometry( widthC, heightC, depthC );
      window[`wire_${name}`] = new THREE.EdgesGeometry( window[name] );
      window[`wire_mat_${name}`] = new THREE.LineBasicMaterial( { ...material } );
      window[`model_${name}`] = new THREE.LineSegments( window[`wire_${name}`],window[`wire_mat_${name}`] )

  // const cubeSett = {
  //   depthTest: false,
  //   opacity: 0.5,
  //   name: 'cicciobello'
  // }

  // const objectTest = Object.keys(cubeSett).map((d) => cube.material[d] = cubeSett[d])

  scene.add( window[`model_${name}`] );
  // -----------------------------------------------------------


  scene.add( cube );
  scene.add( cube2 );

  // Adding a light. 
  const light = new THREE.PointLight(0xFFFFFF);
  light.position.set(0, 0, 100);
  scene.add(light);


  cube.scale.y = .5;
  cube.scale.x = 1;
  cube.scale.z = .25;

  cube.rotation.z = 45;
  cube.rotation.x = 45;
  cube.rotation.y = 45;

  cube2.scale.y = .25;
  cube2.scale.x = .25;
  cube2.scale.z = .25;

  cube2.rotation.z = 45;
  cube2.rotation.x = 45;
  cube2.rotation.y = 45;


  let iY = .001
  let iX = .001
  let iZ = .001

  let iY2 = .001
  let iX2 = .001
  let iZ2 = .001

  // Rendering the cube.
  const render = () => {
    requestAnimationFrame( render );
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    
    
    cube.scale.y += iY;
    cube.scale.x += iX;
    cube.scale.z += iZ;
    
    cube2.scale.y += iY2;
    cube2.scale.x += iX2;
    cube2.scale.z += iZ2;
    
    const min = .25
    const max = 1
    
    if ( cube.scale.y > max ) {
      iY = -.01;
    } else if ( cube.scale.y < min )  {
      iY = .01;
    }	
    
    if ( cube.scale.x > max ) {
      iX = -.01;
    } else if ( cube.scale.x < min )  {
      iX = .01;
    }	
    
    if ( cube.scale.z > max ) {
      iZ = -.01;
    } else if ( cube.scale.z < min )  {
      iZ = .01;
    }
    
    if ( cube2.scale.y > max ) {
      iY2 = -.01;
    } else if ( cube2.scale.y < min )  {
      iY2 = .01;
    }	
    
    if ( cube2.scale.x > max ) {
      iX2 = -.01;
    } else if ( cube2.scale.x < min )  {
      iX2 = .01;
    }	
    
    if ( cube2.scale.z > max ) {
      iZ2 = -.01;
    } else if ( cube2.scale.z < min )  {
      iZ2 = .01;
    }
  
  cube2.rotation.x += 0.001;
  

  };


  render();
}