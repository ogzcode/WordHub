<template>
    <div class="max-h-[480px] flex flex-col gap-y-4 pr-2 overflow-y-scroll">
        <template v-for="(mean, index) in wordStore.getSelectedWordDetails" :key="index">
            <div class="px-6 py-4 border border-slate-300 rounded-md">
                <h1 class="text-lg font-semibold text-slate-600">{{ mean.partOfSpeech }}</h1>
                <div class="mt-4">
                    <template v-for="(def, j) in mean.definitions" :key="j">
                        <DefinitionItem :definition="def" />
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { useWordStore } from '../../../../store/word';
import DefinitionItem from '../../dashboard/components/DefinitionItem.vue';

const wordStore = useWordStore();

</script>

<style scoped></style>