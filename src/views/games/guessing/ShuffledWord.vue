<template>
    <div class="border-2 border-rose-400 mb-16 flex justify-center items-center flex-wrap gap-4 h-[10rem] rounded-md">
        <span v-for="letter in props.shuffledWord"
            class="bg-rose-100 text-rose-700 w-[48px] h-[48px] rounded-md flex justify-center items-center uppercase">{{
                letter
            }}</span>
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