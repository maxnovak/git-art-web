import React, { useState } from 'react';
import { Button, FormControl, FormHelperText, FormLabel, Input, Option, Select, Stack } from '@mui/joy';
import { Controller, useForm, useWatch, type SubmitHandler } from "react-hook-form";
import Warning from '../assets/material-symbols/warning.svg?react';

interface IFormInput {
  repoName: string
  year: number
  name: string
  email: string
  pattern: string
  word: string
}

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: {
    errors
  }, control, setValue } = useForm<IFormInput>();
  const design = useWatch({control, name: "pattern"});
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    postData(data);
  };

  const currentYear = new Date().getFullYear();

  const postData = async (data: IFormInput) => {
    setLoading(true);
    const body = JSON.stringify(data);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_GIT_ART_API}/make-art`, requestOptions)
      const data = await response.blob();
      const file = await window.URL.createObjectURL(data);
      window.location.assign(file);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return <React.Fragment>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl error={!!errors?.repoName}>
          <FormLabel>Repo Name</FormLabel>
          <Input
            id="repoName"
            placeholder="Name of Repository"
            type="text"
            {...register("repoName", {
              required: true,
            })}
          />
          {!!errors?.repoName &&
            <FormHelperText>
              <Warning fill="#C41C1C" height={16}/> Need a name for the repository being generated.
            </FormHelperText>
          }
        </FormControl>
        <FormControl error={!!errors?.year}>
          <FormLabel>Year</FormLabel>
          <Input
            id="year"
            placeholder="Year"
            type="number"
            {...register("year", {
              required: true,
              min: 1970,
              max: currentYear,
            })}
          />
          {!!errors?.year &&
            <FormHelperText>
              <Warning fill="#C41C1C" height={16}/> Please don't use a year before the UNIX Epoch or in the future.
            </FormHelperText>
          }
        </FormControl>
        <FormControl error={!!errors.name}>
          <FormLabel>Committer Name</FormLabel>
          <Input
            id="name"
            placeholder="Committer Name"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          {!!errors?.name &&
            <FormHelperText>
              <Warning fill="#C41C1C" height={16}/> Git requires a committer who's name is tied to each commit.  Doesn't have to be your name, but makes github happier.
            </FormHelperText>
          }
        </FormControl>
        <FormControl error={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/
            })}
          />
          <FormHelperText>This should be an email that you have associated with github for this to work.</FormHelperText>
          {!!errors?.email &&
            <FormHelperText>
              <Warning fill="#C41C1C" height={16}/> Must be a valid e-mail address.
            </FormHelperText>
          }
        </FormControl>
                <FormControl error={!!errors.pattern}>
          <FormLabel>Design</FormLabel>
          <Controller
            render={({ field }) =>
              <Select
                {...field}
                onChange={(_, newValue) => {
                  setValue("pattern", newValue || "");
                }}
              >
                <Option value="checkered">Checkered</Option>
                <Option value="give">Give</Option>
                <Option value="table flip">Table Flip</Option>
                <Option value="word">Word</Option>
              </Select>
            }
            control={control}
            name="pattern"
          />
          {!!errors?.pattern &&
            <FormHelperText>
              <Warning fill="#C41C1C" height={16}/> If you don't pick a design can't really draw you something cool.
            </FormHelperText>
          }
        </FormControl>
        {design === 'word' &&
          <FormControl error={!!errors.word}>
            <FormLabel>Word</FormLabel>
            <Input
              id="word"
              placeholder="Word"
              type="text"
              {...register("word", {
                required: true,
                max: 10,
              })}
            />
            {!!errors?.word &&
              <FormHelperText>
                <Warning fill="#C41C1C" height={16}/> Any words need to be under 10 letters, because of the number of weeks in a year.
              </FormHelperText>
            }
          </FormControl>
        }
      <Button type="submit" loading={loading}>Create Art</Button>
    </Stack>
    </form>
  </React.Fragment>
}