
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
        Helper.listener("timer-update", (evt) => { this.update(evt.actualTime) });
        Helper.listener("timer-reset", () => { this.reset() });
    },
    methods: {
        update(time) { return
            if (time < 100) this.$refs.light10.classList.add("lightOff");
            if (time < 90) this.$refs.light9.classList.add("lightOff");
            if (time < 80) this.$refs.light8.classList.add("lightOff");
            if (time < 70) this.$refs.light7.classList.add("lightOff");
            if (time < 60) this.$refs.light6.classList.add("lightOff");
            if (time < 50) this.$refs.light5.classList.add("lightOff");
            if (time < 40) this.$refs.light4.classList.add("lightOff");
            if (time < 30) this.$refs.light3.classList.add("lightOff");
            if (time < 20) this.$refs.light2.classList.add("lightOff");
            if (time < 10) this.$refs.light1.classList.add("lightOff");
        },

        reset() {
            this.$refs.light10.classList.remove("lightOff");
            this.$refs.light9.classList.remove("lightOff");
            this.$refs.light8.classList.remove("lightOff");
            this.$refs.light7.classList.remove("lightOff");
            this.$refs.light6.classList.remove("lightOff");
            this.$refs.light5.classList.remove("lightOff");
            this.$refs.light4.classList.remove("lightOff");
            this.$refs.light3.classList.remove("lightOff");
            this.$refs.light2.classList.remove("lightOff");
            this.$refs.light1.classList.remove("lightOff");
        }
    }
});