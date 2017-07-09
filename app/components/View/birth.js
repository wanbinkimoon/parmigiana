 import * as THREE from 'three'

 export const birth = (models) => models.map((d) => {
  const { soma, name, type, material, wire } = d

  const widthC = soma.size.width
  const heightC = soma.size.height
  const depthC = soma.size.depth

  window[name] = new THREE.BoxGeometry( widthC, heightC, depthC );
  window[`wire_${name}`] = new THREE.EdgesGeometry( window[name] );
  window[`wire_mat_${name}`] = new THREE.LineBasicMaterial( { ...material } );
  window[`model_${name}`] = new THREE.LineSegments( window[`wire_${name}`],window[`wire_mat_${name}`] )
 
  window[`model_${name}`].position.x = soma.position.x
  window[`model_${name}`].position.y = soma.position.y
  window[`model_${name}`].position.z = soma.position.z

  window[`model_${name}`].rotation.x = soma.rotation.x
  window[`model_${name}`].rotation.y = soma.rotation.y
  window[`model_${name}`].rotation.z = soma.rotation.z

  window[`model_${name}`].scale.x = soma.scale.x
  window[`model_${name}`].scale.y = soma.scale.y
  window[`model_${name}`].scale.z = soma.scale.z

  //  window[`model_${name}`].position = { x: soma.position.x, y: soma.position.y, z: soma.position.z }
})