import React from 'react';
import Selectword from '../selectword';
import Area from '../area';
import  {Container}  from './styles';

export default function Board() {
  return (
    <Container>

      <Selectword />
      <Area/>

    </Container>
  );
}
