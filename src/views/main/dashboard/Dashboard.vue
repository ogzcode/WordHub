<template>
    <div class="bg-white min-h-screen w-full">
        <Header header-title="Dashboard" input-placeholder="Search new word..." :search-value="search" v-model:update-search-value="search" @on-key-enter="handleSearch" />
        <div class="p-8 flex flex-col word-container">
            <template v-if="searchResult">
                <WordData :data="searchResult" />
            </template>
            <template v-else>
                <Main />
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Header from './components/Header.vue';
import WordData from './components/WordData.vue';
import Main from './components/Main.vue';

import { useToastStore } from '../../../store/toast';

import { searchWord } from '../../../services/api/word';

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
