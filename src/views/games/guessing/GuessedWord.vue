<template>
    <div class="text-center mb-16 bg-rose-50 py-6 rounded-lg">
        <span class="border-full bg-rose-500 font-bold text-xl tracking-wide text-white uppercase px-6 py-2 rounded-full">
            {{ guess || "Guess Words" }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    guess: {
        type: String,
        required: true,
    },
})
</script>