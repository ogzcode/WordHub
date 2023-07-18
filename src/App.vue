<script setup>
import { supabase } from "./supabase.js";
import { ref, onMounted } from "vue";
import { useAuthStore } from "./store/auth.js";

const store = useAuthStore();

onMounted(async () => {
  await supabase.auth.getSession().then((session) => {
    store.setSession(session);
  });

  await supabase.auth.onAuthStateChange((_, _session) => {
    store.setSession(_session);
  })
});
</script>

<template>
  <router-view />
</template>

<style scoped></style>
