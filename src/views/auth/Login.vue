<template>
    <div class="bg-slate-800 min-h-screen flex justify-center items-center">
        <div class="bg-slate-900 w-[480px] py-8 rounded-md shadow-lg">
            <h1 class="text-white text-center text-3xl mb-6 tracking-wide font-semibold">Login</h1>
            <FormWrapper :routingName="'Signup'" :routingText="'Don t have an account? Login'" :submitText="'Login'"
                @onSubmit="onSubmit" />
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../store/auth";
import { login } from "../../services/api/auth";
import FormWrapper from "./FormWrapper.vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const route = useRouter();

function onSubmit({ email, password }) {
    login(email, password)
        .then((res) => {
            authStore.setUser(res.data.user);
            route.push({ name: "Dashboard" });
        })
        .catch((err) => {
            console.log(err);
        });
}

</script>

<style scoped></style>