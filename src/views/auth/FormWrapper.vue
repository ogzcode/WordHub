<template>
    <form @submit.prevent="handleSubmit" class="px-8">
        <Input :value="email" v-model:model-value="email" type="email" placeholder="Email" label="Email" />
        <Input :value="password" v-model:model-value="password" :type="showPassword ? 'text' : 'password'"
            placeholder="Password" label="Password">
        <template #icon>
            <button @click="handleShow" class="absolute right-3 top-9 cursor-pointer text-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill"
                    viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
            </button>
        </template>
        <template #error>
            <p class="text-orange-500 text-xs mt-1">(Password length must be more than 6)</p>
        </template>
        </Input>
        <div class="text-center">
            <button class="text-white bg-emerald-500 w-1/2 rounded py-2 hover:bg-emerald-600" type="submit">{{
                props.submitText }}</button>
        </div>
        <div class="text-center text-xs mt-8">
            <p>
                <router-link class="text-white" :to="{ name: props.routingName }">{{ props.routingText }}</router-link>
            </p>
        </div>
    </form>
</template>

<script setup>
import Input from '../../components/Input.vue';
import { ref } from "vue";

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const emits = defineEmits(["onSubmit"]);

const props = defineProps({
    routingName: {
        type: String,
        required: true,
    },
    routingText: {
        type: String,
        required: true,
    },
    submitText: {
        type: String,
        required: true,
    },
});

const handleShow = () => {
    showPassword.value = !showPassword.value;
}

const handleSubmit = () => {
    emits("onSubmit", {
        email: email.value,
        password: password.value,
    });
}
</script>

<style scoped></style>