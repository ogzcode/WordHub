import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore("toast", () => {
    const show = ref(false)
    const message = ref('')
    const type = ref('success');


    const showToast = (toastType, toastMessage) => {
        if (show.value) return;

        show.value = true
        message.value = toastMessage
        type.value = toastType
    }

    const hideToast = () => {
        show.value = false
        message.value = ''
        type.value = 'success'
    }

    const getToastStyle = () => {
        switch (type.value) {
            case 'success':
                return 'bg-emerald-50 border-2 border-emerald-300 text-emerald-700 shadow-emerald-100';
            case 'error':
                return 'bg-red-50 border-2 border-red-300 text-red-700 shadow-red-100';
            case 'warning':
                return 'bg-amber-50 border-2 border-amber-300 text-amber-700 shadow-amber-100';
            case 'info':
                return 'bg-indigo-50 border-2 border-indigo-300 text-indigo-700 shadow-indigo-100';
            default:
                return 'bg-green-50 border-2 border-green-300 text-green-700 shadow-green-100';
        }
    };
    

    return {
        show,
        message,
        type,
        showToast,
        hideToast,
        getToastStyle
    }
})