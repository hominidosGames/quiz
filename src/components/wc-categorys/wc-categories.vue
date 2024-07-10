<template>
    <img class="foco" ref="foco1" src="../../../assets/images/foco1.png" />
    <img class="foco2" ref="foco2" src="../../../assets/images/foco2.png" />
    <div class="flip-card mt-50">

        <div class="flip-card-inner" ref="redCard">
            <div class="flip-card-front bg-purple-800">
                <p class="title p-2 font-mono">El tema de hoy es...</p>
            </div>
            <div class="flip-card-back items-center bg-amber-500">
                <div class="flex flex-col">
                    <p class="title font-mono">{{ category }}</p>
                    <div class="w-30 mt-2 flex items-center">
                        <img class="object-center" alt="imagen-categoria" id="imagenCategory" />
                    </div>

                    <button @click="goToGame()"
                        class="mt-16 text-center text-sm font-mono text-black hover:text-white p-1 rounded-full font-serif hover:bg-black border-solid border-1 shadow-lg">
                        START
                    </button>
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
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
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
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
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