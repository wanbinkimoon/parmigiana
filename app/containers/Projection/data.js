export const projection_model = {
  cube: [
    {
      type: 'cube',
      name: 'cube_1',
      wire: true,
      material: {
        color: 'tomato',
      },
      soma: {
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        rotation: {
          x: 45,
          y: 45,
          z: 45
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        size: {
          width: 40,
          height: 40,
          depth: 40
        }
      },
      psiche: {
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        rotation: {
          x: .01,
          y: 0,
          z: 0
        },
        scale: {
          x: 0,
          y: 0,
          z: 0
        },
        size: {
          width: 0,
          height: 0,
          depth: 0
        }
      }       
    },
    {
      type: 'cube',
      name: 'cube_2',
      wire: true,
      material: {
        color: 'orange',
      },
      soma: {
        position: {
          x: 0,
          y: 40,
          z: 0
        },
        rotation: {
          x: 25,
          y: 45,
          z: 0
        },
        scale: {
          x: 1,
          y: 1,
          z: 1.3
        },
        size: {
          width: 20,
          height: 20,
          depth: 20
        }
      },
      psiche: {
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        rotation: {
          x: .01,
          y: 0,
          z: 0
        },
        scale: {
          x: 0,
          y: 0,
          z: 0
        },
        size: {
          width: 0,
          height: 0,
          depth: 0
        }
      }       
    }
  ],
  polygon: [],
}