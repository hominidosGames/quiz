<template>

    <div class="bg-center bg-no-repeat bg-cover bg-top h-screen flex justify-center flex-col items-center"
       v-if="answersQuiz.length > 0">
    
            <div v-if="showQuestion">
                <wc-button-answer :questions="answersQuiz[currentIndex].question" />
            </div>
    
            <div v-if="!showQuestion && showAnswers">
    
                <wc-button-answer :questions="answersQuiz[currentIndex].question"
                    :answers="answersQuiz[currentIndex].answers" @answer-selected="captureAnswers" :counter="counter"
                    :selected-answer="selectedAnswer" :disabled="disabled"/>
    
            </div>
    
        </div>
    
    </template>
    
    <script src="./wc-board-questions"></script> 