import {Point} from "./Point";

export class Snake extends Point {
    private body: Point [];
    private direction: string;
    private color: string;

    constructor(initialLength: number, initialPosition: Point, initialDirection: string = 'right', color: string = 'green') {
        super(initialPosition.x, initialPosition.y);
        this.body = [];
        for (let i = 0; i < initialLength; i++) {
          this.body.push(new Point(initialPosition.x - i, initialPosition.y));
        }
        this.direction = initialDirection;
        this.color = color;
      }

      public move(): void {}

      public changeDirection(newDirection: string) : void {}

      public grow() : void {}

      public detectCollision() : boolean {}

    }    