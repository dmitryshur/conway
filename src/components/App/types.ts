export interface IConfig {
  size: number;
  density: number;
  tickDuration: Duration;
}

export enum Duration {
  Millisecond = 1,
}
