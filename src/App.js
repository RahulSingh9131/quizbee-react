import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import QuestionPage from './pages/QuestionPage';
import RulesPage from './pages/RulesPage';
import ScorePage from './pages/ScorePage';
import SettingsPage from './pages/SettingsPage';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/questions" element={<QuestionPage/>}/>
        <Route path="/scorepage" element={<ScorePage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
        <Route path="/loginPage" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>

    </div>
  );
}

export default App;
