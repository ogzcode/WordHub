<template>
    <div class="bg-white h-screen w-full overflow-y-auto">
        <Header header-title="Word Hunting Game" :search-visible="false" />
        <div class="p-8 h-[calc(100vh-72px)]">
            <button @click="handleStartGame"
                class="bg-sky-500 text-white px-16 py-2 rounded-md hover:bg-sky-600 duration-300">
                {{ selectedWord === '' ? 'Start Game' : 'Next' }}
            </button>

            <div v-if="selectedWord !== ''"
                class="border border-zinc-300 mt-8 p-16 rounded-md h-[85%] flex flex-col justify-around">
                <p class="text-center text-2xl font-semibold py-8 rounded-md border-2 border-rose-300 text-rose-800">{{
                    selectedSentence }}</p>

                <div class="grid grid-cols-2 gap-8">
                    <template v-for="(word, i) in otherWordOptions" :key="i">
                        <button @click="handleGuess(word)" class="border-2 border-zinc-200  rounded-lg p-4 text-center">
                            <p class="text-2xl font-semibold text-zinc-800">{{ word.word }}</p>
                        </button>
                    </template>
                </div>
            </div>
        </div>

        <Dialog header-title="Guessing" :show="showDialog" submit-text="Next" :submit-type="dialogType" @submit="handleStartGame"
            @close="handleDialog(false)" :footer-show="dialogType !== 'danger'">
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
import Dialog from '../../../components/Dialog.vue';
import success from "../../../assets/success.png";
import declined from "../../../assets/declined.png";

const wordStore = useWordStore();

const selectedWord = ref("");
const selectedSentence = ref("");
const otherWordOptions = ref([]);
const showDialog = ref(false);
const dialogType = ref(null);

const handleDialog = (value, type = null) => {
    showDialog.value = value;
    dialogType.value = type;
};

onMounted(() => {
    wordStore.fetchAllWords();
});

const handleGuess = (word) => {
    if (word.word === selectedWord.value.word) {
        handleDialog(true, "success");
    } else {
        handleDialog(true, "danger");
    }
};


const handleStartGame = () => {
    showDialog.value = false;

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
};

</script>
  
<style scoped></style>
  