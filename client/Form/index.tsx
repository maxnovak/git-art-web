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

  const postData = () => {
    const body = JSON.stringify({
      repoName,
      year,
      name,
      email,
      word,
      pattern: 'word',
    });
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    };

    fetch('https://git-art-api.herokuapp.com/make-art', requestOptions)
      .then(response => (
        response.blob()
      ))
      .then(
        data => {
          const file = window.URL.createObjectURL(data);
          window.location.assign(file);
        }
      )
  }

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
    <Button onClick={postData}>Create Art</Button>
  </React.Fragment>
}