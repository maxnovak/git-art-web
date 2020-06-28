import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { TextField } from '../InputFields';

const InputContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  max-width: 300px;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Form = () => {
  return <React.Fragment>
    <InputContainer>
      <TextField type="text" placeholder="Name of Repository" />
      <TextField type="number" placeholder="Year" />
      <TextField type="text" placeholder="Name" />
      <TextField type="email" placeholder="Email" />
      <TextField type="text" placeholder="Word to Draw" />
    </InputContainer>
    <Button>Create Art</Button>
  </React.Fragment>
}