<template>
    <div class="flex justify-center flex-col items-center bg-indigo-800" v-if="answersQuiz.length > 0">
        
        <wc-button-answer :questions="answersQuiz[currentIndex].question" :answers="answersQuiz[currentIndex].answers" @answer-selected="captureAnswers($event)" @nextQuestion="nextQuestion" />

    </div>

</template>

<script src="./wc-board-questions"></script>