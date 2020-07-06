import React, { useState } from 'react';
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
  const [repoName, setRepoName] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [word, setWord] = useState('');

  return <React.Fragment>
    <InputContainer>
      <TextField type="text" placeholder="Name of Repository"
        onChange={ event => setRepoName(event.target.value) }
        />
      <TextField type="number" placeholder="Year"
        onChange={ event => setYear(event.target.value) }
        />
      <TextField type="text" placeholder="Name"
        onChange={ event => setName(event.target.value) }
        />
      <TextField type="email" placeholder="Email"
        onChange={ event => setEmail(event.target.value) }
        />
      <TextField type="text" placeholder="Word to Draw"
        onChange={ event => setWord(event.target.value) }
        />
    </InputContainer>
    <Button onClick={() => (console.log(repoName, year, name, email, word))}>Create Art</Button>
  </React.Fragment>
}