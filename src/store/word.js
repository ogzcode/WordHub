import { defineStore } from "pinia";
import { supabase } from "../supabase.js";
import { ref, watch } from "vue";

export const useWordStore = defineStore("word", () => {
    const wordList = ref([]);
    const word = ref(null);
    const newWord = ref(null);
    const turkishWord = ref(null);
    const filterText = ref(null);

    const setFilterText = (text) => {
        filterText.value = text;
    };    

    const setTurkishWord = (word) => {
        turkishWord.value = word;
    };

    const setNewWord = (word) => {
        newWord.value = word;
    };

    const deleteDef = (meaningIndex, defIndex) => {
        const updatedWord = { ...newWord.value };
        updatedWord.meanings[meaningIndex].definitions.splice(defIndex, 1);
        newWord.value = updatedWord;
    }

    const filterWordList = () => {
        if (filterText.value) {
            return wordList.value.filter((word) => {
                return word.word.word.toLowerCase().includes(filterText.value.toLowerCase());
            });
        }
        else {
            return wordList.value;
        }
    };

    const getWordDetails = (id) => {
        const selectedWord =  wordList.value.find((word) => {
            return word.id === id;
        });

        console.log(selectedWord.word.meanings);

        return selectedWord.word.meanings;
    };

    watch(filterText, () => {
        filterWordList();
    });

    async function getWordList() {
        try {
            const { data, error } = await supabase.from("word").select("*");

            if (error) throw error;

            wordList.value = data;
        }
        catch (error) {
            throw error;
        }
    }

    async function insertWord(user_id) {
        try {
            const { data, error } = await supabase.from("word").insert(
                {
                    word: newWord.value,
                    turkish: turkishWord.value,
                    user_id: user_id,
                }
            );

            if (error) throw error;

            newWord.value = null;
            turkishWord.value = null;
            word.value = null;

            getWordList();
        }
        catch (error) {
            throw error;
        }
    }
    return {
        wordList,
        word,
        newWord,
        turkishWord,
        filterText,
        setFilterText,
        filterWordList,
        deleteDef,
        setTurkishWord,
        setNewWord,
        getWordDetails,
        getWordList,
        insertWord
    };
});