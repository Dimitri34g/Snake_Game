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
  private lastUpdateTime: number;

  constructor(width: number, height: number, speed: number) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.snake = new Snake(3, new Point(Math.floor(width / 2), Math.floor(height / 2)));
    this.apple = new Apple(this.getRandomPosition().x, this.getRandomPosition().y);
    this.score = 0;
    this.isGameOver = false;
    this.lastUpdateTime = 0;
  }

  public start(): void {
    this.snake = new Snake(3, new Point(Math.floor(this.width / 2), Math.floor(this.height / 2)));
    this.apple = new Apple(this.getRandomPosition().x, this.getRandomPosition().y);
    this.score = 0;
    this.isGameOver = false;
    this.lastUpdateTime = 0;
  }

  public update(currentTime: number): void {
    if (this.isGameOver) return;

    const deltaTime = currentTime - this.lastUpdateTime;
    if (deltaTime < this.speed) return;

    this.snake.move();

    if (this.checkBorderCollision() || this.snake.detectCollision()) {
      this.isGameOver = true;
      return;
    }

    if (this.snake.hasSamePosition(this.apple)) {
      this.snake.grow();
      this.score++;
      this.apple.generateNewPosition(this.width, this.height);
    }

    this.lastUpdateTime = currentTime;
  }

  public render(display: Display): void {
    display.drawRectangle(this.apple.x, this.apple.y, this.apple.getColor());
    const snakeBody = this.snake.getBody();
    for (let segment of snakeBody) {
      display.drawRectangle(segment.x, segment.y, this.snake.getColor());
    }
    display.drawRectangle(this.snake.x, this.snake.y, this.snake.getColor()); // Dessiner la tête
  }

  public play(display: Display): boolean {
    const loop = () => {
      if (this.isGameOver) {
        alert("Game Over! Your score: " + this.score);
        return true;
      }
      const currentTime = performance.now();
      this.update(currentTime);
      this.render(display);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return false;
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
