<template>
    <div class="mt-8 flex gap-x-4 w-full">
        <button @click="$emit('onShowDialog', true, props.wordId, 'example')"
            class="flex-1 flex justify-center items-center gap-x-4 border rounded py-2 text-indigo-500 border-indigo-400 transition active:border-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-vector-pen"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
            </svg>
            <span class="leading-none pb-1">Example</span>
        </button>
        <button @click="$emit('onShowDialog', true, props.wordId, 'details')"
            class="flex-1 flex justify-center items-center gap-x-4 border rounded py-2 text-sky-500 border-sky-400 transition active:border-sky-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-fill"
                viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
            <span class="leading-none pb-1">Details</span>
        </button>
    </div>
</template>

<script setup>

const emits = defineEmits(["onShowDialog"]);

const props = defineProps({
    wordId: {
        type: Number,
        required: true,
    },
});
</script>

<style scoped></style>