<template>

    <div class="flex justify-center flex-col items-center bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600"
        v-if="answersQuiz.length > 0">

        <div v-if="showQuestion">
            <wc-button-answer :questions="answersQuiz[currentIndex].question" />
        </div>

        <div v-if="!showQuestion && showAnswers">

            <wc-button-answer :questions="answersQuiz[currentIndex].question" :esCorrecta="esCorrecta"
                :answers="answersQuiz[currentIndex].answers" @answer-selected="captureAnswers($event)"
                :counter="counter" />

        </div>

    </div>

</template>

<script src="./wc-board-questions"></script>

<style>
.esCorrecta {
    background-color: green;
}
</style>