import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  width:100px;
  height:100px;
  background-color:purple;
`;

const calander = Array.from(Array(52), _ => Array(7).fill(0));
console.log(calander);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Canvas = () => {
  return <Container>
    
  </Container>
}