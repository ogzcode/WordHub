import { supabase } from "../../supabase";

const login = async (email, password) => {
    return await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
}

const signup = async (email, password) => {
    return await supabase.auth.signUp({
        email: email,
        password: password
    });
}

const logout = async () => {
    return await supabase.auth.signOut();
}

const getUser = async () => {
    return await supabase.auth.getUser();
}

export {
    login,
    signup,
    logout,
};