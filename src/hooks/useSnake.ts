import { useEffect, useState } from 'react';
import { useKeyboard } from './useKeyboard.ts';
import type { SnakeSegment } from '../types/TypeSnakeSegment.ts';
import type { Direction } from '../types/TypeDirection.ts';
import type { FoodSegment } from '../types/TypeFoodSegment.ts';

export function useSnake(width: number) {
  const headX = Math.floor(width / 2);
  const headY = Math.floor(width / 2);
  const keyBoardDir = useKeyboard();

  const [snake, setSnake] = useState<SnakeSegment[]>([{ x: headX, y: headY }]);
  const [direction, setDirection] = useState<Direction>('right');
  const [food, setFood] = useState<FoodSegment>(() => ({
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * width),
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      let moveDir = direction;
      if (
        (direction === 'up' && keyBoardDir !== 'down') ||
        (direction === 'down' && keyBoardDir !== 'up') ||
        (direction === 'left' && keyBoardDir !== 'right') ||
        (direction === 'right' && keyBoardDir !== 'left')
      ) {
        moveDir = keyBoardDir;
        setDirection(keyBoardDir);
      }

      setSnake((prevSnake: SnakeSegment[]) => {
        const head = prevSnake[0];
        const newHead = { ...head };

        if (moveDir === 'up') newHead.y -= 1;
        if (moveDir === 'down') newHead.y += 1;
        if (moveDir === 'left') newHead.x -= 1;
        if (moveDir === 'right') newHead.x += 1;

        if (
          newHead.x < 0 ||
          newHead.x >= width ||
          newHead.y < 0 ||
          newHead.y >= width ||
          prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)
        ) {
          clearInterval(interval);
          alert('Snake snap');
          return prevSnake;
        }

        const eatFood = newHead.x === food.x && newHead.y === food.y;

        const newSnake = [newHead, ...prevSnake];

        if (!eatFood) {
          newSnake.pop();
        } else {
          setFood({
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * width),
          });
        }

        return newSnake;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [width, keyBoardDir, direction, food]);

  return { snake, setSnake, direction, setDirection, food, setFood };
}
