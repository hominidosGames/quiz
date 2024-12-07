<template>
  <div class="wrapper-board-question p-2 flex justify-center flex-col items-center h-screen">

    <div
      class="board-question w-95vw h-auto min-h-10rem flex justify-center items-center fixed top-25 m-5 p-5 border border-black sm:w-4/5 md:w-1/2 text-sm py-2.5 mb-10 rounded-lg font-mono bg-purple-900 shadow-lg hover:shadow-lg">
      <p class="text-center">
        {{ question }}
      </p>
    </div>


    <div class="flex justify-center flex-col items-center w-screen m-5 mt-40">
      <div class="flip-card" v-for="(answer, index) in answers" :key="index">
        <div class="flip-card-inner" :id="'button-answer-' + (index + 1)">
          <div class="flip-card-front bg-purple-900"> {{ index + 1}} </div>
          <div class="button-answer flip-card-back bg-purple-900" @click="handleClick($event)">
            {{ answer }}
          </div>
        </div>
      </div>
    </div>

    <img class="base-main-menu" src="../../../assets/images/baseMainMenu.png" />
  </div>
</template>

<script src="./wc-button-answer"></script>

<style scoped>
.wrapper-board-question {
  background-color: #a463dfff;
  color: white;
}

.board-question {
  box-shadow:
    0 0 3px 1.5px #fff,  /* inner white */
    0 0 5px 3px yellow, /* middle magenta */
    0 0 7px 4.5px yellow; /* outer cyan */
}

.red {
  background-color: red!important;
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

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 50px;
  perspective: 1000px;
  margin-top: 20px
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  box-shadow:
    0 0 3px 1.5px #fff,  /* inner white */
    0 0 5px 3px #f0f, /* middle magenta */
    0 0 7px 4.5px #0ff; /* outer cyan */
  transform-style: preserve-3d;
  /*
  animation-name: showAnswer;
  animation-duration: .5s;
  animation-fill-mode: both;
  */
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

/*
.button-flip-off {
  animation-name: hiddenAnswer;
  animation-duration: 1s;
  animation-fill-mode: both;
}
*/

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 300px;
  line-height: 50px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: white;
}

.flip-card-back {
  transform: rotateY(180deg);
}


.isCorrect{
  animation-name: correct;
  animation-duration: 2s;
  animation-fill-mode: both;
}

.isInCorrect{
  animation-name: inCorrect;
  animation-duration: 2s;
  animation-fill-mode: both;
}

.animationShake{
  animation-name: horizontalShaking ;
  animation-duration: .5s!important;
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
    background-color:#a463dfff;
  }

  20% {
    background-color:yellow;
  }

  40% {
    background-color:#a463dfff;
  }

  60% {
    background-color:yellow;
  }

  80% {
    background-color:#a463dfff;
  }

  100% {
    background-color:green;
  }
}

@keyframes inCorrect {
  0% {
    background-color:#a463dfff;
  }

  20% {
    background-color:yellow;
  }

  40% {
    background-color:#a463dfff;
  }

  60% {
    background-color:yellow;
  }

  80% {
    background-color:#a463dfff;
  }

  100% {
    background-color:red;
  }
}

@keyframes horizontalShaking {
 0% { transform: translateX(0) }
 10% { transform: translateX(10px) }
 20% { transform: translateX(-10px)) }
 30% { transform: translateX(10px) }
 40% { transform: translateX(-10px) }
 50% { transform: translateX(10px) }
 60% { transform: translateX(-10px) }
 70% { transform: translateX(10px) }
 80% { transform: translateX(-10px) }
 90% { transform:translateX(10px) }
 100% { transform: translateX(0) }
}
</style>
