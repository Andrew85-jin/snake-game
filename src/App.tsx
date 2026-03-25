import './App.css';
import { Routes, Route } from 'react-router-dom';
import GameHomePage from './pages/GameHomePage.tsx';
import GamePage from './pages/GamePage.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<GameHomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
