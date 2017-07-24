/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const INIT = 'app/App/INIT';
export const LOAD_MIDI = 'app/App/LOAD_MIDI';
export const PAD = 'app/App/PAD';
export const KNOB = 'app/App/KNOB';
export const MERCURIO = 'app/App/MERCURIO';
