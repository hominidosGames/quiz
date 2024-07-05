<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r bg-purple-800 h-screen">

        <wc-timer-bar></wc-timer-bar>

        <h1 class="mt-20 text-white">Hoy toca...</h1>

        <div class="max-w-sm mt-20 bg-purple-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-white dark:text-white">{{ category }}</h5>

            <div>
                <img class="rounded-t-lg image-category" src="../../../assets/images/cine.png" alt="imagen-cine" />
            </div>

            <div class="p-5">
                <button  @click="goToGame()"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-800 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                    Comenzar
                </button>
            </div>
        </div>

    </div>
</template>


<script src="./wc-board-category.ts"></script>
<style>
.light-on {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 30px !important;
    position: absolute;
}

.image-category{
    height: 250px;
}
</style>