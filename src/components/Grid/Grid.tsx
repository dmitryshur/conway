import { FC, useState, useEffect } from 'react';
import { getGridState } from 'components/Grid/utils/state';
import { Cell } from 'components/Cell/Cell';
import { TGridState } from './types';
import './Grid.css';

interface IProps {
  size?: number;
}

export const Grid: FC<IProps> = ({ size = 5 }) => {
  const [gridState, setGridState] = useState<TGridState>(getGridState(size));

  return (
    <div className="Grid">
      {gridState.map((row, i) => (
        <div key={row[0].id} className="Grid__row">
          {row.map(cell => (
            <Cell key={cell.id} state={cell.state} />
          ))}
        </div>
      ))}
    </div>
  );
};
