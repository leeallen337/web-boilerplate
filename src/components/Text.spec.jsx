import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Text from './Text';
import sinon from 'sinon';
import Immutable from 'immutable';

describe('components/Text', function () {
  let props;

  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
    props = {
      actions: {
        text: {
          updateText: this.sandbox.stub()
        }
      },
      text: new Immutable.Map({ text: 'abc' })
    };
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe('<Text />', function() {
    let text;

    beforeEach(function() {
      text = shallow(<Text {...props} />);
    });

    describe('onChange', function() {
      it('changes value on text change', function() {
        text.find('input').simulate('change', { target: { value: 'abc' } });
        expect(props.actions.text.updateText.calledOnce).to.be.true;
      })
    });
  });
});
