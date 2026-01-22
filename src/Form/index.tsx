import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

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
  const [loading, setLoading] = useState(false);

  const postData = async () => {
    setLoading(true);
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
      const response = await fetch(`http://${import.meta.env.VITE_GIT_ART_API}/make-art`, requestOptions)
      const data = await response.blob();
      const file = await window.URL.createObjectURL(data);
      window.location.assign(file);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return <React.Fragment>
    <InputContainer>
      <Input
        id="repoName"
        placeholder="Name of Repository"
        onChange={ event => setRepoName(event.target.value) }
      />
      <Input
        id="year"
        placeholder="Year"
        onChange={ event => setYear(event.target.value) }
      />
      <Input
        id="name"
        placeholder="Name"
        onChange={ event => setName(event.target.value) }
      />
      <Input
        id="email"
        placeholder="Email"
        onChange={ event => setEmail(event.target.value) }
      />
      <Input
        id="word"
        placeholder="Word"
        onChange={ event => setWord(event.target.value) }
      />
    </InputContainer>
    <Button onClick={postData} loading={loading}>Create Art</Button>
  </React.Fragment>
}