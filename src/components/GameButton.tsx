import { Link } from 'react-router-dom';

type GameButtonProps = {
  to: string;
  children: React.ReactNode;
};

function GameButton({ to, children }: GameButtonProps) {
  return (
    <Link to={to} className={'button'}>
      {children}
    </Link>
  );
}

export default GameButton;
