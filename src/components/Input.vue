<template>
    <div class="mb-6 relative">
        <label class="text-white text-sm mb-1 block">{{ props.label }}</label>
        <input :value="value" @input="handleChange" class="w-full py-2 px-3 outline-0 rounded text-slate-800"
            :type="props.type" :placeholder="props.placeholder" required />
        <slot name="icon"></slot>
        <slot name="error"></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "text",
    },
    value: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
});

const emits = defineEmits(["update:modelValue"]);

function handleChange(event) {
    emits("update:modelValue", event.target.value);
}

</script>

<style scoped>
input {
    outline: none;
}
</style>