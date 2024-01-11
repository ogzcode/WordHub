<template>
    <div class="flex items-center justify-center flex-col h-full text-center border-2 border-indigo-500 rounded-xl px-8">
        <img :src="huntSVG" alt="guess" class="h-80 w-80 mx-auto mb-12" />
        <p class="text-3xl font-bold text-zinc-700 mb-4">Guess the missing word in a sentence.
        </p>
        <p class="text-zinc-600 mb-8">
            Word Hunting is a fun and challenging word game that will help you improve your English skills. In Word
            Fill-In, you will be presented with a sentence with one word missing. You must choose the word that best
            completes the sentence.

            Word Fill-In is a great way to improve your vocabulary, reading comprehension, and grammar. It's also a lot
            of fun!
        </p>
        <button @click="$emit('startGame')"
            class="border-2 border-indigo-500 text-indigo-600 font-semibold transition w-1/2 py-2 rounded-md hover:bg-indigo-500 hover:text-white">
            Start Game
        </button>
    </div>
</template>

<script setup>
import huntSVG from "../../../../assets/hunt.svg";

const emits = defineEmits(['startGame']);
</script>

<style scoped></style>