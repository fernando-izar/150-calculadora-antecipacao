import React from 'react';
import { MainProvider } from './contexts/MainContext';
import { Home } from './pages/Home';


function App() {
  return (
    <MainProvider>
      <Home />
    </MainProvider>
  );
}

export default App;
