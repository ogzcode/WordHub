<template>
    <button @click="$emit('startGame')"
        class="text-indigo-600 bg-white rounded-lg p-1 transition next-btn absolute top-6 right-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-caret-right-fill"
            viewBox="0 0 16 16">
            <path
                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
    </button>
    <p class="absolute top-8 left-6 font-semibold text-white">Choose the word that fits the sentence</p>
</template>

<script setup>
const emits = defineEmits(['startGame']);
</script>

<style scoped>

</style>