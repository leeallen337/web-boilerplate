import actionTypes from '../constants/actionTypes';

function updateText(text) {
  return {
    type: actionTypes.TEXT_UPDATE,
    payload: { text }
  };
}

export {
  updateText
};
