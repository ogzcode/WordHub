<template>
  <div class="relative">
    <router-view />
    <Toast />
  </div>
</template>

<script setup>
import { supabase } from "./supabase.js";
import { ref, onMounted } from "vue";
import { useAuthStore } from "./store/auth.js";
import { useRouter } from "vue-router";
import Toast from "./components/Toast.vue";

const store = useAuthStore();
const router = useRouter();

onMounted(() => {
  supabase.auth.onAuthStateChange((_, _session) => {
    store.setSession(_session);
    store.setUser(_session?.user);

    if (_session?.user) {
      router.push("/dashboard");
    }
    else {
      router.push("/login");
    }
  })
})

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Comfortaa', sans-serif;
}
</style>
