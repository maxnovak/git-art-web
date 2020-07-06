import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../index';

describe('<Button />', () => {
  it('Button matches snapshot', () => {
    const actual = renderer.create(<Button />).toJSON();
    expect(actual).toMatchSnapshot();
  })
});