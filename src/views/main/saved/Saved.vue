<template>
    <div class="bg-white min-h-screen w-full">
        <Header />
        <WordList @onShowDialog="handleShowDialog" />

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
import { ref} from 'vue';
import Header from './components/Header.vue';
import Dialog from "../../../components/Dialog.vue";
import SentencesDialogBody from './components/SentencesDialogBody.vue';
import DetailsDialogBody from './components/DetailsDialogBody.vue';
import WordList from './components/WordList.vue';

const showDialog = ref(false);
const dialogBody = ref(null);

const handleShowDialog = (value, body = null) => {
    showDialog.value = value;
    dialogBody.value = body;
};
</script>


<style scoped>
</style>