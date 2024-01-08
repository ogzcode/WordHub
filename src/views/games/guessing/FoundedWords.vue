<template>
    <div class="col-span-1 border border-zinc-300 rounded-md">
        <h1 class="text-center py-4 text-2xl font-semibold tracking-wide text-zinc-700 border-b border-zinc-200">Found
            Words
        </h1>
        <template v-if="props.foundWords.length > 0">
            <ul class="flex flex-wrap gap-4 p-4">
                <li v-for="word in props.foundWords"
                    class=" text-base leading-none px-4 py-1 pb-2 bg-teal-500 text-white rounded-full">{{ word }}</li>
            </ul>
        </template>
        <template v-else>
            <div class="flex justify-center items-center mt-4">
                <span class="text-xl text-zinc-500">No words found yet</span>
            </div>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    foundWords: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped></style>