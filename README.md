# Parmigiana
MIDI controlled visual with three js 

# Intro 
**Parmigiana** is based on that React-Redux alchemy that makes things shine.   

# Device mapping 

## Supported MIDI device 
Unfortunally at the moment the only device supported is the most famous **AKAI LPD8**

## LPD8  
### Pad
| CHANNEL | CONTROLLER ID | ACTION           |
|---------|---------------|------------------|
| 1       | 36            | Select model     |
| 1       | 37            | Pull from public |
| 1       | 38            | Shape 1          |
| 1       | 39            | Wire             |
| 1       | 40            | New model        |
| 1       | 41            | Push in public   |
| 1       | 42            | Shape 2          |
| 1       | 43            | Plain            |

-----------------------
| ↑40 ↓36 | ↑41 ↓37 | ↑42 ↓38 | ↑43 ↓39 |
|---------|---------|---------|---------|
| new     | push    | shape 1 | wire    |
| select  | pull    | shape 2 | plain   |

# Dynamics 
**Parmigiana** allow you to create 3d models with ThreeJS and then push them in a presentational view. 

# Model structure
Models are firstly created in the constructor and then pushed in the scene `array`

## Construction object 
This section describe how is structured the object passed to the render engine. 

### Cube 
```javascript
{
  class: cube,
  name: cube_1,
  wire: true,
  material: {
    color: tomato,
    ...
  },
  soma: {
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      ...
    },
    scale: {
      ...
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
      ...
    },
    scale: {
      ...
    },
    size: {
      width: 40,
      height: 40,
      depth: 40
    }
  }
}
```

# Future Developmpens
  - [ ] Integrate React VR 


# Author
Parmigiana is a project developed with <3 by [Nicola Bertelloni](nicola.bertelloni@gmail.com)