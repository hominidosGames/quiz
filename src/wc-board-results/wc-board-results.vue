<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r bg-green-400 h-screen">

        <div class="mb-15 mt-">
            <div class="flex items-center justify-center">
                <h1 class="text-">{{ resultsTrue.length }} / 5</h1>
            </div>
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
                        <td class="px-2 py-2 text-xs bg-yellow-400 font-mono">{{ preguntaRespuesta.question }}</td>
                        <td class="px-2 py-2 text-xs bg-yellow-400 font-mono">{{ preguntaRespuesta.response }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="fixed bottom-2 left-1/2 transform -translate-x-1/2 flex flex-row w-80 justify-between">
            <button @click="goToMenu"
                class="px-2  bg-green-600 hover:bg-green-300 text-white rounded-md shadow-md font-mono">Menu
                principal</button>

            <button @click="shareResults"
                class="px-2 bg-green-300 hover:bg-green-400 text-white rounded-full shadow-md font-mono transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <img src="../../public/compartir.png" alt="Compartir" class="w-15 h-15 rounded-full">
            </button>
        </div>

    </div>
</template>


<script src="./wc-board-results"></script>
