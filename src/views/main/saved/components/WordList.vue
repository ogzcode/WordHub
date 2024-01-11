<template>
    <div class="p-12 flex flex-wrap gap-12 justify-around">
        <div class="flex justify-center px-6 flex-col border border-zinc-300 rounded-md min-w-[360px] h-[160px]"
            v-for="(word, i) in wordStore.dataToDisplay" :key="i">
            <div class="flex items-center justify-between gap-x-4 w-full">
                <div class="flex items-start flex-col gap-y-1">
                    <h1 class="text-2xl font-semibold text-slate-700 leading-none">{{ word.word }}</h1>
                    <p class="text-sm text-slate-600 italic">{{ word.phonetics.text }}</p>
                </div>
                <div class="flex items-center gap-x-2">
                    <button @click="handleDeleteWord(word.id)"
                        class="w-[40px] h-[40px] text-amber-500 border border-amber-600 rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path
                                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                        </svg>
                    </button>
                    <AudioBtn v-if="word.phonetics.audio !== ''" :audio="word.phonetics.audio" />
                </div>
            </div>
            <WordFooter :wordId="word.id" @onShowDialog="handleShowDialog" />
        </div>
    </div>
</template>

<script setup>
import { useWordStore } from '../../../../store/word';

import AudioBtn from "../../components/AudioBtn.vue";
import WordFooter from './WordFooter.vue';

const wordStore = useWordStore();

const emits = defineEmits(["onShowDialog"]);

const handleDeleteWord = (id) => {
    wordStore.deleteWordById(id);
};

const handleShowDialog = (value, id = null, body = null) => {
    wordStore.setSelectedWordId(id);
    emits("onShowDialog", value, body);
};

</script>

<style scoped>
</style>