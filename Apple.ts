import { Point } from './Point.js';

export class Apple extends Point {
  private color: string;

  constructor(x: number, y: number, color: string = 'red') {
    super(x, y);
    this.color = color;
  }

  public generateNewPosition(maxWidth: number, maxHeight: number): void {
    this.x = Math.floor(Math.random() * maxWidth);
    this.y = Math.floor(Math.random() * maxHeight);
  }

  public getColor(): string {
    return this.color;
  }
} 
