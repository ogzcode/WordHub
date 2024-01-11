<template>
    <div class="bg-white h-screen w-full overflow-y-auto">
        <Header header-title="Saved Word" input-placeholder="Search word" :search-value="wordStore.searchQuery"
            v-model:update-search-value="wordStore.searchQuery" />

        <template v-if="wordStore.dataToDisplay.length > 0">
            <WordList @onShowDialog="handleShowDialog" />
            <Pagination />
        </template>
        <template v-else>
            <div class="flex flex-col justify-center items-center h-[calc(100vh-72px)]">
                <img :src="empty" alt="empty" class="h-64 w-64" />
                <p class="text-xl font-semibold text-gray-500 mt-4">No saved words yet</p>
            </div>
        </template>

        <Dialog :show="showDialog" @close="handleShowDialog(false)" :footer-show="false"
            :header-title="dialogBody === 'example' ? 'Example Sentences' : 'Details'">
            <template #body>
                <template v-if="dialogBody === 'example'">
                    <SentencesDialogBody />
                </template>
                <template v-else-if="dialogBody === 'details'">
                    <DetailsDialogBody />
                </template>
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useWordStore } from "../../../store/word";

import Header from "../dashboard/components/Header.vue";
import Dialog from "../../../components/Dialog.vue";
import SentencesDialogBody from './components/SentencesDialogBody.vue';
import DetailsDialogBody from './components/DetailsDialogBody.vue';
import WordList from './components/WordList.vue';
import Pagination from './components/Pagination.vue';

import empty from "../../../assets/empty.svg";

const wordStore = useWordStore();

const showDialog = ref(false);
const dialogBody = ref(null);

onMounted(() => {
    wordStore.fetchAllWords();
});

const handleShowDialog = (value, body = null) => {
    showDialog.value = value;
    dialogBody.value = body;
};
</script>


<style scoped></style>