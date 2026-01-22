import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { FormControl, FormLabel, Option, Select, Stack } from '@mui/joy';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Form = () => {
  const [repoName, setRepoName] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [design, setDesign] = useState<any>();

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
    <Stack spacing={2}>
      <FormControl>
        <FormLabel>Repo Name</FormLabel>
        <Input
          id="repoName"
          placeholder="Name of Repository"
          onChange={ event => setRepoName(event.target.value) }
          type="text"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Year</FormLabel>
        <Input
          id="year"
          placeholder="Year"
          onChange={ event => setYear(event.target.value) }
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          id="name"
          placeholder="Name"
          onChange={ event => setName(event.target.value) }
          type="text"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          placeholder="Email"
          onChange={ event => setEmail(event.target.value) }
          type="email"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Design</FormLabel>
        <Select onChange={(_event, newValue) => setDesign(newValue)} required>
          <Option value="checkered">Checkered</Option>
          <Option value="give">Give</Option>
          <Option value="table-flip">Table Flip</Option>
          <Option value="word">Word</Option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Word</FormLabel>
        <Input
          id="word"
          placeholder="Word"
          onChange={ event => setWord(event.target.value) }
          type="text"
        />
      </FormControl>
    </Stack>
    <Button onClick={postData} loading={loading}>Create Art</Button>
  </React.Fragment>
}