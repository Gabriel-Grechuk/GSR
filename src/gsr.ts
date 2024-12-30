import type { Pixel } from './pixel';

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

  writePixel({ x, y, value }: { x: number; y: number; value: Pixel }): void {
    this.canvas.fillStyle = value.getHex();
    this.canvas.fillRect(x, y, 1, 1);
  }
}
