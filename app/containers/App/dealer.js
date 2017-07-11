export const mappingValues = (knobData, somaData, psicheData) => {
  console.log(somaData.a)

  let somatic = new Object  
  somatic = {
    color: {
      h: somaData.a,
      s: somaData.b,
      l: somaData.c
    },
    size: {
      width: somaData.a,
      height: somaData.b,
      depth: somaData.c
    },
    sides: {
      det: somaData.a,
      teta: somaData.b,
      phi: somaData.c
    },
    position: {
      x: somaData.a,
      y: somaData.b,
      z: somaData.c
    },
    scale: {
      x: somaData.a,
      y: somaData.b,
      z: somaData.c
    },
    rotation: {
      x: somaData.a,
      y: somaData.b,
      z: somaData.c
    },
  }
  
  console.log(somatic.color.h)
}