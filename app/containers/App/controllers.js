import { fromJS, toJS } from 'immutable';

export const padController = (state, e) => {
  const { number } = e.note
  switch (number) {
    case 37:
    case 41:
      console.log(state.get('note').toJS());
      return (
        state.set('step',  {
          1: true,
          2: false,
          3: false
        }).get('note').toJS().set(number, true)
      )
    case 38:
    case 42:
      return state
        .set('step',  {
          1: true,
          2: true,
          3: false
        })

    case 39:
    case 43:
      return state
        .set('step',  {
          1: true,
          2: true,
          3: true
        })
      
    default:
      return state
  }
}
