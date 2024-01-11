<template>
    <div class="bg-white h-screen w-full overflow-y-auto">
        <Header header-title="Word Guessing Game" :search-visible="false" />
        <div class="h-[calc(100vh-72px)] p-16">
            <template v-if="selectedWord">
                <div class="bg-sky-500 rounded-xl p-8 h-full">
                    <GameHeader @startGame="handleStartGame" :score="score" :health="health" />

                    <div class="h-full flex flex-col justify-center">
                        <ShuffledWord :shuffledWord="shuffledWord" />
                        <GuessedWord :guess="guess" />
                        <Keyboard @keyboardKeyClick="handleAdd" />

                        <div class="text-center mt-4 font-semibold tracking-wide transition">
                            <button @click="guessWord" class="bg-white text-sky-500 px-16 py-2 mr-6 rounded-md">
                                Guess
                            </button>

                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <Start @startGame="handleStartGame" />
            </template>
        </div>

        <Dialog header-title="Guessing" :show="showDialog" submit-text="Next" 
            :submit-type="dialogType"
            @submit="handleStartGame" :cancel-show="false"
            @close="dialogType === 'danger' ? handleDialog(false) : () => { }" 
            :footer-show="dialogType !== 'danger'">
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
import { ref, onMounted, watch } from 'vue';
import { useWordStore } from '../../../store/word';
import { useToastStore } from '../../../store/toast';
import Header from '../../main/dashboard/components/Header.vue';
import Keyboard from './components/Keyboard.vue';
import ShuffledWord from './components/ShuffledWord.vue';
import GuessedWord from './components/GuessedWord.vue';
import Dialog from '../../../components/Dialog.vue';
import Start from "./components/Start.vue"
import GameHeader from './components/GameHeader.vue';

import success from "../../../assets/success.png";
import declined from "../../../assets/declined.png";

const wordStore = useWordStore();
const toastStore = useToastStore();

const shuffledWord = ref("");
const selectedWord = ref("");
const guess = ref("");
const foundWords = ref([]);
const health = ref(3);
const score = ref(0);

const showDialog = ref(false);
const dialogType = ref(null);

const handleDialog = (value, type = null) => {
    showDialog.value = value;
    dialogType.value = type;
};

onMounted(() => {
    wordStore.fetchAllWords();
});

watch(() => health.value, (value) => {
    if (value === 0) {
        toastStore.showToast("error", "You lost the game. Game Restart");
        health.value = 3;
        score.value = 0;
        foundWords.value = [];
        shuffledWord.value = "";
        selectedWord.value = "";
        guess.value = "";
        handleStartGame();
        handleDialog(false);
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        guess.value = guess.value.slice(0, -1);
    }
});

function guessWord() {
    if (selectedWord.value === guess.value) {
        handleDialog(true, "success");
        score.value += 10;
    } else {
        handleDialog(true, "danger");
        health.value -= 1;
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
  
<style scoped>
.next-btn:hover {
    transform: scale(.95);
}
</style>
  