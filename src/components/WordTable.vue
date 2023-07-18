<template>
    <div class="scrollable-table mt-10 mx-2 px-10">
        <table class="table table-auto w-full text-white tracking-wide">
            <thead>
                <tr class="text-left">
                    <th class="border-b border-b-slate-500 font-medium text-lg">Word</th>
                    <th class="border-b border-b-slate-500 font-medium text-lg">Turkish</th>
                    <th class="border-b border-b-slate-500 font-medium text-lg">Details</th>
                    <th class="border-b border-b-slate-500 font-medium text-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(word, index) in wordStore.filterWordList()" :key="index" class="body-row bg-slate-50/10">
                    <td class="rounded-l">{{ word.word.word }}</td>
                    <td class="">{{ word.turkish }}</td>
                    <td class="">
                        <button class="btn-details relative bg-slate-50/10 p-2 rounded transition left-2 hover:bg-slate-50/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="bi bi-eye-fill fill-white"
                                viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path
                                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>
                    </td>
                    <td class="rounded-r">
                        <button class="action-edit-btn bg-slate-50/10 p-2 rounded transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                class="bi bi-pencil-fill fill-white" viewBox="0 0 16 16">
                                <path
                                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                            </svg>
                        </button>
                        <button class="action-delete-btn bg-slate-50/10 p-2 rounded transition ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                class="bi bi-trash fill-white" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useWordStore } from "../store/word.js";

const wordStore = useWordStore();

onMounted(() => {
    wordStore.getWordList();
});
</script>

<style scoped>
.table {
    border-collapse: separate !important;
    border-spacing: 0 1rem !important;
}

.table th {
    padding: .75rem 1rem !important;
    margin: 1rem !important;
}

.table td {
    padding: .5rem 1rem !important;
    margin: 1rem !important;
    cursor: pointer;
}

.body-row {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
    margin: 1rem !important;
    transition: all .3s;
}

.body-row:hover {
    transform: scale(1.01) !important;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
}

.scrollable-table {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 40rem;
}

.scrollable-table::-webkit-scrollbar {
    width: 6px;
}

.scrollable-table::-webkit-scrollbar-track {
    background-color: #1e293b;
}

.scrollable-table::-webkit-scrollbar-thumb {
    background-color: #64748b;
    border-radius: 4px;
}

.scrollable-table::-webkit-scrollbar-thumb:hover {
    background-color: #64748b;
}

.btn-details:hover svg {
    fill: #34d399;
}

.action-edit-btn:hover svg {
    fill: #38bdf8;
}
.action-delete-btn:hover svg {
    fill: #f87171;
}
</style>