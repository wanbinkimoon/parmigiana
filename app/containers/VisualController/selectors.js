import { createSelector } from 'reselect';
import { fromJS, toJS } from 'immutable';

/**
 * Direct selector to the visualController state domain
 */
const selectVisualControllerDomain = () => (state) => state.get('visualController');
const selectAppDomain = () => (state) => state.get('app');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VisualController
 */

export const makeSelectModel0 = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('model0').toJS()
);

export const makeSelectSwitcher = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('switcher').toJS()
);
