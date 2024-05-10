<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r bg-green-400 h-screen">
        <div class="mb-10 mt-8">
            <p class="text-black font-mono text-m mb-5 text-center">Respuestas acertadas</p>
            <table class="w-full divide-y text-left text-sm">
                <tbody>
                    <tr v-for="(answer, index) in resultsTrue" :key="index"
                        class="border border-neutral-200 text-black ">
                        <td class="px-3 py-2 text-xs bg-yellow-400 font-mono">{{ answer.question }}</td>
                        <td class="px-3 py-2 text-xs bg-yellow-400 font-mono">{{ answer.response }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <p class="text-black font-mono text-m mb-5 text-center">Respuestas del día</p>
            <table class="w-full divide-y text-left">
                <tbody>
                    <tr v-for="(preguntaRespuesta, index) in totalResults" :key="index"
                        class="border border-neutral-200 text-black">
                        <td class="px-3 py-2 text-xs bg-yellow-400 font-mono">{{ preguntaRespuesta.question }}</td>
                        <td class="px-3 py-2 text-xs bg-yellow-400 font-mono">{{ preguntaRespuesta.response }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="m-10">
            <button @click="goToMenu"
                class="px-4 py-2 bg-green-600 hover:bg-green-300 text-white rounded-md shadow-md font-mono">Menu
                principal</button>
        </div>
    </div>
</template>


<script src="./wc-board-results"></script>
