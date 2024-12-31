import { Pixel } from '../../pixel';
import { point2D, type Point2D } from './point.2d';

export class Mesh2D {
  protected vertices: Point2D[] = [];
  protected pivot: Point2D = point2D(0, 0);

  constructor(args?: { vertices: Point2D[]; pivot: Point2D }) {
    if (args?.vertices) this.vertices.push(...args.vertices);
    if (args?.pivot) this.pivot = args.pivot;
  }

  setPivot(pivot: Point2D): void {
    this.pivot = pivot;
  }

  setVertices(vertices: Point2D[]): void {
    this.vertices = vertices;
  }

  traceVertices(pixelValue: [number, number, number, number]): Pixel[] {
    const response: Pixel[] = [];

    let lastVertice: Point2D | null = null;
    for (const vertice of this.vertices) {
      if (!lastVertice) {
        lastVertice = vertice;
        continue;
      }

      const dx = Math.abs(vertice.x - lastVertice.x);
      const dy = Math.abs(vertice.y - lastVertice.y);
      let d = 2 * (dy - dx);
      let incrE = 2 * dy;
      let incrNE = 2 * (dy - dx);
      let x = lastVertice.x;
      let y = lastVertice.y;

      // Fist pixel.
      response.push(new Pixel({ x, y }, ...pixelValue));

      while (x < vertice.x) {
        if (d <= 0) {
          d += incrE;
          x++;
        } else {
          d += incrNE;
          x++;
          y++;
        }
        response.push(new Pixel({ x, y }, ...pixelValue));
      }

      lastVertice = vertice;
    }

    return response;
  }
}
