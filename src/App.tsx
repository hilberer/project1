import React from 'react';
import { Routes } from './routes/Routes'
import { DesktopNavigation} from './components/navigation/desktopnavigation/DesktopNavigation'

function App() {
  return (
    <Routes>
      <DesktopNavigation />
    </Routes>
  );
}

export default App;
