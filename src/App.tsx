import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import GameHomePage from './pages/GameHomePage.tsx';
import GamePage from './pages/GamePage.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={GameHomePage} />
        <Route path="/game" Component={GamePage} />
      </Routes>
    </div>
  );
}

export default App;
