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

### Pad mapping:
| ↑40 ↓36 | ↑41 ↓37 | ↑42 ↓38 | ↑43 ↓39 |
|---------|---------|---------|---------|
| new     | push    | shape 1 | wire    |
| select  | pull    | shape 2 | plain   |

### Knobs:

| CHANNEL | CONTROLLER ID | ACTION           |
|---------|---------------|------------------|
| 1       | 1            | soma.switcher    |
| 1       | 2            | soma.a           |
| 1       | 3            | soma.b          |
| 1       | 4            | soma.c             |
| 1       | 5            | psiche.switcher        |
| 1       | 6            | psiche.a   |
| 1       | 7           | psiche.b        |
| 1       | 8            | psiche.c          |

### Knob mapping:
| ROW | SWITCHER | A | B | C |
|--------|---------|---------|---------|---------|
| SOMA     | o    | o | o   | o |
| PSICHE     | o    | o | o   | o |


# Dynamics 
**Parmigiana** allow you to create 3d models with ThreeJS and then push them in a presentational view. 
# Model structure
Models are firstly created in the constructor and then pushed in the scene `array`

## Construction object 
This section describe how is structured the object passed to the render engine. 

### Cube 
```javascript
{
  type: cube,
  name: cube_1,
  wire: true,
  material: {
    color: tomato,
    ...
  },
  // This section describe the aspect and position of the model 
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
  // This section describe the movement of the model 
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


## The Dealer
The dealer handle the mapping of the knobs to the vasious aspects of *soma* and *psiche*. 

Here and example: 

```javascript
somatic = { // can either be 'psychic'
    color: {
      h: knob.a,
      s: knob.b,
      l: knob.c
    },
    size: {
      width: knob.a,
      height: knob.b,
      depth: knob.c
    },
    sides: {
      det: knob.a,
      teta: knob.b,
      phi: knob.c
    },
    position: {
      x: knob.a,
      y: knob.b,
      z: knob.c
    },
    scale: {
      x: knob.a,
      y: knob.b,
      z: knob.c
    },
    rotation: {
      x: knob.a,
      y: knob.b,
      z: knob.c
    },
  }
```

### Knob mapping:

| SWITCHER | A | B | C |
|---------|---------|---------|---------|
| color     | h    | s | l    |
| size  |  width | height |  depth |
| sides  |  det | teta |  phi |
| position  |  x | y |  x |
| scale  |  x | y |  x |
| rotation  |  x | y |  x |

# Future Developmpens
  - [ ] Implement min-max range of action in animations
  - [ ] Integrate React VR 


# Authors
• [Nicola Bertelloni](nicola.bertelloni@gmail.com)  – UX & development   
• [Massimiliano Mauro](mauro.massimiliano@gmail.com) – UX & UI 
