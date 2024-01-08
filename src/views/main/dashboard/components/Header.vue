<template>
    <div class="h-[72px] border-b border-slate-200 flex items-center justify-between px-6">
        <h1 class="text-2xl text-slate-800 font-semibold">{{ props.headerTitle }}</h1>
        <div class="relative" v-if="props.searchVisible">
            <input :placeholder="props.inputPlaceholder" type="text"
                class="border-rose-400 border text-base px-6 py-2 outline-none rounded-full w-[360px] text-zinc-700"
                :value="props.searchValue" @input="handleChange" @keyup.enter="$emit('onKeyEnter')"    
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-search absolute top-1/2 transform -translate-y-1/2 right-6 text-rose-700" viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    searchValue: {
        type: String,
        default: '',
    },
    headerTitle: {
        type: String,
        default: '',
    },
    inputPlaceholder: {
        type: String,
        default: '',
    },
    searchVisible: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(['update:updateSearchValue', "onKeyEnter"]);

const handleChange = (e) => {
    emit('update:updateSearchValue', e.target.value);
};

</script>

<style scoped></style>

