<template>
    <div class="flex justify-center items-center flex-col">
        <div v-for="row in keyboardLayout" :key="row">
            <button v-for="key in row" :key="key" @click="onKeyClick(key)"
                class="bg-zinc-200 text-zinc-600 w-[40px] h-[40px] rounded-md mr-4 mb-4 focus:outline-none focus:bg-gray-300">
                {{ key }}
            </button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const keyboardLayout = ref([
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]);

const emit = defineEmits(['keyboardKeyClick']);

const onKeyClick = (key) => {
    emit('keyboardKeyClick', key.toLowerCase());
};
</script>
  
<style scoped>
</style>
  