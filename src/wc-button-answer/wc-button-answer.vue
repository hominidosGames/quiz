<template>
    <div class=" p-4 flex justify-center flex-col items-center ">
        <button class="bg-indigo-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mx-10 w-70 rounded-full transition-all duration-200 bg-purple-900 mb-5"  @click="captureAnswer(answer)">
          {{answer}}
        </button>
    </div>
</template>

<script src="./wc-button-answer"></script>