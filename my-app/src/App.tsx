import React from 'react';
import { Routes } from './routes/Routes'
import './shared/css/Global.css'
import { UserProvider } from './shared/provider/UserProvider';
import { Navigation } from './components/navigation/Navigation';
import { PizzaNameProvider } from './shared/provider/PizzaNameProvider'

function App() {
  return (
    <PizzaNameProvider>
    <UserProvider>
      <Routes>
        <Navigation />
      </Routes>
    </UserProvider>
    </PizzaNameProvider>
  );
}

export default App;
