<template>
    <div class="presentation">
        <h1>Presentación de la App</h1>
        <p>(Esto solo se debería  ver una vez)</p>
        <button @click="goToMainMenu()" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 w-1/3 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-mono">Al menu</button>
    </div>
        
</template>

<script src="./wc-presentation"></script>

<style scoped>
    .presentation{
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