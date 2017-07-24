export const mappingValues = (knobData, somaData, psicheData) => {

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

  let psychic = new Object  
  psychic = {
    color: {
      h: psicheData.a,
      s: psicheData.b,
      l: psicheData.c
    },
    size: {
      width: psicheData.a,
      height: psicheData.b,
      depth: psicheData.c
    },
    sides: {
      det: psicheData.a,
      teta: psicheData.b,
      phi: psicheData.c
    },
    position: {
      x: psicheData.a,
      y: psicheData.b,
      z: psicheData.c
    },
    scale: {
      x: psicheData.a,
      y: psicheData.b,
      z: psicheData.c
    },
    rotation: {
      x: psicheData.a,
      y: psicheData.b,
      z: psicheData.c
    },
  }
  
  console.group('somatic')
  console.log(somatic)
  console.groupEnd()
  console.group('psychic')
  console.log(psychic)
  console.groupEnd()
}