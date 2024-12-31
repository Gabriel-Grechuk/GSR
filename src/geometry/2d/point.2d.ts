export type Point2D = {
  x: number;
  y: number;
};

export function point2D(x: number, y: number): Point2D {
  return {
    x,
    y,
  };
}
