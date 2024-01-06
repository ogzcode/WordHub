<template>
    <div class="border border-slate-300 rounded-xl overflow-y-auto h-full">
        <div class=" flex items-start justify-between px-6 py-4 border-b border-slate-300">
            <div class="flex items-center gap-x-4">
                <h1 class="text-3xl font-semibold text-slate-700 leading-none">{{ props.data.word }}</h1>
                <p class="text-base text-slate-600 italic">{{ getPhonetics().text }}</p>
            </div>
            <div class="flex items-center justify-center gap-x-4">
                <AudioBtn v-if="getPhonetics().audio !== ''" :audio="getPhonetics().audio" />
                <button @click="handleAdd"
                    class="border h-[40px] px-8 border-rose-500 rounded font-semibold tracking-wide text-rose-700 transition hover:text-white hover:bg-rose-500">Save</button>
            </div>
        </div>
        <div>
            <template v-for="(mean, index) in props.data.meanings" :key="index">
                <div class="px-6 py-4 border-b border-slate-300">
                    <h1 class="text-lg font-semibold text-slate-600">{{ mean.partOfSpeech }}</h1>
                    <div class="mt-4">
                        <template v-for="(def, j) in mean.definitions" :key="j">
                            <DefinitionItem :definition="def" />
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
  
<script setup>
import { useAuthStore } from '../../../../store/auth';
import DefinitionItem from './DefinitionItem.vue';
import AudioBtn from '../../components/AudioBtn.vue';
import { useWordStore } from '../../../../store/word';

const authStore = useAuthStore();
const wordStore = useWordStore();

const props = defineProps({
    data: {
        type: Object,
    },
});

const handleAdd = () => {
    const user_id = authStore.user?.id;
    const word = props.data.word;
    const phonetics = getPhonetics();
    const details = filterDetails(props.data.meanings);
    const req = {
        user_id,
        word,
        phonetics,
        details,
        sentences: [],
    };
    
    wordStore.createNewWord(req);
};

const getPhonetics = () => {
    if (props.data.phonetics.length === 0) {
        return {
            text: "",
            audio: "",
        };
    }

    const filtered = props.data.phonetics.filter((item) => item.audio !== "")[0];
    
    if (!filtered) {
        return {
            text: props.data.phonetics[0].text,
            audio: "",
        };
    }

    return {
        text: filtered.text,
        audio: filtered.audio,
    }
};

const filterDetails = (details) => {
    return details.map((item) => {
        return {
            partOfSpeech: item.partOfSpeech,
            definitions: item.definitions.map((def) => {
                return {
                    definition: def.definition,
                    example: def.example,
                };
            }),
        };
    });
};
</script>
  
<style scoped></style>

  