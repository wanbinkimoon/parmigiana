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
import { padController, knobController } from './controllers';

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
  },
  switcher: {
    soma: 'size',
    psiche: 'size'
  },
  soma: {
    a: 1,
    b: 1,
    c: 1
  },
  psiche: {
    a: 1,
    b: 1,
    c: 1
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {

    case INIT:
      return state
        .set('linked', action.i.length != 0)

    case LOAD_MIDI:
      return state
        .set('device', action.data[0].name)
        .set('manufacturer', action.data[0].manufacturer)
    
    case PAD:
      // log(action.e)
      return padController(state, initialState, action.e)
      
    case KNOB: 
      // log(action.e)
      return knobController(state, initialState, action.e)

    default:
      return state;
  }
}

export default appReducer;