<template>
    <div class="p-3 flex flex-col items-center h-screen bg-indigo-800 overflow-y-auto">
     <h1 class="text-green-400 font-mono text-3xl mb-2 text-center bg-gray-500 p-5 rounded">Tus resultados</h1>
        <div class="w-full max-w-screen-md mb-20 mt-20">
            <p class="text-green-400 font-mono text-3xl mb-2 text-center">Respuestas acertadas</p>
            <table class="w-full divide-y divide-gray-200 text-left text-sm text-surface dark:text-white">
                <tbody>
                    <tr v-for="(answer, index) in resultsTrue" :key="index"
                        class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                        <td class="px-3 py-3 font-medium bg-gray-300 ">{{ answer.questionUser }}</td>
                        <td class="px-3 py-2 font-medium bg-gray-300">{{ answer.answerUser }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="w-full max-w-screen-md ">
            <p class="text-green-400 font-mono text-3xl mb-2 text-center">Respuestas del día</p>
            <table class="w-full divide-y divide-gray-200 text-left text-sm text-surface dark:text-white">
                <tbody>
                    <tr v-for="(preguntaRespuesta, index) in totalResults" :key="index"
                        class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                        <td class="px-3 py-2 font-medium bg-gray-300 ">{{ preguntaRespuesta.question }}</td>
                        <td class="px-3 py-2 font-medium bg-gray-300">{{ preguntaRespuesta.answerTrue }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script src="./wc-board-results"></script>