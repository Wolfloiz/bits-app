import React from 'react';
import { Container } from './styles'
/**import Bitpower from '../bits/energia';
import BitButton from '../bits/button';
import BitBLed from '../bits/bled';
import Wenergiza from '../bits/palavras/energiza';
import Wacende from '../bits/palavras/acende';
import Wpressiona from '../bits/palavras/pressiona';*/
import Wpower from '../bits/power';

export default function List() {
  return(
 <Container>
   <header>

     <h2> Palavras </h2>
    <ul>
      
      <Wpower />
      
   </ul>
   </header>

 </Container>
  );
}