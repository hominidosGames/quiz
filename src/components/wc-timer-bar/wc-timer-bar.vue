<template>
    <div class="wc-wrapper-timer">
        <div class="wc-timer-msg" ref="timerMsg">Rápido!</div>
        <div class="wc-timer" ref="timer"></div>
    </div>


</template>

<script src="./wc-timer-bar"></script>

<style scoped>
.wc-wrapper-timer {
    width: 100%;
    height: 15px;
    background-color: lightgray;
}

.wc-timer {
    width: 10%;
    height: 15px;
    background-color: #00C853;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
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
  0%   { left: -105px; top: 20px;}
  100%  {left: -5px; top: 20px;}
}

</style>