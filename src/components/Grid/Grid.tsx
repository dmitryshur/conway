import { FC, useState, useEffect, useRef } from 'react';
import { getGridState } from 'components/Grid/utils/state';
import { Cell } from 'components/Cell/Cell';
import { TGridState } from './types';
import { IConfig } from 'components/App/types';
import './Grid.css';

interface IProps {
  state?: TGridState;
  config: IConfig;
}

export const Grid: FC<IProps> = ({ state, config }) => {
  const [gridState, setGridState] = useState<TGridState>(state || getGridState(config.size));
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setGridState(prevState => getGridState(config.size, prevState));
    }, config.tickDuration);

    return () => {
      timer.current = null;
    };
  }, [config.size, config.tickDuration]);

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
