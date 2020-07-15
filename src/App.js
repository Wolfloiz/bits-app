import React, {useRef,useEffect} from 'react';
import {Draggable} from 'gsap'
import GlobalStyle from './styles/styles';
import Header from './components/header';
import Board from './components/board';
function App() {
  return (
    <>
    <Header />
    <Board />  
    <GlobalStyle />
    </>
    
  );
}

export default App;
