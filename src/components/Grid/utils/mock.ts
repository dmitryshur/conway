import { CellState } from 'components/Cell/types';
import { TGridState } from 'components/Grid/types';

export const TICKS: { [tickCount: number]: TGridState } = {
  0: [
    [
      { id: '0', state: CellState.DEAD },
      { id: '1', state: CellState.DEAD },
      { id: '2', state: CellState.DEAD },
      { id: '3', state: CellState.DEAD },
      { id: '4', state: CellState.DEAD },
    ],
    [
      { id: '5', state: CellState.DEAD },
      { id: '6', state: CellState.DEAD },
      { id: '7', state: CellState.DEAD },
      { id: '8', state: CellState.DEAD },
      { id: '9', state: CellState.DEAD },
    ],
    [
      { id: '10', state: CellState.DEAD },
      { id: '11', state: CellState.ALIVE },
      { id: '12', state: CellState.ALIVE },
      { id: '13', state: CellState.ALIVE },
      { id: '14', state: CellState.DEAD },
    ],
    [
      { id: '15', state: CellState.DEAD },
      { id: '16', state: CellState.DEAD },
      { id: '17', state: CellState.DEAD },
      { id: '18', state: CellState.DEAD },
      { id: '19', state: CellState.DEAD },
    ],
    [
      { id: '20', state: CellState.DEAD },
      { id: '21', state: CellState.DEAD },
      { id: '22', state: CellState.DEAD },
      { id: '23', state: CellState.DEAD },
      { id: '24', state: CellState.DEAD },
    ],
  ],
  1: [
    [
      { id: '0', state: CellState.DEAD },
      { id: '1', state: CellState.DEAD },
      { id: '2', state: CellState.DEAD },
      { id: '3', state: CellState.DEAD },
      { id: '4', state: CellState.DEAD },
    ],
    [
      { id: '5', state: CellState.DEAD },
      { id: '6', state: CellState.DEAD },
      { id: '7', state: CellState.ALIVE },
      { id: '8', state: CellState.DEAD },
      { id: '9', state: CellState.DEAD },
    ],
    [
      { id: '10', state: CellState.DEAD },
      { id: '11', state: CellState.DEAD },
      { id: '12', state: CellState.ALIVE },
      { id: '13', state: CellState.DEAD },
      { id: '14', state: CellState.DEAD },
    ],
    [
      { id: '15', state: CellState.DEAD },
      { id: '16', state: CellState.DEAD },
      { id: '17', state: CellState.ALIVE },
      { id: '18', state: CellState.DEAD },
      { id: '19', state: CellState.DEAD },
    ],
    [
      { id: '20', state: CellState.DEAD },
      { id: '21', state: CellState.DEAD },
      { id: '22', state: CellState.DEAD },
      { id: '23', state: CellState.DEAD },
      { id: '24', state: CellState.DEAD },
    ],
  ],
};
