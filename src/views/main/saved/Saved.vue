<template>
    <div class="bg-white h-screen w-full overflow-y-auto">
        <Header header-title="Saved Word" input-placeholder="Search word" :search-value="wordStore.searchQuery"
            v-model:update-search-value="wordStore.searchQuery" />
        <WordList @onShowDialog="handleShowDialog" />
        <Pagination />

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
import { ref } from 'vue';
import { useWordStore } from "../../../store/word";

import Header from "../dashboard/components/Header.vue";
import Dialog from "../../../components/Dialog.vue";
import SentencesDialogBody from './components/SentencesDialogBody.vue';
import DetailsDialogBody from './components/DetailsDialogBody.vue';
import WordList from './components/WordList.vue';
import Pagination from './components/Pagination.vue';

const wordStore = useWordStore();

const showDialog = ref(false);
const dialogBody = ref(null);

const handleShowDialog = (value, body = null) => {
    showDialog.value = value;
    dialogBody.value = body;
};
</script>


<style scoped>
</style>