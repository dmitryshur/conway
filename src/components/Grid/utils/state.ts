import { TGridState } from 'components/Grid/types';
import { CellState } from 'components/Cell/types';

export const getGridState = (size: number, currentState?: TGridState): TGridState => {
  if (!currentState) return getRandomState(size);

  const newState: TGridState = new Array(size).fill(0).map(() => new Array(size).fill(0));
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = currentState[row][col];
      const liveNeighborsCount = getLiveNeighborCount(currentState, row, col);

      let newCellState;
      switch (true) {
        case cell.state === CellState.ALIVE && liveNeighborsCount < 2:
        case cell.state === CellState.ALIVE && liveNeighborsCount > 3:
          newCellState = CellState.DEAD;
          break;

        case cell.state === CellState.ALIVE && liveNeighborsCount === 2:
        case cell.state === CellState.ALIVE && liveNeighborsCount === 3:
        case cell.state === CellState.DEAD && liveNeighborsCount === 3:
          newCellState = CellState.ALIVE;
          break;

        default:
          newCellState = cell.state;
      }

      newState[row][col] = { ...cell, state: newCellState };
    }
  }

  return newState;
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const getLiveNeighborCount = (state: TGridState, row: number, column: number): number => {
  const size = state[0].length;
  const deltas = [size - 1, 0, 1];

  let count = 0;
  for (let deltaRow of deltas) {
    for (let deltaColumn of deltas) {
      if (deltaRow === deltaColumn) continue;

      const neighborRow = (row + deltaRow) % size;
      const neighborColumn = (column + deltaColumn) % size;

      count += state[neighborRow][neighborColumn].state;
    }
  }

  return count;
};

const getRandomState = (size: number): TGridState => {
  const density = 0.4;
  const state: TGridState = new Array(size).fill(0).map(() => new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      state[i][j] = {
        id: generateId(),
        state: 1 - density < Math.random() ? CellState.ALIVE : CellState.DEAD,
      };
    }
  }

  return state;
};
