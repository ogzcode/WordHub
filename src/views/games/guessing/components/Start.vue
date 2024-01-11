<template>
    <div class="flex flex-col justify-center items-center h-full text-center border-2 border-sky-500 rounded-xl px-8">
        <img :src="guessSVG" alt="guess" class="h-80 w-80 mx-auto mb-12" />
        <p class="text-3xl font-bold text-zinc-700 mb-4">Guess the scrambled words in your vocabulary.
        </p>
        <p class="text-zinc-600 mb-8">
            Word Jumble is a challenging word game that will test your vocabulary and problem-solving
            skills. In
            Word Jumble, you will be presented with a scrambled word from your vocabulary. You must
            unscramble
            the word to win.

            Word Jumble is a great way to improve your vocabulary and learn new words. It's also a lot of
            fun!
        </p>
        <button @click="$emit('startGame')"
            class="border-2 border-sky-500 text-sky-600 font-semibold transition w-1/2 py-2 rounded-md hover:bg-sky-500 hover:text-white">
            Start Game
        </button>
    </div>
</template>

<script setup>
import guessSVG from "../../../../assets/guess.svg";

const emits = defineEmits(['startGame']);
</script>

<style scoped></style>