<template>
    <div class="mb-8 flex justify-center items-center flex-wrap gap-4 rounded-md">
        <button v-for="letter in props.shuffledWord"
            class="border-4 border-white border-dashed text-white text-2xl font-bold w-[64px] h-[64px] rounded-md flex justify-center items-center uppercase">{{
                letter
            }}</button>
    </div>
</template>

<script setup>
const props = defineProps({
    shuffledWord: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>