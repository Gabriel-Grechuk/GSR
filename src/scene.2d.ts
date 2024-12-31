import type { Mesh2D } from './geometry/2d/mesh.2d';
import { Pixel } from './pixel';
import { parseHexColor } from './tools';

export class Scene2D {
  private frameBuffer: Pixel[] = [];
  private meshes: Mesh2D[] = [];

  renderGometries(): void {
    this.frameBuffer.push(
      ...this.meshes.flatMap((mesh) =>
        mesh.traceVertices(parseHexColor('#FF0000FF'))
      )
    );
  }

  getFrame(): Pixel[] {
    return this.frameBuffer;
  }

  addMesh(mesh: Mesh2D): void {
    this.meshes.push(mesh);
  }
}
