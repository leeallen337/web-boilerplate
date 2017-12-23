import actionTypes from '../constants/actionTypes';
import Immutable from 'immutable';

const INITIAL_STATE = Immutable.fromJS({
  text: ''
});

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.TEXT_UPDATE:
      return state.set('text', action.payload.text);
    default:
      return state;
  }
}

export default reducer;
