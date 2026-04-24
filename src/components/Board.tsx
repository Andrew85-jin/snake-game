import { useSnake } from '../hooks/useSnake.ts';
// import { Link } from 'react-router-dom';
import LinkGameButton from './LinkGameButton.tsx';

type BoardProps = {
  size: number;
};

function Board({ size }: BoardProps) {
  const width = Math.floor(Math.sqrt(size));
  const { snake, food, setSnake, setFood, setDirection } = useSnake(width);
  const cells = [];

  for (let i = 0; i < size; i++) {
    const x = i % width;
    const y = Math.floor(i / width);

    const isSnake = snake.some((seg) => seg.x === x && seg.y === y);
    const isFood = food.x === x && food.y === y;

    cells.push(<div key={i} className={(isSnake ? 'snake' : '') || (isFood ? 'food' : '')}></div>);
  }

  return (
    <>
      <div className="playing-field">{cells}</div>;
      <div className={'btn-container'}>
        <button
          className={'button'}
          onClick={() => {
            setSnake([{ x: width / 2, y: width / 2 }]);
            setFood({
              x: Math.floor(Math.random() * width),
              y: Math.floor(Math.random() * width),
            });
            setDirection('right');
          }}
        >
          Reset
        </button>

        <LinkGameButton to={'/'}>На головну</LinkGameButton>
      </div>
    </>
  );
}

export default Board;
