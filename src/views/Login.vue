<template>
    <div class="bg-slate-800 min-h-screen flex justify-center items-center">
        <div class="bg-slate-900 w-1/3 py-10 rounded-md shadow-lg">
            <h1 class="text-white text-center text-3xl mb-10">Login with Email</h1>
            <form @submit.prevent="onSubmit">
                <div class="text-center">
                    <input v-model="email" class="w-1/2 mx-auto mb-5 py-2 px-4 outline-0 rounded text-slate-900"
                        type="email" id="email" placeholder="Email" required />
                </div>
                <div class="text-center">
                    <input v-model="password" class="w-1/2 mx-auto mb-5 py-2 px-4 outline-0 rounded text-slate-900"
                        type="password" id="password" placeholder="Password" required />
                </div>
                <div class="text-center">
                    <button class="text-white bg-emerald-500 w-1/4 rounded py-2 hover:bg-emerald-600"
                        type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const email = ref("");
const password = ref("");

function onSubmit() {
    authStore.login(email.value, password.value);
}

</script>

<style scoped></style>