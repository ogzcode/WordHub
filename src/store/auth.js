import { useRouter } from "vue-router";
import { ref } from "vue";
import { defineStore } from "pinia";

import { supabase } from "../supabase.js";

export const useAuthStore = defineStore("auth", () => {
    const router = useRouter();
    const user = ref(null);
    const session = ref(null);

    const setSession = (newSession) => {
        session.value = newSession;
        user.value = newSession?.user;
    };

    async function login(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (error) throw error;

            console.log(data);
            user.value = data.user;
            router.push("/");
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async function logout() {
        try {
            await supabase.auth.signOut();
            user.value = null;
            session.value = null;
            router.push("/login");
        }
        catch (error) {
            throw error;
        }
    }

    return {
        user,
        session,
        setSession,
        login,
        logout,
    };
});