import { Game } from '@/class/Game';

export class Manager {

    private game: Game | null;

    constructor() {
        this.game = null;
    }

    public initGame() {
        
        this.game = new Game();
        this.game.searchQuestion();
        this.game.initTimer();
    }
}