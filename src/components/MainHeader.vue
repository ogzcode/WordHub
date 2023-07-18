<template>
    <header class="flex justify-between mt-10 px-12">
        <button class="bg-emerald-600 rounded-full p-2" @click="handleModal(true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi bi-plus fill-white"
                viewBox="0 0 16 16">
                <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
        </button>
        <input
            v-model="filterText"
            class="outline-0 rounded pl-4 w-1/4 bg-transparent text-white border border-slate-700 transition placeholder:text-slate-600 focus:border-slate-500"
            type="text" placeholder="Search" />
    </header>
    <ModalLayout :show-modal="showModal" @on-close="handleModal" @on-save="save" slot-name="body">
        <template v-slot:body>
            <AddForm></AddForm>
        </template>
    </ModalLayout>
</template>

<script setup>
import { useWordStore } from "../store/word.js";
import { useAuthStore } from "../store/auth.js";
import { storeToRefs } from 'pinia';
import { ref } from "vue";

import ModalLayout from "./modals/ModalLayout.vue";
import AddForm from "./modals/AddForm.vue";

const wordStore = useWordStore();
const authStore = useAuthStore();

const { session } = storeToRefs(authStore);
const { filterText } = storeToRefs(wordStore);

const showModal = ref(false);

const handleModal = (value) => {
    showModal.value = value;
}

const save = () => {
    wordStore.insertWord(session.value?.user?.id);
    showModal.value = false;
}

</script>

<style scoped></style>