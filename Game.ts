import { Snake } from "./Snake.js";
import { Apple } from "./Apple.js";
import { Display } from "./Display.js";
import { Point } from "./Point.js";

export class Game {
  private width: number;
  private height: number;
  private speed: number;
  private snake: Snake;
  private apple: Apple;
  private score: number;
  private isGameOver: boolean;

  constructor(width: number, height: number, speed: number) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.snake = new Snake(3, new Point(Math.floor(width / 2), Math.floor(height / 2)));
    this.apple = new Apple(this.getRandomPosition().x, this.getRandomPosition().y);
    this.score = 0;
    this.isGameOver = false;
  }

  public play(display: Display): boolean {
    if (this.isGameOver) {
      return true;
    }

    this.snake.move();

    if (this.checkBorderCollision() || this.snake.detectCollision()) {
      this.isGameOver = true;
      return true;
    }

    if (this.snake.hasSamePosition(this.apple)) {
      this.snake.grow();
      this.score++;
      this.apple.generateNewPosition(this.width, this.height);
    }

    this.render(display);
    return false;
  }

  public render(display: Display): void {
    
    display.drawCircle(this.apple.x, this.apple.y, this.apple.getColor());
  
    const snakeBody = this.snake.getBody();
    for (let segment of snakeBody) {
      display.drawRectangle(segment.x, segment.y, this.snake.getColor());
    }
  
    display.drawRectangle(this.snake.x, this.snake.y, this.snake.getColor());
  }
  

  public getScore(): number {
    return this.score;
  }

  public changeSnakeDirection(newDirection: string): void {
    this.snake.changeDirection(newDirection);
  }

  private checkBorderCollision(): boolean {
    return this.snake.x < 0 || this.snake.x >= this.width || this.snake.y < 0 || this.snake.y >= this.height;
  }

  private getRandomPosition(): Point {
    return new Point(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height));
  }
}
