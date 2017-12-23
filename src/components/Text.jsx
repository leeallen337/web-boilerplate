import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const propTypes = {
  text: ImmutablePropTypes.map
};

function Text(props) {
  const {
    actions,
    text
  } = props;

  return (
    <div>
      <input type="text" onChange={(evt) => actions.text.updateText(evt.target.value)} />
      <p>
        { text.get('text') }
      </p>
    </div>
  );
}

Text.propTypes = propTypes;

module.exports = Text;
