export enum CellState {
  DEAD,
  ALIVE,
}

export interface ICell {
  id: string;
  state: CellState;
}
