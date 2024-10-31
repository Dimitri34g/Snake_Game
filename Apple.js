import { Point } from './Point.js';
export class Apple extends Point {
    constructor(x, y, color = 'red') {
        super(x, y);
        this.color = color;
    }
    generateNewPosition(maxWidth, maxHeight) {
        this.x = Math.floor(Math.random() * maxWidth);
        this.y = Math.floor(Math.random() * maxHeight);
    }
    getColor() {
        return this.color;
    }
}
