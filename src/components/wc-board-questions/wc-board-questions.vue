<template>

    <div class="wrapper-board-question bg-center bg-no-repeat bg-cover bg-top flex flex-col items-center">
        <!-- Timer -->
       <!-- <wc-timer-bar></wc-timer-bar>-->

        <!--Panel pregunta-->
        <div ref="panelQuestion"
            class="board-question w-95vw h-auto min-h-10rem flex justify-center items-center border border-black  text-sm rounded-lg font-mono bg-purple-700 shadow-lg hover:shadow-lg">
            <p class="text-center">
                {{ question }}
            </p>
        </div>

        <!--Botones-->
        <div class="flex justify-center flex-col items-center w-screen">
            <div class="button-answer" v-for="(answer, index) in answers" :key="index">
                <div class="button-answer-inner" :id="'button-answer-' + (index + 1)"
                    :ref="'buttonAnswer' + (index + 1)">
                    <div class="button-answer-front bg-purple-900"> {{ index + 1 }} </div>
                    <div class="button-answer-back bg-purple-900" @click="handleClickButtonAnswer($event, index)">
                        {{ answer }}
                    </div>
                </div>
            </div>
        </div>

        <img class="base-main-menu" src="../../../assets/images/baseMainMenu.png" />

        <div class="ani-background">
            <div class="word top-left-bottom-right">?</div>
            <div class="word top-right-bottom-left">?</div>
            <div class="word bottom-left-top-right">?</div>
            <div class="word bottom-right-top-left">?</div>
        </div>
    </div>
</template>

<script src="./wc-board-questions"></script>

<style>
.wrapper-board-question {
    height: 100%;
    color: white;
    padding: 50px;
}

.board-question {
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
    margin-bottom: 50px
}

.red {
    background-color: red !important;
}

.base-main-menu {
    width: 100%;
    position: absolute;
    bottom: 0px;
    animation-name: showBase;
    animation-duration: 1s;
    pointer-events: none;
    animation-fill-mode: both;
}

.button-answer {
    background-color: transparent;
    width: 300px;
    height: 50px;
    perspective: 1000px;
    margin-top: 25px;
}

.button-answer-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px #f0f,
        0 0 7px 4.5px #0ff;
    transform-style: preserve-3d;
}

.button-flip {
    animation-name: showAnswer;
    animation-duration: .5s;
    animation-fill-mode: both;
}

.button-flip2 {
    animation-name: showAnswer2;
    animation-duration: .5s;
    animation-fill-mode: both;
}

.button-answer-front,
.button-answer-back {
    position: absolute;
    width: 300px;
    line-height: 50px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: white;
}

.button-answer-back {
    transform: rotateY(180deg);
}


.isCorrect {
    animation-name: correct;
    animation-duration: 2s;
    animation-fill-mode: both;
}

.isInCorrect {
    animation-name: inCorrect;
    animation-duration: 2s;
    animation-fill-mode: both;
}

.animationShake {
    animation-name: horizontalShaking;
    animation-duration: .5s !important;
    animation-fill-mode: both;
}

#button-answer-1 {
    animation-duration: 2s;
}

#button-answer-2 {
    animation-duration: 2.5s;
}

#button-answer-3 {
    animation-duration: 3s;
}

#button-answer-4 {
    animation-duration: 3.5s;
}

@keyframes showAnswer {
    80% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(180deg);
    }
}

@keyframes showAnswer2 {
    80% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(180deg);
    }
}

@keyframes hiddenAnswer {
    0% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateY(0);
    }
}

@keyframes correct {
    0% {
        background-color: #a463dfff;
    }

    20% {
        background-color: yellow;
    }

    40% {
        background-color: #a463dfff;
    }

    60% {
        background-color: yellow;
    }

    80% {
        background-color: #a463dfff;
    }

    100% {
        background-color: green;
    }
}

@keyframes inCorrect {
    0% {
        background-color: #a463dfff;
    }

    20% {
        background-color: yellow;
    }

    40% {
        background-color: #a463dfff;
    }

    60% {
        background-color: yellow;
    }

    80% {
        background-color: #a463dfff;
    }

    100% {
        background-color: red;
    }
}

@keyframes horizontalShaking {
    0% {
        transform: translateX(0)
    }

    10% {
        transform: translateX(10px)
    }

    20% {
        transform: translateX(-10px))
    }

    30% {
        transform: translateX(10px)
    }

    40% {
        transform: translateX(-10px)
    }

    50% {
        transform: translateX(10px)
    }

    60% {
        transform: translateX(-10px)
    }

    70% {
        transform: translateX(10px)
    }

    80% {
        transform: translateX(-10px)
    }

    90% {
        transform: translateX(10px)
    }

    100% {
        transform: translateX(0)
    }
}


.ani-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(135, 46, 217);
    z-index: -1;
    top: -50px
}

/* Animaciones en diagonal */
@keyframes moveTopLeftBottomRight {
    0% {
        left: 0;
        top: 0;
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100% {
        left: 100%;
        top: 100%;
        opacity: 0;
    }
}

@keyframes moveTopRightBottomLeft {
    0% {
        right: 0;
        top: 0;
    }
    50%{
        opacity: 1;
    }
    100% {
        right: 100%;
        top: 100%;
    }
}

@keyframes moveBottomLeftTopRight {
    0% {
        left: 0;
        bottom: 0;
    }
    50%{
        opacity: 1;
    }
    100% {
        left: 100%;
        bottom: 100%;
    }
}

@keyframes moveBottomRightTopLeft {
    0% {
        right: 0;
        bottom: 0;
    }
    50%{
        opacity: 1;
    }
    100% {
        right: 100%;
        bottom: 100%;
    }
}


.word {
    position: absolute;
    white-space: nowrap;
    font-size: 56px;
    color: rgb(55, 0, 107);
    font-weight: bold;
    opacity: 0;
}


/* Aplicar animaciones a las palabras */
.word.top-left-bottom-right {
    animation: moveTopLeftBottomRight 10s linear infinite;
}

.word.top-right-bottom-left {
    animation: moveTopRightBottomLeft 10s linear infinite;
}

.word.bottom-left-top-right {
    animation: moveBottomLeftTopRight 10s linear infinite;
}

.word.bottom-right-top-left {
    animation: moveBottomRightTopLeft 10s linear infinite;
}

/* Retraso de animación para diversidad */
.word:nth-child(1) {
    animation-delay: 1s;
}

.word:nth-child(2) {
    animation-delay: 2s;
}

.word:nth-child(3) {
    animation-delay: 3s;
}

.word:nth-child(4) {
    animation-delay: 4s;
}
</style>