## How to run:

In the project directory:

1. `npm install`
2. `npm test` (optional)
3. `npm start`

## Available configuration:

The `App.tsx` file contains a `CONFIG` variable with the following format:

```typescript
{
  size: number;
  density: number;
  tickDuration: number;
}
```

`size` - The size of the grid. 50 meaning 50 x 50.

`density` - The amount of alive cells. the higher the number, the more cells will be initially alive

`tickDuration` - How long each tick takes. in milliseconds
