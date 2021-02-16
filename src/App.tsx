import React from 'react';
import { Routes } from './routes/Routes'
import './shared/css/Global.css'
import { UserProvider } from './shared/provider/UserProvider';
import { Navigation } from './components/navigation/Navigation';
import { PizzaNameProvider } from './shared/provider/PizzaNameProvider'
import { StarwarsCharProvider } from './shared/provider/StarwarsCharProvider'

function App() {
  return (
    <StarwarsCharProvider>
    <PizzaNameProvider>
    <UserProvider>
      <Routes>
        <Navigation />
      </Routes>
    </UserProvider>
    </PizzaNameProvider>
    </StarwarsCharProvider>
  );
}

export default App;
