import React from 'react';
import { Greeting } from './components/greeting/Greeting'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Greeting />
      <Home />
    </>
  );
}

export default App;
