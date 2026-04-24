import LinkGameButton from '../components/LinkGameButton.tsx';
import snake from '../assets/snake.png';

function GameHomePage() {
  return (
    <>
      <div className="buttons-container">
        <img src={snake} alt={'snake img'} className={'snakeImage'} />
        <LinkGameButton to={'/game'}>Грати</LinkGameButton>
        <LinkGameButton to={'/setting'}>Налаштування</LinkGameButton>
        <LinkGameButton to={'/setting'}>Я потім придумаю</LinkGameButton>
      </div>
    </>
  );
}

export default GameHomePage;
