 import * as THREE from 'three'

 export const life = (models) => models.map((d) => {

  const { psiche, name } = d

  window[`model_${name}`].position.x += psiche.position.x
  window[`model_${name}`].position.y += psiche.position.y
  window[`model_${name}`].position.z += psiche.position.z

  window[`model_${name}`].rotation.x += psiche.rotation.x
  window[`model_${name}`].rotation.y += psiche.rotation.y
  window[`model_${name}`].rotation.z += psiche.rotation.z

  window[`model_${name}`].scale.x += psiche.scale.x
  window[`model_${name}`].scale.y += psiche.scale.y
  window[`model_${name}`].scale.z += psiche.position.z

  console.log(name)

 })