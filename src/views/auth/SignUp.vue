<template>
    <div class="bg-slate-800 min-h-screen flex justify-center items-center">
        <div class="bg-slate-900 w-[480px] py-8 rounded-md shadow-lg">
            <h1 class="text-white text-center text-3xl mb-6 tracking-wide font-semibold">SignUp</h1>
            <FormWrapper :routingName="'Login'" :routingText="'Already have an account? Login'" :submitText="'SignUp'"
                @onSubmit="onSubmit" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from '../../store/auth';
import { signup } from '../../services/api/auth';
import FormWrapper from "./FormWrapper.vue";

const authStore = useAuthStore();
const route = useRouter();

const email = ref("");
const password = ref("");

function onSubmit() {
    signup(email.value, password.value)
        .then((res) => {
            authStore.setUser(res.data.user);
            route.push({ name: "Dashboard" });
        })
        .catch((err) => {
            console.log(err);
        });

}
</script>

<style scoped>
</style>