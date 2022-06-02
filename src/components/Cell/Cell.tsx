import { FC } from 'react';
import cn from 'classnames';
import './Cell.css';
import { CellState } from './types';

interface IProps {
  state: CellState;
}

export const Cell: FC<IProps> = ({ state }) => {
  return <div className={cn('Cell', { 'Cell--alive': state === CellState.ALIVE })} />;
};
