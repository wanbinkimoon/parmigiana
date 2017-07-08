import { createSelector } from 'reselect';

/**
 * Direct selector to the visualController state domain
 */
const selectVisualControllerDomain = () => (state) => state.get('visualController');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VisualController
 */

const makeSelectVisualController = () => createSelector(
  selectVisualControllerDomain(),
  (substate) => substate.get()
);

export default makeSelectVisualController;
export {
  selectVisualControllerDomain,
};
