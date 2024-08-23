<template>

    <img class="foco" ref="foco1" src="../../../assets/images/foco1.png" />
    <img class="foco2" ref="foco2" src="../../../assets/images/foco2.png" />
    <div class="flip-card mt-60">

        <div class="flip-card-inner" @click="flipCard" ref="redCard">
            <div class="flip-card-front bg-purple-800 dark:bg-shadesOfBlue shadow-md">
                <p class="title p-2 font-mono">El tema de hoy es...</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-15 h-15 mx-auto">
                    <title>orbit-variant</title>
                    <path fill="white"
                        d="M19 8L15 12H18C18 15.31 15.31 18 12 18C11 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23M6 12C6 8.69 8.69 6 12 6C13 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12M14 12C14 13.11 13.11 14 12 14S10 13.11 10 12 10.9 10 12 10 14 10.9 14 12Z" />
                </svg>
            </div>
            <div class="flip-card-back items-center bg-purple-300 bg-white dark:bg-shadesOfBlue shadow-md">
                <div class="flex flex-col">
                    <p class="title font-mono">{{ category }}</p>
                    <div class="w-30 mt-2 flex items-center">
                        <img class="object-center" alt="imagen-categoria" id="imagenCategory" />
                    </div>
                </div>
            </div>
        </div>


</div>





</template>


<script src="./wc-categories"></script>

<style>
.flip-card {
    background-color: transparent;
    width: 200px;
    height: 310px;
    perspective: 1000px;
}

.title {
    font-size: 1.0em;
    font-weight: 800;
    text-align: center;
    margin: 0;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    font-size: 1.1em;
    font-weight: 900;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
    /* background: linear-gradient(120deg, rgb(252, 44, 44) 60%, rgb(245, 63, 63) 88%,
            rgb(255, 211, 195) 40%, rgba(248, 5, 5, 0.603) 48%); */
    /* background-color: rgb(174, 107, 250); */
    color: white;
    z-index: 2;
    border: black solid 1px;
}

.flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
    /* background: linear-gradient(120deg, rgb(252, 44, 44) 60%, rgb(245, 63, 63) 88%,
            rgb(255, 211, 195) 40%, rgba(248, 5, 5, 0.603) 48%); */
    color: rgb(0, 0, 0);
    transform: rotateY(180deg);
    z-index: 2;
    border: black solid 1px;
}


.foco {
    position: absolute;
    top: -100px;
    height: 1200px;
    min-width: 400px;
    animation-duration: 2s;
    animation-name: showL1;
    pointer-events: none;
    animation-fill-mode: both;
    transform-origin: top right;
}

.foco2 {
    position: absolute;
    top: -100px;
    height: 1200px;
    min-width: 400px;
    animation-duration: 2s;
    animation-name: showL2;
    pointer-events: none;
    animation-fill-mode: both;
    transform-origin: top left;
}

.hiddenLight1 {
    animation-name: hiddenL1;
    animation-duration: 1s;
}

.hiddenLight2 {
    animation-name: hiddenL2;
    animation-duration: 1s;
}

@keyframes hiddenL1 {
    0% {
        opacity: .8;
        rotate: 10deg;
    }

    100% {
        opacity: 0;
        rotate: -10deg;
    }
}

@keyframes hiddenL2 {
    0% {
        opacity: .8;
        rotate: -10deg;
    }

    100% {
        opacity: 0;
        rotate: 10deg;
    }
}

@keyframes showL1 {
    0% {
        opacity: 0;
        rotate: 0deg;
    }

    100% {
        opacity: .8;
        rotate: 10deg;
    }
}

@keyframes showL2 {
    0% {
        opacity: 0;
        rotate: 0deg;
    }

    100% {
        opacity: .8;
        rotate: -10deg;
    }
}

@keyframes showBase {
    0% {}

    100% {
        bottom: 0
    }
}
</style>