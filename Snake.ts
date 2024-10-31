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

      public move(): void {
        let newHead: Point;
    
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

      public changeDirection(newDirection: string) : void {}

      public grow() : void {}

      public detectCollision() : boolean {}

      public getBody(): Point[] {
        return this.body;
      }
    
      public getColor(): string {
        return this.color;
      }

    }    