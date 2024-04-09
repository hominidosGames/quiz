
import { defineComponent } from 'vue';
import { Game } from '../class/Game'

export default defineComponent({
    name: 'wc-board-results',

    data() {
        return {
            numSuccesses: null

        };
    },
    props: {},

    mounted() {
        this.endGame = new Game(this)
        this.endGame.sendSuccesses()
    },
    methods: {




    }
});