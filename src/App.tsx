import React from 'react';
import { Routes } from './routes/Routes'
import { DesktopNavigation} from './components/navigation/desktopnavigation/DesktopNavigation'
import './shared/css/Global.css'

function App() {
  return (
    <Routes>
      <DesktopNavigation />
    </Routes>
  );
}

export default App;
