import { Snake } from "./Snake.js";
import { Apple } from "./Apple.js";
import { Point } from "./Point.js";
export class Game {
    constructor(width, height, speed) {
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.snake = new Snake(3, new Point(Math.floor(width / 2), Math.floor(height / 2)));
        this.apple = new Apple(this.getRandomPosition().x, this.getRandomPosition().y);
        this.score = 0;
        this.isGameOver = false;
        this.lastUpdateTime = 0;
    }
    start() {
        this.snake = new Snake(3, new Point(Math.floor(this.width / 2), Math.floor(this.height / 2)));
        this.apple = new Apple(this.getRandomPosition().x, this.getRandomPosition().y);
        this.score = 0;
        this.isGameOver = false;
        this.lastUpdateTime = 0;
    }
    update(currentTime) {
        if (this.isGameOver)
            return;
        const deltaTime = currentTime - this.lastUpdateTime;
        if (deltaTime < this.speed)
            return;
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
    render(display) {
        display.drawRectangle(this.apple.x, this.apple.y, this.apple.getColor());
        const snakeBody = this.snake.getBody();
        for (let segment of snakeBody) {
            display.drawRectangle(segment.x, segment.y, this.snake.getColor());
        }
        display.drawRectangle(this.snake.x, this.snake.y, this.snake.getColor()); // Dessiner la tête
    }
    play(display) {
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
    getScore() {
        return this.score;
    }
    changeSnakeDirection(newDirection) {
        this.snake.changeDirection(newDirection);
    }
    checkBorderCollision() {
        return this.snake.x < 0 || this.snake.x >= this.width || this.snake.y < 0 || this.snake.y >= this.height;
    }
    getRandomPosition() {
        return new Point(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height));
    }
}
