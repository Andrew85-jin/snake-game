import { useState, useEffect } from 'react';
import type { Direction } from '../types/TypeDirection.ts';

export function useKeyboard(initDirection: Direction = 'right') {
  const [direction, setDirection] = useState<Direction>(initDirection);

  useEffect(() => {
    function heandleKey(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'down') setDirection('up');
          break;
        case 'ArrowDown':
          if (direction !== 'up') setDirection('down');
          break;
        case 'ArrowLeft':
          if (direction !== 'right') setDirection('left');
          break;
        case 'ArrowRight':
          if (direction !== 'left') setDirection('right');
          break;
      }
    }
    document.addEventListener('keydown', heandleKey);

    return () => {
      document.removeEventListener('keydown', heandleKey);
    };
  }, [direction]);
  return direction;
}
