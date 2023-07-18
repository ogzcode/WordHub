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
            class="outline-0 rounded pl-4 w-1/4 bg-transparent text-white border border-slate-700 transition placeholder:text-slate-600 focus:border-slate-500"
            type="text" placeholder="Search" />
    </header>
    <AddModal :show-modal="showModal" @on-close="handleModal">
        <template v-slot:body>
            <AddForm></AddForm>
        </template>
    </AddModal>
</template>

<script setup>
import AddModal from "./modals/AddModal.vue";
import AddForm from "./modals/AddForm.vue";

import { ref } from "vue";

const showModal = ref(false);

const handleModal = (value) => {
    showModal.value = value;
}

</script>

<style scoped></style>