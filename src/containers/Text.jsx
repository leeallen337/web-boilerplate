import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Text from '../components/Text';
import * as textActionCreators from '../actions/text';

const propTypes = {};

class ConnectedText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text {...this.props} />
    );
  }
}

ConnectedText.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      text: bindActionCreators(textActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedText);
