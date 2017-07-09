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
