<template>
    <nav class="border-b border-b-slate-500 flex justify-between py-4 px-12">
        <h1 class="text-3xl font-medium text-white">Vocab<span
                class="px-2 bg-orange-500 text-xl rounded ml-2">hub</span></h1>
        <button @click="logout" class="logout-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi bi-box-arrow-right fill-white"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
        </button>
    </nav>
</template>

<script setup>
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();

function logout() {
    auth.logout();
}
</script>

<style scoped>
.logout-btn:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
}
</style>