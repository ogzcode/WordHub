<template>
    <div class="bg-white h-screen w-full overflow-y-auto">
        <Header header-title="Word Hunting Game" :search-visible="false" />
        <div class="p-16 h-[calc(100vh-72px)]">
            <template v-if="selectedWord === ''">
                <Start @startGame="handleStartGame" />
            </template>
            <template v-else>
                <div class="bg-indigo-600 p-16 rounded-xl flex flex-col justify-around h-full relative">
                    <GameHeader @startGame="handleStartGame" />

                    <p class="text-center text-2xl font-semibold py-8 rounded-md border-2 border-white text-white">
                        {{ selectedSentence }}
                    </p>

                    <Timer v-if="timer > 0" :time="timer" v-model:time="timer" />

                    <BtnOptions :other-word-options="otherWordOptions" :guessed-word="guessedWord" @guess="handleGuess" />
                </div>
            </template>
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
import { ref, onMounted, watch } from 'vue';
import { useWordStore } from '../../../store/word';
import Header from '../../main/dashboard/components/Header.vue';
import Dialog from '../../../components/Dialog.vue';
import success from "../../../assets/success.png";
import declined from "../../../assets/declined.png";
import Start from './components/Start.vue';
import Timer from './components/Timer.vue';
import GameHeader from './components/GameHeader.vue';
import BtnOptions from './components/BtnOptions.vue';

const wordStore = useWordStore();

const selectedWord = ref("");
const selectedSentence = ref("");
const otherWordOptions = ref([]);
const showDialog = ref(false);
const dialogType = ref(null);
const guessedWord = ref("");
const timer = ref(60);

watch(() => timer.value, (value) => {
    if (value === 0) {
        setTimeout(() => {
            handleStartGame();
        }, 1000);
    }
});

const handleDialog = (value, type = null) => {
    showDialog.value = value;
    dialogType.value = type;
};

onMounted(() => {
    wordStore.fetchAllWords();
});

const handleGuess = (word) => {
    if (word.word === selectedWord.value.word) {
        guessedWord.value = word.word;
        setTimeout(() => {
            handleStartGame();
        }, 1000);
    } else {
        handleDialog(true, "danger");
    }
};


const handleStartGame = () => {
    
    //Randomly select a word from the word list
    selectedWord.value = wordStore.wordList[Math.floor(Math.random() * wordStore.wordList.length)];
    
    //Randomly select a sentence from the selected word
    const sentences = selectedWord.value.sentences;
    let selected = sentences[Math.floor(Math.random() * sentences.length)];
    
    //Replace the selected word with a blank
    selectedSentence.value = selected.replace(selectedWord.value.word, "_____");
    
    //Randomly select 3 other words from the word list
    let otherWords = [];
    while (otherWords.length < 3) {
        let word = wordStore.wordList[Math.floor(Math.random() * wordStore.wordList.length)];
        if (word !== selectedWord.value && !otherWords.includes(word)) {
            otherWords.push(word);
        }
    }
    
    //Add the selected word to the list of other words
    otherWords.push(selectedWord.value);
    
    //Shuffle the list of words
    otherWords.sort(() => Math.random() - 0.5);
    
    //Set the list of other words
    otherWordOptions.value = otherWords;
    
    showDialog.value = false;
    timer.value = 60;
    guessedWord.value = "";
};

</script>
  
<style scoped>
</style>
  