import type { Pixel } from './pixel';
import type { Scene2D } from './scene.2d';

export class GSR {
  private canvas!: CanvasRenderingContext2D;

  constructor(ref_canvas: HTMLCanvasElement) {
    const context = ref_canvas.getContext('2d');
    if (!context) {
      console.error(
        '(gsr.ts) GSR constructor(): Could not get canvas 2d context.'
      );
      return;
    }

    this.canvas = context;
  }

  private renderPixel(pixel: Pixel): void {
    this.canvas.fillStyle = pixel.getHex();
    this.canvas.fillRect(pixel.position().x, pixel.position().y, 1, 1);
  }

  renderScene2D(scene: Scene2D): void {
    scene.renderGometries();
    const frame = scene.getFrame();

    for (const pixel of frame) this.renderPixel(pixel);
  }
}
