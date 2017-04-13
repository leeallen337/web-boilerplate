import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('App component', function () {
  it('contains an h1 element with hello world text', function () {
    expect(shallow(<App />).contains(<h1>Hello, World!</h1>)).to.equal(true);
  });
})
