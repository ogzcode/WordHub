<template>
    <div class="bg-white min-h-screen overflow-hidden flex">
        <SideNav />
        <router-view />
    </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";
import SideNav from "./sidenav/SideNav.vue";

</script>

<style scoped>
</style>