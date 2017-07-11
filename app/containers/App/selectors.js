// makeSelectLocationState expects a plain JS object for the routing state
import { createSelector } from 'reselect';

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectAppDomain = () => (state) => state.get('app');

export const makeSelectMidiLink = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('linked'),
);

export const makeSelectPad = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('step').toJS(),
);

export const makeSelectKnob = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('switcher').toJS(),
);

export const makeSelectSoma = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('soma').toJS(),
);

export const makeSelectPsiche = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('psiche').toJS(),
);


export {
  makeSelectLocationState,
};
