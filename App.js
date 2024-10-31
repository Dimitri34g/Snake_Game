import { Display } from "./Display.js";
import { Game } from "./Game.js";
const game = new Game(50, 50, 100);
const display = new Display(50, 50);
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            game.changeSnakeDirection('up');
            break;
        case 'ArrowDown':
            game.changeSnakeDirection('down');
            break;
        case 'ArrowLeft':
            game.changeSnakeDirection('left');
            break;
        case 'ArrowRight':
            game.changeSnakeDirection('right');
            break;
    }
});
display.play(game);
