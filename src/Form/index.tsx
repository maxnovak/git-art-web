import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Label } from '../Label';
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

  const postData = async () => {
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
    try {
      const response = await fetch('https://git-art-api.herokuapp.com/make-art', requestOptions)
      const data = await response.blob();
      const file = await window.URL.createObjectURL(data);
      window.location.assign(file);
    } catch (error) {
      console.log(error);
    }
  }

  return <React.Fragment>
    <InputContainer>
      <Label htmlFor="repoName">Name of Repository</Label>
      <TextField
        id="repoName"
        onChange={ event => setRepoName(event.target.value) }
        placeholder="Name of Repository"
        type="text"
      />
      <Label htmlFor="year">Year</Label>
      <TextField
        id="year"
        onChange={ event => setYear(event.target.value) }
        placeholder="Year"
        type="number"
      />
      <Label htmlFor="name">Name</Label>
      <TextField
        id="name"
        onChange={ event => setName(event.target.value) }
        placeholder="Name"
        type="text"
      />
      <Label htmlFor="email">Email</Label>
      <TextField
        id="email"
        onChange={ event => setEmail(event.target.value) }
        placeholder="Email"
        type="email"
      />
      <Label htmlFor="word">Word to Draw</Label>
      <TextField
        id="word"
        onChange={ event => setWord(event.target.value) }
        placeholder="Word to Draw"
        type="text"
      />
    </InputContainer>
    <Button onClick={postData}>Create Art</Button>
  </React.Fragment>
}