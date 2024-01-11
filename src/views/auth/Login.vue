<template>
    <div class="min-h-screen flex justify-center items-center">
        <div class="">
            <div class="flex items-center justify-center gap-x-4 mb-8">
                <img src="../../assets/logo.png" alt="logo" class="w-[64px] h-[64px]" />
                <h1 class="text-rose-600 text-4xl font-bold">Word <span
                        class="bg-rose-500 text-white rounded-md px-2 pt-1">hub</span></h1>
            </div>
            <div class="flex items-center justify-center mt-4">
                <button @click="tab = 'login'" class="flex-1 py-4 font-bold transition"
                    :class="{ 'bg-rose-600 text-white': tab === 'login', 'text-zinc-600 hover:text-zinc-500': tab !== 'login' }">Login</button>
                <button @click="tab = 'signup'"
                    :class="{ 'bg-slate-900 text-white': tab === 'signup', 'text-zinc-600 hover:text-zinc-500': tab !== 'signup' }"
                    class="flex-1 py-4  transition">Signup</button>
            </div>
            <div v-if="tab === 'login'" class="bg-rose-600 w-[560px] py-16 px-8  shadow-lg">
                <h1 class="text-white text-center text-3xl mb-6 tracking-wide font-semibold">Login</h1>
                <FormWrapper :routingName="'Signup'" :submitText="'Login'"
                    @onSubmit="onLoginSubmit" />
            </div>
            <div v-if="tab === 'signup'" class="bg-slate-900 w-[560px] py-16 px-8 shadow-lg">
                <h1 class="text-white text-center text-3xl mb-6 tracking-wide font-semibold">SignUp</h1>
                <FormWrapper :routingName="'Login'" :submitText="'SignUp'"
                    @onSubmit="onSignupSubmit" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../store/auth";
import { login, signup } from "../../services/api/auth";
import FormWrapper from "./FormWrapper.vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const route = useRouter();

const tab = ref("login")

function onLoginSubmit({ email, password }) {
    login(email, password)
        .then((res) => {
            authStore.setUser(res.data.user);
            route.push("/dashboard");
        })
        .catch((err) => {
            console.log(err);
        });
}

function onSignupSubmit({ email, password }) {
    signup(email, password)
        .then((res) => {
            authStore.setUser(res.data.user);
            route.push("/dashboard");
        })
        .catch((err) => {
            console.log(err);
        });

}
</script>

<style scoped></style>