
import { fromJS } from 'immutable';
import visualControllerReducer from '../reducer';

describe('visualControllerReducer', () => {
  it('returns the initial state', () => {
    expect(visualControllerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
