import { supabase } from "../../supabase";
import axios from "axios";

const searchWord = async (word) => {
    return await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
}

const getWords = async () => {
    return await supabase
        .from("words")
        .select("*");
}

const getWord = async (id) => {
    return await supabase
        .from("words")
        .select("*")
        .eq("id", id);
}

const createWord = async (word) => {
    return await supabase
        .from("words")
        .insert(word);
}

const updateWord = async (id, word) => {
    return await supabase
        .from("words")
        .update(word)
        .eq("id", id);
}

const deleteWord = async (id) => {
    return await supabase
        .from("words")
        .delete()
        .eq("id", id);
}

const updateSentencesByWordId = async (id, sentences) => {
    return await supabase
        .from("words")
        .update({
            sentences: sentences
        })
        .eq("id", id);
}

const getTotalWords = async () => {
    return await supabase
        .from("words")
        .select("id", { count: "exact", head: true });
}

const getTotalSentences = async () => {
    return await supabase
        .from("words")
        .select("sentences");
}

const getWordsLastWeek = async () => {
    const currentDate = new Date();
    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    const isoFormattedStartDate = sevenDaysAgo.toISOString();
    const isoFormattedEndDate = currentDate.toISOString();
    return await supabase
        .from("words")
        .select("*")
        .gte("created_at", isoFormattedStartDate)
        .lte("created_at", isoFormattedEndDate);
}


export {
    searchWord,
    getWords,
    getWord,
    createWord,
    updateWord,
    deleteWord,
    updateSentencesByWordId,
    getTotalWords,
    getTotalSentences,
    getWordsLastWeek
};
