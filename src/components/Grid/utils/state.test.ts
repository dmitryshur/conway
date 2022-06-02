import { generateId, getLiveNeighborCount, getGridState } from './state';
import { TICKS } from './mock';

test('generates unique ids', () => {
  const count = 1_000_000;
  const uniqueIds = new Set();

  for (let i = 0; i < count; i++) {
    uniqueIds.add(generateId());
  }

  expect(uniqueIds.size).toBe(count);
});

test('counts live neighbors', () => {
  const gridState = TICKS[0];
  const testTable = [
    { input: { state: gridState, row: 0, column: 0 }, output: 0 },
    { input: { state: gridState, row: 1, column: 0 }, output: 1 },
    { input: { state: gridState, row: 1, column: 1 }, output: 2 },
    { input: { state: gridState, row: 1, column: 2 }, output: 3 },
    { input: { state: gridState, row: 3, column: 2 }, output: 3 },
    { input: { state: gridState, row: 4, column: 4 }, output: 0 },
  ];

  for (let testCase of testTable) {
    const expected = testCase.output;
    const got = getLiveNeighborCount(
      testCase.input.state,
      testCase.input.row,
      testCase.input.column,
    );

    expect(got).toBe(expected);
  }
});

test('counts grid state', () => {
  const firstTickState = TICKS[0];
  const secondTickState = TICKS[1];
  const size = firstTickState.length;

  const got = getGridState(size, firstTickState);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      expect(got[i][j].state).toBe(secondTickState[i][j].state);
    }
  }
});
