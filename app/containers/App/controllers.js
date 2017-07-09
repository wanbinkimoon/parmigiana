import { fromJS, toJS } from 'immutable';

export const padController = (state, initialState, e) => {
  const { number } = e.note
  
  switch (number) {

    case 36:
      return state.set('step', initialState.get('step'))
        .setIn(['step', 'one'], {
          active: true,
          payload: 'select'
        } )

    case 40:
      return state.set('step', initialState.get('step'))
        .setIn(['step', 'one'], {
          active: true,
          payload: 'new'
        })

    case 37:
      return state.toJS().step.one.active ? 
      state.setIn(['step', 'two'], {
          active: true,
          payload: 'polygon'
        }) :
      state

    case 41:
      return state.toJS().step.one.active ? 
      state.setIn(['step', 'two'], {
          active: true,
          payload: 'cube'
        }) :
      state

    case 38:
      return state.toJS().step.two.active ? 
      state.setIn(['step', 'three'], {
          active: true,
          payload: 'wire'
        }) :
      state

    case 42:
      return state.toJS().step.two.active ? 
      state.setIn(['step', 'three'], {
          active: true,
          payload: 'plain'
        }) :
      state

    case 39:
      return state

    case 43:
      return state

    default:
      return state
  }
}

export const knobController = (state, initialState, e) => {
  const { controller, value } = e
  const { number } = controller

  const switchHandler = (value) => {
    if (0 <= value && value <= 21) {
      return 'size'
    } else if (22 <= value && value <= 43) {
      return 'position'
    } else if (44 <= value && value <= 65) {
      return 'rotation'
    } else if (66 <= value && value <= 87) {
      return 'scale'
    } else if (88 <= value && value <= 109) {
      return 'color'
    } else if (110 <= value && value <= 127) {
      return 'sides'
    } 
  }
  
  switch (number) {
    case 1:
      return state.setIn(['switcher', 'psiche'], switchHandler(value))
    case 5: 
      return state.setIn(['switcher', 'soma'], switchHandler(value))
    default:
      return state

  }
}