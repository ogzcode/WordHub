<template>
    <div v-if="showModal" class="modal" tabIndex={-1} @click="handleClickModal">
        <div class="modal-dialog modal-center">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Add New Word</h3>
                    <button type="button" class="btn-close" @click="onClose">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="" class="bi bi-x-lg"
                            viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </button>
                </div>
                <div class="modal-body scrollable">
                    <slot :name="slotName"></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="onClose">
                        Close
                    </button>
                    <button @click="onSave" type="button" class="btn btn-primary">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(["onClose", "onSave"]);

const props = defineProps({
    showModal: Boolean,
    slotName: String
});

const handleClickModal = (e) => {
    if (e.target.classList.contains("modal")) {
        onClose(false);
    }
}

const onClose = () => {
    emit("onClose", false);
}

const onSave = () => {
    emit("onSave");
}

</script>

<style scoped>
.modal {
    font-family: sans-serif;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, .4);
}

.modal-dialog {
    position: relative;
    width: 560px;
    margin: 0 auto;
}

.modal-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modal-content {
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    animation: fadeIn .3s ease-in-out;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f5f9;
    padding: 16px 24px;
}

.modal-title {
    font-size: 24px;
    color: #1e293b;
    letter-spacing: .75px;
}

.modal-body {
    margin: 0px 4px;
    padding: 16px 24px;
    max-height: 600px;
    overflow-y: scroll;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 24px;
    background-color: #f8fafc;
}

.btn {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    padding: 8px 24px;
    font-size: 14px;
    outline: none;
    transition: all .3s ease-in-out;
}

.btn:first-child {
    margin-right: 16px;
}

.btn-primary {
    color: white;
    background-color: #1e293b;
}

.btn-primary:hover {
    background-color: #1a202c;
}

.btn-secondary {
    color: #1e293b;
    background-color: #e2e8f0;
}

.btn-secondary:hover {
    background-color: #cbd5e1;
}

.btn-close {
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    color: #334155;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

.scrollable::-webkit-scrollbar {
    width: 6px;
}

.scrollable::-webkit-scrollbar-track {
    background-color: #fff;
}

.scrollable::-webkit-scrollbar-thumb {
    background-color: #64748b;
    border-radius: 4px;
}

.scrollable::-webkit-scrollbar-thumb:hover {
    background-color: #64748b;
}
</style>