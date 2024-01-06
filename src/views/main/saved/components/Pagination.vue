<template>
    <div v-if="wordStore.wordList.length > 0" class="h-[5rem] flex justify-center items-start">
        <button @click="wordStore.handlePrevPage()" class="bg-rose-500 text-white p-3 rounded-full mr-4 disabled:opacity-50"
            :disabled="wordStore.pageActionIsDisabled('prev')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
        </button>
        <button @click="wordStore.handleNextPage()" class="bg-rose-500 text-white p-3 rounded-full disabled:opacity-50"
            :disabled="wordStore.pageActionIsDisabled('next')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { useWordStore } from '../../../../store/word';

const wordStore = useWordStore();
</script>

<style scoped></style>