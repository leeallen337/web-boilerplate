import Immutable from 'immutable';
import { expect } from 'chai';
import actionTypes from '../constants/actionTypes';
import textReducer from './text';

const INITIAL_STATE = Immutable.fromJS({
  text: ''
});

describe('reducers/text', function() {
  let expectedText;
  let nextState;

  beforeEach(function() {
    expectedText = 'hello, world';
    nextState = textReducer(INITIAL_STATE, {
      type: actionTypes.TEXT_UPDATE,
      payload: {
        text: expectedText
      }
    });
  });

  it('stores the new text in the state', function() {
    expect(nextState.get('text')).to.equal(expectedText);
  });

  it('returns a default initial state', function() {
    const nextState = textReducer(undefined, {});
    expect(nextState).to.deep.equal(INITIAL_STATE);
  });
});
