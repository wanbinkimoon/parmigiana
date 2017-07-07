/*
 *
 * app reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT,
  NOTE,
  KNOB
} from './constants';

import log from '../../utils/log';

const initialState = fromJS({
  device: '',
  manufacturer: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {

    case INIT:
      return state
        .set('device', action.i[0].name)
        .set('manufacturer', action.i[0].manufacturer)
    
    case NOTE:
      log(action.e)
      return state 
    
    case KNOB: 
      log(action.e)
      return state

    default:
      return state;
  }
}

export default appReducer;