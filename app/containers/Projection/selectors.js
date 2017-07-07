import { createSelector } from 'reselect';

/**
 * Direct selector to the projection state domain
 */
const selectProjectionDomain = () => (state) => state.get('projection');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Projection
 */

const makeSelectProjection = () => createSelector(
  selectProjectionDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProjection;
export {
  selectProjectionDomain,
};
