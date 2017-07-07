import { INIT, NOTE, KNOB } from './constants';

export function init(i) {
  return {
    type: INIT,
    i
  }
}

export function note(e) {
  return {
    type: NOTE,
    e
  }
}

export function knob(e) {
  return {
    type: KNOB,
    e
  }
}