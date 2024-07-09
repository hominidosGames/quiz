<template>
    <div class="mb-10">
        <div id="spinner" class="loader mx-auto"></div>
        <p id="loadingText">Loading...</p>
    </div>

</template>


<script src="./wc-spinner.ts"></script>

<style>

.loader {
    margin-bottom: 20px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #000;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>