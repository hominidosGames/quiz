<template>
    <div class="p-4 flex justify-center flex-col items-center bg-indigo-800  w-screen">
        
        <wc-button-answer v-for="(answer, index) in answersQuiz" :key="index" :questions="answer.pregunta" :answers="answer.respuestas" @click="captureAnswers(answer)" />
        <button v-if="currentIndex < answersQuiz.length - 1" @click="nextQuestion">Siguiente pregunta</button>
    </div>
</template>

<script src="./wc-board-questions"></script>