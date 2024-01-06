<template>
    <div class="bg-white min-h-screen w-full">
        <Header :search-value="search" v-model:update-search-value="search" @on-key-enter="handleSearch" />
        <div class="p-8 flex flex-col word-container">
            <template v-if="searchResult">
                <WordData :data="searchResult" />
            </template>
            <template v-else>
                <div class="flex-1 flex flex-col items-center justify-around">
                    <div class="h-2/3 border-zinc-300 rounded-lg w-full flex flex-col justify-center items-center gap-y-8">
                        <img :src="dashboard" alt="dashboard" class="w-[480px]" />
                        <div class="text-center w-full rounded-lg py-2">
                            <h1 class="text-3xl font-bold text-zinc-700 mb-1">Search for a word</h1>
                            <p class="text-zinc-400">Start by typing a word in the search bar above</p>
                        </div>
                    </div>
                    <div class="rounded-lg p-6 border border-rose-400 bg-rose-50/50 w-full h-1/3 flex flex-col">
                        <h1 class="text-xl font-semibold tracking-wide text-rose-700 mb-4">Statistic</h1>
                        <div class="flex h-full gap-x-8">
                            <div class="flex-1 rounded-xl border border-slate-400 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-bookmark" viewBox="0 0 16 16">
                                    <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                </svg>
                                <span>Words saved</span>
                                <span>0</span>
                            </div>
                            <div class="flex-1 border border-slate-400 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-bookmark" viewBox="0 0 16 16">
                                    <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                </svg>
                                <span>Words saved</span>
                                <span>0</span>
                            </div>
                            <div class="flex-1 border border-slate-400 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-bookmark" viewBox="0 0 16 16">
                                    <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                </svg>
                                <span>Words saved</span>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import WordData from './components/WordData.vue';

import { useToastStore } from '../../../store/toast';

import { searchWord } from '../../../services/api/word';
import dashboard from "../../../assets/dashboard.svg";

const search = ref('');
const searchResult = ref(null);

const toastStore = useToastStore();

const handleSearch = () => {
    searchWord(search.value)
        .then((res) => {
            searchResult.value = res.data[0];
        })
        .catch((err) => {
            toastStore.showToast("error", err.response.data.message);
        });
};

</script>

<style scoped>
.word-container {
    height: calc(100vh - 72px);
}
</style>
