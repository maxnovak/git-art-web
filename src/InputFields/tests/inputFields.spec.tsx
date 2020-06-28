import React from 'react';
import renderer from 'react-test-renderer';
import { TextField } from '../index';

describe('<TextField />', () => {
  it('TextField matches snapshot', () => {
    const actual = renderer.create(<TextField />).toJSON();
    expect(actual).toMatchSnapshot();
  })
});