<template>
    <li class="mb-4">
        <router-link :to="props.to"
            class="px-4 py-3 rounded-lg w-full block text-slate-700 font-semibold text-base hover:bg-rose-50 hover:text-rose-600">{{ props.label }}</router-link>
    </li>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>
