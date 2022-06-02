import { FC } from 'react';
import cn from 'classnames';
import './Cell.css';
import { CellState } from './types';

interface IProps {
  id: string;
  state: CellState;
}

export const Cell: FC<IProps> = ({ id, state }) => {
  return (
    <div
      className={cn('Cell', { 'Cell--alive': state === CellState.ALIVE })}
      data-testid={state === CellState.ALIVE ? id : undefined}
    />
  );
};
