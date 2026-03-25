import GameButton from '../components/GameButton.tsx';

function GameHomePage() {
  return (
    <>
      <div className="buttons-container">
        <GameButton to={'/game'}>Грати</GameButton>
        <GameButton to={'/setting'}>Налаштування</GameButton>
        <GameButton to={'/game'}>Грати</GameButton>
      </div>
    </>
  );
}

export default GameHomePage;
