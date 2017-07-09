/*
 *
 * app reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT,
  LOAD_MIDI,
  PAD,
  KNOB
} from './constants';

import log from '../../utils/log';
import { padController } from './controllers';

const initialState = fromJS({
  linked: false,
  device: null,
  manufacturer: null,
  step: {
    one: {
      active: false,
      payload: null,
    }, 
    two: {
      active: false,
      payload: null,
    }, 
    three: {
      active: false,
      payload: null,
    }
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {

    case INIT:
      return state
        .set('linked', action.i.length != 0)

    case LOAD_MIDI:
      console.log('load midi')
      return state
        .set('device', action.data[0].name)
        .set('manufacturer', action.data[0].manufacturer)
    
    case PAD:
      log(action.e)
      return padController(state, initialState, action.e)
      
    case KNOB: 
      log(action.e)
      return state

    default:
      return state;
  }
}

export default appReducer;