import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import RulesPage from './pages/RulesPage';
import ScorePage from './pages/ScorePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/questions" element={<QuestionPage/>}/>
        <Route path="/scorepage" element={<ScorePage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
