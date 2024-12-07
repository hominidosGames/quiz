<template>
    <div class="wc-wrapper-timer">
        
        <div class="light-base">
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base" ></div>
            <div class="timer-light-base"></div>
        </div>

        <div class="light-on">
            <div class="timer-light-red" ref="light1"></div>
            <div class="timer-light-red" ref="light2"></div>
            <div class="timer-light-red" ref="light3"></div>
            <div class="timer-light" ref="light4"></div>
            <div class="timer-light" ref="light5"></div>
            <div class="timer-light" ref="light6"></div>
            <div class="timer-light" ref="light7"></div>
            <div class="timer-light-green" ref="light8"></div>
            <div class="timer-light-green" ref="light9"></div>
            <div class="timer-light-green" ref="light10"></div>
        </div>
    </div>


</template>

<script src="./wc-timer-bar"></script>

<style scoped>
.wc-wrapper-timer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 30px !important;
    position: absolute;
    top: 0;
}

.light-on {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 30px !important;
    position: absolute;
}

.light-base {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 30px !important;
    position: absolute;
}

.timer-light-base {
    width: 12px;
    height: 12px;
    line-height: 60px;
    background-color: rgb(199, 199, 199);
    border-radius: 50%;
    margin-top: 10px;
}

.wc-timer {
    width: 10%;
    height: 15px;
    background-color: #00C853;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.timer-light, .timer-light-red, .timer-light-green{
    width: 15px;
    height: 15px;
    line-height: 60px;
    background-color: rgb(224, 249, 98);
    border-radius: 50%;
    margin-top: 8px;
    box-shadow:
        0 0 1.5px 0.75px #fff,
        0 0 2.5px 1.5px yellow,
        0 0 3.5px 2.25px yellow;
}

.timer-light-red {
    background-color: rgb(249, 146, 146);
    box-shadow:
        0 0 1.5px 0.75px #fff,
        0 0 2.5px 1.5px red,
        0 0 3.5px 2.25px red;
}

.timer-light-green {
    background-color: rgb(46, 243, 72);
    box-shadow:
        0 0 1.5px 0.75px #fff,
        0 0 2.5px 1.5px green,
        0 0 3.5px 2.25px green;
}

.lightOff {
    animation: lightOff 1s;
    animation-fill-mode: both;
}

.wc-timer-msg {
    background-color: #D50000;
    color: white;
    position: absolute;
    line-height: 30px;
    width: 80px;
    border-radius: 5px;
    text-align: center;
    top: 20px;
    left: -105px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.ani-timer-msg {
    animation: moveLeft .2s;
    animation-fill-mode: forwards;
}

@keyframes moveLeft {
    0% {
        left: -105px;
        top: 20px;
    }

    100% {
        left: -5px;
        top: 20px;
    }
}

@keyframes lightOff {
    0% {
        opacity: 100%;
    }

    100% {
        opacity: 0%;
    }
}
</style>