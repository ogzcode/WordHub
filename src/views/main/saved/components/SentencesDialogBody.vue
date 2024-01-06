<template>
    <div class="w-[560px] py-4">
        <div class="flex items-center gap-x-4 mb-8">
            <input v-model="newSentences" type="text" class="w-full border border-zinc-400 rounded-md p-2 text-zinc-800"
                placeholder="Add new sentences" />
            <button @click="handleNewSentences()" class="bg-sky-500 rounded-full p-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
            </button>
        </div>
        <div class="">
            <template v-if="wordStore.selectedWordSentences.length > 0"
                v-for="(sentence, index) in wordStore.selectedWordSentences" :key="index">
                <div class="flex items-center justify-between gap-x-4 mt-4 border border-rose-300 px-4 py-2 rounded-md">
                    <p class="text-base text-zinc-600">{{ sentence }}</p>
                    <button @click="handleDeleteSentences(index)"
                        class="text-red-500 border border-red-500 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash3" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </button>
                </div>
            </template>
            <template v-else>
                <p class="text-lg text-slate-600">No example sentences found.</p>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useWordStore } from '../../../../store/word';


const wordStore = useWordStore();
const newSentences = ref('');

const handleNewSentences = () => {
    const copy = [...wordStore.selectedWordSentences, newSentences.value];
    wordStore.updateSentences(copy);
    newSentences.value = '';
};

const handleDeleteSentences = (index) => {
    const copy = [...wordStore.selectedWordSentences];
    copy.splice(index, 1);
    wordStore.updateSentences(copy);
};

</script>

<style scoped>
input:focus {
    outline: none;
}
</style>