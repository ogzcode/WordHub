<template>
    <div class="grid grid-cols-2 gap-x-16 gap-y-8">
        <template v-for="(word, i) in props.otherWordOptions" :key="i">
            <button @click="$emit('guess', word)"
                class="flex justify-center items-center border-2 text-white border-white rounded-lg py-2 text-center hover:text-indigo-500 hover:bg-white">
                <template v-if="props.guessedWord === word.word">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </template>
                <p class="text-2xl font-semibold ml-2">{{ word.word }}</p>
            </button>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    otherWordOptions: {
        type: Array,
        required: true
    },
    guessedWord: {
        type: String,
        required: true
    }
});

const emits = defineEmits(['guess']);

</script>

<style scoped></style>