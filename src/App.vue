<template>
  <router-view />
</template>

<script setup>
import { supabase } from "./supabase.js";
import { ref, onMounted } from "vue";
import { useAuthStore } from "./store/auth.js";

const store = useAuthStore();

onMounted(() => {
  supabase.auth.onAuthStateChange((_, _session) => {
    store.setSession(_session);
  })

  supabase.auth.getSession().then((session) => {
    store.setSession(session.data);
  })
})

/*
Aktif link ler için stil değiştirilecek

*/
</script>


<style scoped></style>
