import { FC, useState, useEffect } from 'react';
import { getGridState } from 'components/Grid/utils/state';
import { Cell } from 'components/Cell/Cell';
import { TGridState } from './types';
import './Grid.css';

interface IProps {
  size?: number;
  state?: TGridState;
}

export const Grid: FC<IProps> = ({ size = 5, state }) => {
  const [gridState, setGridState] = useState<TGridState>(state || getGridState(size));

  useEffect(() => {
    setInterval(() => {
      setGridState(prevState => getGridState(size, prevState));
    }, 500);
  }, [size]);

  return (
    <div className="Grid">
      {gridState.map(row => (
        <div key={row[0].id} className="Grid__row">
          {row.map(cell => (
            <Cell key={cell.id} id={cell.id} state={cell.state} />
          ))}
        </div>
      ))}
    </div>
  );
};
