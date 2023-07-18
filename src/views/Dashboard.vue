<template>
    <div class="bg-slate-800 min-h-screen overflow-hidden">
        <Navbar/>
        <MainHeader/>
        <WordTable/>
    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import MainHeader from "../components/MainHeader.vue";
import WordTable from "../components/WordTable.vue";

</script>

<style scoped></style>