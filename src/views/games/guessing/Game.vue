<template>
    <div class="bg-white h-screen w-full overflow-y-auto">
        <Header header-title="Word Guessing Game" :search-visible="false" />
        <div class="grid grid-cols-3 gap-x-8 h-[calc(100vh-72px)] p-8">
            <FoundedWords :foundWords="foundWords" />
            <div class="col-span-2 rounded-md">
                <template v-if="selectedWord">
                    <ShuffledWord :shuffledWord="shuffledWord" />
                    <GuessedWord :guess="guess" />
                    <Keyboard @keyboardKeyClick="handleAdd" />

                    <div class="text-center mt-4 font-semibold tracking-wide transition">
                        <button @click="guessWord"
                            class="bg-sky-500 text-white px-16 py-2 mr-6 rounded-md hover:bg-sky-600 duration-300">
                            Guess
                        </button>
                        <button @click="handleStartGame"
                            class="border border-teal-400 text-teal-700 px-16 py-2 rounded-md hover:border-teal-600">
                            Next
                        </button>
                    </div>
                </template>
                <template v-else>
                    <div class="text-center">
                        <button @click="handleStartGame" v-if="!selectedWord"
                            class="border border-indigo-400 text-indigo-800 font-semibold transition w-full py-2 rounded-md hover:bg-indigo-400 hover:text-white">
                            Start Game
                        </button>
                    </div>
                </template>
            </div>
        </div>

        <Dialog header-title="Guessing" :show="showDialog" submit-text="Next" :submit-type="dialogType"
            @submit="handleStartGame" @close="handleDialog(false)" :footer-show="dialogType !== 'danger'">
            <template #body>
                <template v-if="dialogType === 'success'">
                    <div class="flex flex-col justify-center items-center mb-4">
                        <img :src="success" alt="success" class="h-24 w-24" />
                        <p class="text-xl font-semibold text-zinc-700 mt-4">Congratulations! You guessed it right</p>
                    </div>
                </template>
                <template v-else>
                    <div class="flex flex-col justify-center items-center mb-4">
                        <img :src="declined" alt="declined" class="h-24 w-24" />
                        <p class="text-xl font-semibold text-red-600 mt-4">Sorry! You guessed it wrong</p>
                    </div>
                </template>
            </template>
        </Dialog>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useWordStore } from '../../../store/word';
import Header from '../../main/dashboard/components/Header.vue';
import Keyboard from './Keyboard.vue';
import FoundedWords from './FoundedWords.vue';
import ShuffledWord from './ShuffledWord.vue';
import GuessedWord from './GuessedWord.vue';
import Dialog from '../../../components/Dialog.vue';

import success from "../../../assets/success.png";
import declined from "../../../assets/declined.png";

const wordStore = useWordStore();

const shuffledWord = ref("");
const selectedWord = ref("");
const guess = ref("");
const foundWords = ref([]);

const showDialog = ref(false);
const dialogType = ref(null);

const handleDialog = (value, type = null) => {
    showDialog.value = value;
    dialogType.value = type;
};

onMounted(() => {
    wordStore.fetchAllWords();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        guess.value = guess.value.slice(0, -1);
    }
});

function guessWord() {
    if (selectedWord.value === guess.value) {
        handleDialog(true, "success");
    } else {
        handleDialog(true, "danger");
    }
}

function handleStartGame() {
    if (selectedWord.value && dialogType.value === "success") {
        foundWords.value.push(selectedWord.value);
    }
    handleDialog(false);

    guess.value = "";
    const notFoundWords = wordStore.wordList.filter((word) => !foundWords.value.includes(word.word));
    selectedWord.value = notFoundWords[Math.floor(Math.random() * notFoundWords.length)].word;
    shuffledWord.value = selectedWord.value.split("").sort(() => Math.random() - 0.5).join("");
}

const handleAdd = (key) => {
    guess.value += key;
};
</script>
  
<style scoped></style>
  