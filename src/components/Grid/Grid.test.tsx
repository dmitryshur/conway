import React from 'react';
import { render, screen } from '@testing-library/react';
import { TICKS } from 'components/Grid/utils/mock';
import { CellState } from 'components/Cell/types';
import { Grid } from './Grid';

test('renders grid with alive and dead cells and checks for alive cells', () => {
  const state = TICKS[0];
  render(<Grid state={state} />);

  const size = state.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (state[i][j].state === CellState.DEAD) continue;

      expect(screen.getByTestId(state[i][j].id)).toBeInTheDocument();
    }
  }
});

test('renders grid with alive and dead cells and checks for dead cells', () => {
  const state = TICKS[1];
  render(<Grid state={state} />);

  const size = state.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (state[i][j].state === CellState.ALIVE) continue;

      expect(screen.queryByTestId(state[i][j].id)).toBeNull();
    }
  }
});
