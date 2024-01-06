import { defineStore } from "pinia";
import { supabase } from "../supabase.js";
import { computed, ref, watch } from "vue";
import { getWords, createWord, deleteWord, updateSentencesByWordId } from "../services/api/word.js";
import { useToastStore } from "./toast.js";

export const useWordStore = defineStore("word", () => {
    const toastStore = useToastStore();
    const wordList = ref([]);
    const selectedWordId = ref(null);
    const selectedWordSentences = ref([]);
    const searchQuery = ref("");
    const page = ref(1);
    const loading = ref(true);
    
    const pageActionIsDisabled = (action) => {
        if (action === "next") {
            return page.value >= wordList.value.length / 12;
        } else if (action === "prev") {
            return page.value <= 1;
        }
    }


    const handleNextPage = () => {
        if (page.value < wordList.value.length / 12) {
            page.value++;
        }
    }

    const handlePrevPage = () => {
        if (page.value > 1) {
            page.value--;
        }
    }

    const dataToDisplay = computed(() => {
        if (!wordList.value.length) return [];

        const start = (page.value - 1) * 12;
        const end = page.value * 12;
        
        const filteredWords = wordList.value.filter((word) => {
            return word.word.toLowerCase().includes(searchQuery.value.toLowerCase());
        });

        return filteredWords.slice(start, end);
    });

    const setSelectedWordId = (wordId) => {
        selectedWordId.value = wordId;
    }

    const setSearchQuery = (query) => {
        searchQuery.value = query;
    }

    watch(selectedWordId, (newVal) => {
        if (newVal) {
            selectedWordSentences.value = getSelectedWordSentences();
        }
    });

    const fetchAllWords = () => {
        getWords()
            .then((res) => {
                wordList.value = res.data;
                loading.value = false;
            })
            .catch((err) => {
                console.log(err);
                toastStore.showToast("error", "Failed to fetch words");
            });
    }

    const createNewWord = (wordData) => {
        createWord(wordData)
            .then((res) => {
                toastStore.showToast("success", "Word created successfully");
            })
            .catch((err) => {
                console.log(err);
                toastStore.showToast("error", "Failed to create word");
            });
    }

    const updateSentences = (sentences) => {
        updateSentencesByWordId(selectedWordId.value, sentences)
            .then((res) => {
                wordList.value = wordList.value.map((word) => {
                    if (word.id === selectedWordId.value) {
                        word.sentences = sentences;
                    }
                    return word;
                });
                selectedWordSentences.value = sentences;
                //toastStore.showToast("success", "Sentences updated successfully");
            })
            .catch((err) => {
                console.log(err);
                toastStore.showToast("error", "Failed to update sentences");
            });
    }

    const deleteWordById = (wordId) => {
        deleteWord(wordId)
            .then((res) => {
                wordList.value = wordList.value.filter((word) => word.id !== wordId);
                toastStore.showToast("success", "Word deleted successfully");
            })
            .catch((err) => {
                console.log(err);
                toastStore.showToast("error", "Failed to delete word");
            });
    }

    const getSelectedWordSentences = () => {
        const selectedWord = wordList.value.find((word) => word.id === selectedWordId.value);
        return selectedWord ? selectedWord.sentences : [];
    }

    const getSelectedWordDetails = computed(() => {
        return wordList.value.find((word) => word.id === selectedWordId.value).details;
    });

    return {
        wordList,
        selectedWordId,
        getSelectedWordDetails,
        selectedWordSentences,
        searchQuery,
        dataToDisplay,
        page,
        loading,
        handleNextPage,
        handlePrevPage,
        setSearchQuery,
        fetchAllWords,
        createNewWord,
        updateSentences,
        deleteWordById,
        setSelectedWordId,
        getSelectedWordSentences,
        pageActionIsDisabled,
    };
});