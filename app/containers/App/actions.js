import { INIT, LOAD_MIDI, PAD, KNOB, MERCURIO } from './constants';

export function init(i) {
  return {
    type: INIT,
    i
  }
}

export function loadMidi(data) {
  return {
    type: LOAD_MIDI,
    data
  }
}

export function pad(e) {
  return {
    type: PAD,
    e
  }
}

export function knob(e) {
  return {
    type: KNOB,
    e
  }
}

export function mercurio(data) {
  return {
    type: MERCURIO,
    data
  }
}