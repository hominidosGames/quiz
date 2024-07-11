<template>
    <div class="p-4 flex flex-col items-center bg-gradient-to-r bg-purple-800 h-screen">
        <div class="mt-2">
            <p class="text-white font-mono text-m text-center font-base">Respuestas del día</p>
            <table class="min-w-full divide-y divide-gray-200 mt-3 shadow-md">
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="(preguntaRespuesta, index) in totalResults" :key="index" class="hover:bg-gray-100">

                        <td class="px-3 py-2 text-start text-xs text-white font-medium bg-purple-900 font-mono border-solid border-2 border-fuchsia-700"
                            id="prueba">{{ preguntaRespuesta.question }}</td>
                        <td class="px-3 py-2 text-start text-xs text-white font-medium bg-purple-900 font-mono border-solid border-2 border-fuchsia-700"
                            id="prueba">{{ preguntaRespuesta.response }}</td>
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

        <div v-if="flag" class="mt-6 mb-10 flex flex-col items-center text-white">
            <div class="flex flex-col items-center bg-purple-500 p-3 rounded-xl shadow-lg">
                <p class="text-sm">Hoy has ganado:</p>
                <div class="flex flex-col justify-around w-15 items-center justify-center mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 mx-auto">
                        <title>star</title>
                        <path fill="green" stroke="white" stroke-width="2"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>

                    <p class="p-2 text-sm">{{ numTrue }}</p>
                </div>
            </div>
            <div class="mt-10 flex flex-col items-center">
                <p class="mb-2 text-white font-mono">Menú</p>
                <button @click="goToMenu"
                    class="w-14 h-14 bg-fuchsia-700 shadow-xl hover:bg-purple-900 rounded-full text-white shadow-lg font-mono text-xs border-2 border-white py-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mx-auto" viewBox="0 0 24 24">
                        <title>menu</title>
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" stroke="black" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="m-20 flex flex-col items-center" v-if="flag == false">
            <p class="mb-2 text-white font-mono">Puntuación</p>
            <button @click="verifyResponse"
                class="w-14 h-14 bg-fuchsia-700 rounded-full text-white shadow-xl font-mono text-xs border-2 py-3 me-2 flex flex-col justify-center items-center">
                <svg height="100%"
                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1"
                    viewBox="0 0 32 32" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path stroke="white"
                        d="M7.95,16.027c-0.133,-0.414 -0.518,-0.696 -0.952,-0.696c-0.435,0 -0.82,0.282 -0.953,0.696l-0.957,2.99c0,0 -3.086,0 -3.086,0c-0.432,0 -0.815,0.278 -0.95,0.688c-0.135,0.41 0.009,0.861 0.356,1.117l2.51,1.852c0,0 -0.96,3.003 -0.96,3.003c-0.133,0.413 0.017,0.864 0.369,1.117c0.352,0.253 0.828,0.249 1.177,-0.008l2.494,-1.84c-0,-0 2.493,1.84 2.493,1.84c0.349,0.257 0.825,0.261 1.177,0.008c0.352,-0.253 0.502,-0.704 0.37,-1.117l-0.961,-3.003c-0,0 2.51,-1.852 2.51,-1.852c0.348,-0.256 0.491,-0.707 0.356,-1.117c-0.135,-0.41 -0.518,-0.688 -0.95,-0.688l-3.086,0c-0,0 -0.957,-2.99 -0.957,-2.99Z" />
                    <path stroke="white"
                        d="M16.96,5.018c-0.133,-0.415 -0.518,-0.696 -0.953,-0.696c-0.435,-0 -0.821,0.281 -0.953,0.696l-0.957,3.001c0,-0 -3.083,-0 -3.083,-0c-0.432,-0 -0.815,0.276 -0.95,0.686c-0.135,0.41 0.008,0.86 0.355,1.117l2.511,1.859c-0,0 -0.962,3.015 -0.962,3.015c-0.131,0.414 0.018,0.865 0.371,1.117c0.353,0.253 0.828,0.249 1.177,-0.009l2.491,-1.844c-0,-0 2.491,1.844 2.491,1.844c0.348,0.258 0.824,0.262 1.177,0.009c0.353,-0.252 0.502,-0.703 0.371,-1.117l-0.962,-3.015c0,0 2.511,-1.859 2.511,-1.859c0.347,-0.257 0.49,-0.707 0.355,-1.117c-0.136,-0.41 -0.518,-0.686 -0.95,-0.686l-3.084,-0c0,-0 -0.956,-3.001 -0.956,-3.001Z" />
                    <path stroke="white"
                        d="M25.933,16.026c-0.132,-0.414 -0.517,-0.695 -0.952,-0.695c-0.434,0 -0.819,0.281 -0.952,0.695l-0.961,2.991c0,0 -3.102,0 -3.102,0c-0.433,0 -0.816,0.278 -0.951,0.689c-0.134,0.41 0.01,0.861 0.358,1.117l2.52,1.852c0,-0 -0.964,3 -0.964,3c-0.132,0.413 0.016,0.864 0.368,1.118c0.352,0.253 0.827,0.251 1.177,-0.006l2.507,-1.843c0,0 2.508,1.843 2.508,1.843c0.35,0.257 0.825,0.259 1.177,0.006c0.351,-0.254 0.5,-0.705 0.367,-1.118l-0.964,-3c0,-0 2.52,-1.852 2.52,-1.852c0.349,-0.256 0.493,-0.707 0.358,-1.117c-0.134,-0.411 -0.518,-0.689 -0.95,-0.689l-3.102,0c-0,0 -0.962,-2.991 -0.962,-2.991Z" />
                </svg>
            </button>
        </div>


    </div>
</template>


<script src="./wc-board-results"></script>
<style>
/* .board-question {
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
} */
</style>