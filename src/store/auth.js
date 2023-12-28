import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const user = ref(null);
    const session = ref(null);

    const setSession = (newSession) => {
        session.value = newSession.session;
        user.value = newSession?.user;
    };

    const setUser = (newUser) => {
        user.value = newUser;
    }

    return {
        user,
        session,
        setSession,
        setUser,
    };
});