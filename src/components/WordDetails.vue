<template>
    <div v-for="(mean, index) in wordStore.getWordDetails(id)" :key="index" class="mt-10">
        <div v-if="mean.definitions.length > 0">
            <span
                :class="['inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium', speechType(mean.partOfSpeech)]">{{
                    mean.partOfSpeech }}</span>
        </div>
        <div v-for="(def, indexDef) in mean.definitions.slice(0, 5)" :key="indexDef"
            class="my-2 p-4 bg-slate-100 rounded text-slate-900 relative">
            <!-- <button class="absolute right-2 top-2" @click="wordStore.deleteDef(index, indexDef)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-x fill-slate-500"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button> -->
            <p class="text-sm text-slate-400">Definition {{ indexDef + 1 }}</p>
            <p>{{ def.definition }}</p>
            <div class="bg-white p-4 mt-2 rounded" v-if="def.example">
                <p class="text-sm text-slate-400">Example</p>
                <p class="text-sm">{{ def.example }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWordStore } from "../store/word.js";
import { defineProps } from "vue";

const wordStore = useWordStore();

const props = defineProps({
    id: Number
});

const speechType = (speech) => {
    switch (speech) {
        case "noun":
            return "bg-blue-100 text-blue-800";
        case "verb":
            return "bg-teal-100 text-teal-800";
        case "adjective":
            return "bg-yellow-100 text-yellow-800";
        case "adverb":
            return "bg-orange-100 text-orange-800";
        default:
            return "bg-violet-100 text-violet-800";
    }
}


</script>

<style scoped></style>