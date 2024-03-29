<template>
    <Transition name="dialog-wrapper">
        <div class="flex justify-center items-center fixed top-0 left-0 min-h-screen bg-gray-500/20 min-w-full overflow-hidden z-50"
            v-if="props.show">
            <div class="bg-white shadow-lg max-w-[640px] min-w-[480px] rounded-lg overflow-hidden">
                <div class="py-4 px-6 flex justify-between items-center border-b border-slate-200">
                    <p class="text-xl tracking-wide font-medium text-slate-800">{{ props.headerTitle }}</p>
                    <button @click="handleClose">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            class="bi bi-x fill-slate-800" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <div class="py-4 px-6">
                    <slot name="body"></slot>
                </div>
                <div v-if="footerShow" class="flex justify-end gap-x-4 py-4 px-6">
                    <button v-if="props.cancelShow"
                        class="tracking-wide font-normal text-base px-3 py-1 border border-slate-400 text-slate-800 rounded"
                        @click="handleClose">{{ props.cancelText }}</button>
                    <button v-if="props.submitShow"
                        class="text-base px-3 font-semibold py-1 rounded disabled:opacity-60 disabled:cursor-not-allowed"
                        :class="[buttonType[props.submitType]]" @click="props.onSubmit" :disabled="submitIsDisabled">
                        {{ props.submitText }}
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { watch, ref } from 'vue';


const buttonType = {
    primary: 'bg-sky-500 text-white',
    secondary: 'bg-slate-800 text-white',
    danger: 'bg-red-700 text-white',
    warning: 'bg-yellow-700 text-white',
    success: 'bg-emerald-500 text-white',
    info: 'bg-sky-700 text-white',
    light: 'bg-white text-slate-800',
    dark: 'bg-slate-800 text-white',
    indigo: 'bg-indigo-500 text-white',
}

const props = defineProps({
    headerTitle: {
        type: String,
        default: 'Dialog'
    },
    show: {
        type: Boolean,
        default: false
    },
    submitShow: {
        type: Boolean,
        default: true
    },
    submitText: {
        type: String,
        default: 'Accept'
    },
    submitType: {
        type: String,
        default: 'primary'
    },
    submitIsDisabled: {
        type: Boolean,
        default: false
    },
    cancelText: {
        type: String,
        default: 'Cancel'
    },
    cancelShow: {
        type: Boolean,
        default: true
    },
    footerShow: {
        type: Boolean,
        default: true
    },
    onSubmit: {
        type: Function,
        default: () => { }
    }
});

const submitIsDisabled = ref(props.submitIsDisabled);

watch(() => props.submitIsDisabled, (value) => {
    submitIsDisabled.value = value;
});


const emits = defineEmits(['close']);

const handleClose = () => {
    emits('close', false);
}

</script>

<style scoped>
.dialog-wrapper-enter-active,
.dialog-wrapper-leave-active {
    transition: opacity 0.3s ease;
}

.dialog-wrapper-enter-from,
.dialog-wrapper-leave-to {
    opacity: 0;
}

.dialog-wrapper-enter-to,
.dialog-wrapper-leave-from {
    opacity: 1;
}
</style>