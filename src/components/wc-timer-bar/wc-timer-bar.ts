
import { Helper } from '@/Helper';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'wc-timer-bar',
    components: {},
    data() {
        return {
            value: 100
        };
    },
    props: {},
    mounted() {
        Helper.listener("timer-update", (evt) => {this.update(evt.actualTime)});
    },
    methods: {
        update(time) {
            this.$refs.timer.style.width = `${time}%`;

            if (time <= 30) {
                this.$refs.timer.style.backgroundColor = "#D50000";
                this.$refs.timerMsg.classList.add("ani-timer-msg");
            } else {
                this.$refs.timer.style.backgroundColor = "#00C853";
             }
        }
    }
});