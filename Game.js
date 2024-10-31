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
    }
    play(display) {
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
    render(display) {
        display.drawCircle(this.apple.x, this.apple.y, this.apple.getColor());
        const snakeBody = this.snake.getBody();
        for (let segment of snakeBody) {
            display.drawRectangle(segment.x, segment.y, this.snake.getColor());
        }
        display.drawRectangle(this.snake.x, this.snake.y, this.snake.getColor());
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
