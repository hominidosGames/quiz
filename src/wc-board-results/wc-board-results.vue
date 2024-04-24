<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 h-screen">
        <div class="mb-15 mt-20">
            <p class="text-white font-mono text-xl mb-5 text-center">Respuestas acertadas</p>
            <table class="w-full divide-y text-left text-sm">
                <tbody>
                    <tr v-for="(answer, index) in resultsTrue" :key="index"
                        class="border border-neutral-200 text-white ">
                        <td class="px-3 py-2 font-medium bg-purple-900 font-mono">{{ answer.questionUser }}</td>
                        <td class="px-3 py-2 font-medium bg-purple-900 font-mono">{{ answer.answerUser }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mb-10">
            <p class="text-white font-mono text-xl mb-5 text-center">Respuestas del día</p>
            <table class="w-full divide-y text-left">
                <tbody>
                    <tr v-for="(preguntaRespuesta, index) in totalResults" :key="index"
                        class="border border-neutral-200 text-white">
                        <td class="px-3 py-2 text-sm bg-purple-900 font-mono">{{ preguntaRespuesta.question }}</td>
                        <td class="px-3 py-2 text-sm bg-purple-900 font-mono">{{ preguntaRespuesta.answerTrue }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script src="./wc-board-results"></script>

