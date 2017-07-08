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
renderer.setSize( 300, 300 );
// Render the scene and add it to the dom.
// node.appendChild( renderer.domElement );


// Create a wireframe cube.
var geometry = new THREE.BoxGeometry( 40, 40, 40 );
var wireframe = new THREE.EdgesGeometry( geometry );
var material = new THREE.LineBasicMaterial( { color: 0x82E0AA, linewidth: 5 } );
var cube = new THREE.LineSegments( wireframe, material );
var material2 = new THREE.LineBasicMaterial( { color: 0xF39C12, linewidth: 5 } );
var cube2 = new THREE.LineSegments( wireframe, material2 );
cube.material.depthTest = false;
cube.material.opacity = 0.5;
// cube.material.transparent = true;
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
cube2.scale.z = .75;

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
	
};


render();