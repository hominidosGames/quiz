<template>
    <div class="p-4 flex justify-center flex-col items-center bg-indigo-800  h-screen w-screen">
        <wc-button-question></wc-button-question>
        <wc-button-answer v-for="(answer, index) in answers" :key="index" :answer="answer.text" />
    </div>
</template>

<script src="./wc-board-questions"></script>