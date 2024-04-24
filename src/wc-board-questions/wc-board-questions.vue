<template>

    <div class="flex justify-center flex-col items-center bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 h-screen"
        v-if="answersQuiz.length > 0">

        <wc-button-answer :questions="answersQuiz[currentIndex].question" :answers="answersQuiz[currentIndex].answers"
            @answer-selected="captureAnswers($event)" :counter="counter" />

    </div>

</template>

<script src="./wc-board-questions"></script>