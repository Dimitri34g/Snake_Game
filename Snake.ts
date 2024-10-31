import {Point} from "./Point.js";

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

      public changeDirection(newDirection: string) : void {
        const oppositeDirections: { [key: string]: string } = {
            'up': 'down',
            'down': 'up',
            'left': 'right',
            'right': 'left'
            };
            if ( newDirection !== oppositeDirections[this.direction] ) {
                this.direction = newDirection;
            }
      }

      public grow(): void {
        const tail = this.body[this.body.length - 1];
        this.body.push(new Point(tail.x, tail.y));
      }
    

      public detectCollision(): boolean {
        for (let i = 0; i < this.body.length; i++) {
          if (this.hasSamePosition(this.body[i])) {
            return true;
          }
        }
        return false;
      }

      public getBody(): Point[] {
        return this.body;
      }
    
      public getColor(): string {
        return this.color;
      }

    }    