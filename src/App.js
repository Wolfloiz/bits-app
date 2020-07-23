import React from 'react';
import GlobalStyle from './styles/global'
import Header from '../src/components/header'
import Board from '../src/components/board'

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