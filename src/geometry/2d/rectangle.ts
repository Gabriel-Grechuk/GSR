import { Mesh2D } from './mesh.2d';
import type { Point2D } from './point.2d';

export class Rectange extends Mesh2D {
  constructor({
    vertices,
    pivot,
  }: {
    vertices: [Point2D, Point2D];
    pivot: Point2D;
  }) {
    super();
    this.pivot = pivot;
    this.vertices = [
      vertices[0],
      {
        x: vertices[1].x,
        y: vertices[0].y,
      },
      vertices[1],
      {
        x: vertices[0].x,
        y: vertices[1].y,
      },
      vertices[0],
    ];
  }

  setVertices(vertices: [Point2D, Point2D]): void {
    this.vertices = [
      vertices[0],
      {
        x: vertices[1].x,
        y: vertices[0].y,
      },
      vertices[1],
      {
        x: vertices[0].x,
        y: vertices[1].y,
      },
      vertices[0],
    ];
  }
}
