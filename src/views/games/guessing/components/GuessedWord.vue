<template>
    <div class="text-center mb-16">
        <template v-if="splitGuess.length !== 0">
            <div class="flex justify-center gap-x-4">
                <button v-for="(letter, i) in splitGuess" :key="i"
                    class="text-sky-500 bg-white text-xl font-bold w-[56px] h-[56px] rounded-md flex justify-center items-center uppercase">
                    {{
                        letter
                    }}
                </button>
            </div>
        </template>
        <template v-else>
            <p class="text-2xl font-semibold text-white border-2 border-white inline-block px-4 py-2 rounded-md">Guess the word</p>
        </template>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps({
    guess: {
        type: String,
        required: true,
    },
});

const splitGuess = computed(() => props.guess.split(''));
</script>
  