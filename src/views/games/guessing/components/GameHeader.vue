<template>
    <div class="flex justify-between items-center">
        <button @click="$emit('startGame')" class="text-sky-500 bg-white rounded-lg p-1 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
        </button>
        <div class="flex gap-x-2">
            <svg v-for="index in health" :key="index" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                class="bi bi-heart-fill fill-red-500" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
            <svg v-for="index in 3 - health" :key="index" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                class="bi bi-heart fill-white" viewBox="0 0 16 16">
                <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
        </div>
        <p class="text-white text-xl font-semibold">Score : {{ props.score }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    health: {
        type: Number,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
})

const emits = defineEmits(["startGame"]);
</script>

<style scoped></style>