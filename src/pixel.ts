import { point2D, type Point2D } from './geometry/2d/point.2d';
import { parseHexColor, validateHexColor } from './tools';

export class Pixel {
  private _r: number = 0.0;
  private _g: number = 0.0;
  private _b: number = 0.0;
  private _a: number = 1;

  private _position: Point2D = point2D(0, 0);

  constructor(position: Point2D, ...values: [number, number, number, number]) {
    if (values) {
      for (const position in values)
        if (values[position] < 0 || values[position] > 255) {
          console.error(
            `Error (pixel.ts) Pixel constructor(): Value ${
              values[position]
            } in position ${position} is out of color range 0..255`
          );
          return;
        }

      this._r = values[0];
      this._g = values[1];
      this._b = values[2];
      this._a = values[3];
      this._position = position;
    }
  }

  fromHex(hex: string): void {
    if (!validateHexColor(hex)) {
      console.error(
        `Error (pixel.ts) Pixel.fromHex(): "${hex}" is not a valid color code.`
      );
      return;
    }

    const colors = parseHexColor(hex);
    this._r = colors[0];
    this._g = colors[1];
    this._b = colors[2];
    this._a = colors[3];
  }

  setValue(...values: [number, number, number, number]): void {
    if (values) {
      for (const position in values)
        if (values[position] < 0 || values[position] > 255) {
          console.error(
            `Error (pixel.ts) Pixel.setValue(): Value ${
              values[position]
            } in position ${position} is out of color range 0..255`
          );
          return;
        }

      this._r = values[0];
      this._g = values[1];
      this._b = values[2];
      this._a = values[3];
    }
  }

  getHex(): string {
    return `#${this._r.toString(16).toUpperCase()}${this._g
      .toString(16)
      .toUpperCase()}${this._b.toString(16).toUpperCase()}${this._a
      .toString(16)
      .toUpperCase()}`;
  }

  getValue(): [number, number, number, number] {
    return [this._r, this._g, this._b, this._a];
  }

  r(): number {
    return this._r;
  }

  g(): number {
    return this._g;
  }

  b(): number {
    return this._b;
  }

  a(): number {
    return this._a;
  }

  setR(val: number): void {
    if (val < 0 || val > 255) {
      console.error(
        `Error (pixel.ts) Pixel.setR(): Value "${
          val
        }" is out of color range 0..255`
      );
      return;
    }

    this._r = val;
  }

  setG(val: number): void {
    if (val < 0 || val > 255) {
      console.error(
        `Error (pixel.ts) Pixel.setG(): Value "${
          val
        }" is out of color range 0..255`
      );
      return;
    }

    this._g = val;
  }

  setB(val: number): void {
    if (val < 0 || val > 255) {
      console.error(
        `Error (pixel.ts) Pixel.setB(): Value "${
          val
        }" is out of color range 0..255`
      );
      return;
    }

    this._b = val;
  }

  setA(val: number): void {
    if (val < 0 || val > 255) {
      console.error(
        `Error (pixel.ts) Pixel.setB(): Value "${
          val
        }" is out of color range 0..255`
      );
      return;
    }

    this._a = val;
  }

  setPosition(position: Point2D): void {
    this._position = position;
  }

  position(): Point2D {
    return this._position;
  }
}
