<template>
    <div class="h-4 rounded w-full border-2 border-white relative">
        <span class="timer-fill bg-white" :style="{ width: `${(1 - props.time / timer) * 100}%` }"></span>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    time: {
        type: Number,
        default: 60,
    },
});

const emits = defineEmits(["update:time"]);

const intervalId = ref(null);
const timer = ref(props.time);

const handleTimer = () => {
    if (props.time > 0) {
        emits("update:time", props.time - 1);
    }
};

onMounted(() => {
    intervalId.value = setInterval(handleTimer, 600);
});

onUnmounted(() => {
    clearInterval(intervalId.value);
});
</script>
  
<style scoped>
.timer-fill {
    display: block;
    height: 100%;
    transition: width 0.3s ease-in-out;
}
</style>
  