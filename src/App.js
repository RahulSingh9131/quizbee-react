import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
