<template>
    <div class="main-menu">
        <h1>[ Logo APP ]</h1>

        <button @click="goToGame()" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 w-1/2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-mono">PLAY!</button>

        <button @click="goToOptions()" class="focus:outline-none text-white bg-red-800 hover:bg-green-800 focus:ring-4 w-1/3 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-mono">Opciones</button>
    </div>
        
</template>

<script src="./wc-main-menu"></script>

<style scoped>
    .main-menu{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: white;
    }
</style>