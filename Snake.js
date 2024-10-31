import { Point } from "./Point.js";
export class Snake extends Point {
    constructor(initialLength, initialPosition, initialDirection = 'right', color = 'green') {
        super(initialPosition.x, initialPosition.y);
        this.body = [];
        for (let i = 0; i < initialLength; i++) {
            this.body.push(new Point(initialPosition.x - i, initialPosition.y));
        }
        this.direction = initialDirection;
        this.color = color;
    }
    move() {
        let newHead;
        switch (this.direction) {
            case 'up':
                newHead = new Point(this.x, this.y - 1);
                break;
            case 'down':
                newHead = new Point(this.x, this.y + 1);
                break;
            case 'left':
                newHead = new Point(this.x - 1, this.y);
                break;
            case 'right':
            default:
                newHead = new Point(this.x + 1, this.y);
                break;
        }
        this.body.unshift(new Point(this.x, this.y));
        this.body.pop();
        this.x = newHead.x;
        this.y = newHead.y;
    }
    changeDirection(newDirection) {
        const oppositeDirections = {
            'up': 'down',
            'down': 'up',
            'left': 'right',
            'right': 'left'
        };
        if (newDirection !== oppositeDirections[this.direction]) {
            this.direction = newDirection;
        }
    }
    grow() {
        const tail = this.body[this.body.length - 1];
        this.body.push(new Point(tail.x, tail.y));
    }
    detectCollision() {
        for (let i = 0; i < this.body.length; i++) {
            if (this.hasSamePosition(this.body[i])) {
                return true;
            }
        }
        return false;
    }
    getBody() {
        return this.body;
    }
    getColor() {
        return this.color;
    }
}
