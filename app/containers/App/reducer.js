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
  device: '',
  manufacturer: '',
  step: {
          1: false,
          2: false,
          3: false
        },
  note: {

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
      log(action.e)
      return padController(state, action.e)
      
    case KNOB: 
      log(action.e)
      return state

    default:
      return state;
  }
}

export default appReducer;