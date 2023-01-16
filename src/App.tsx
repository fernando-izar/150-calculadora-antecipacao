import React from 'react';
import { MainProvider } from './contexts/MainContext';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';


function App() {
  return (
    <MainProvider>
      <GlobalStyle />
      <Home />
    </MainProvider>
  );
}

export default App;
