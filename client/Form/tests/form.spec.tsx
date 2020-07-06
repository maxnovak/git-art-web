import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from '../index';

describe('<From />', () => {
  it('Form matches snapshot', () => {
    const actual = renderer.create(<Form />).toJSON();
    expect(actual).toMatchSnapshot();
  })
});