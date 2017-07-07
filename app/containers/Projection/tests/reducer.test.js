
import { fromJS } from 'immutable';
import projectionReducer from '../reducer';

describe('projectionReducer', () => {
  it('returns the initial state', () => {
    expect(projectionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
