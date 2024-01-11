<template>
    <nav class="w-[360px] bg-white min-h-screen md:relative absolute z-20 border-r border-slate-200" :class="{ 'closed': !show}">
        <h1 class="text-rose-600 mb-8 h-[72px] flex items-center px-6 text-3xl font-bold border-b border-slate-200">
            <img :src="logo" alt="logo" class="w-[40px] h-[40px] mr-2" />
            <span>Word <span class="bg-rose-500 text-white rounded-md px-2 pt-1">hub</span></span>
        </h1>
        <ul class="px-6">
            <Link to="/" label="Dashboard" />
            <Link to="/saved" label="Saved Words" />
            <Link to="/guessing" label="Word Jumble" />
            <Link to="/hunt" label="Word Hunting" />
        </ul>
        <button
            @click="toggle"
            class="absolute left-full top-2 w-[40px] h-[40px] bg-rose-600 text-white rounded-full ml-2 flex justify-center items-center menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </button>
        <div class="absolute bottom-8 w-full px-6">
            <button @click="handleLogout" class="border border-rose-600 rounded text-rose-600 py-2 w-full flex gap-x-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                    <path fill-rule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
                <span class="font-semibold leading-none">Logout</span>
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import Link from './components/Link.vue';
import { logout } from '../../services/api/auth';
import logo from "../../assets/logo.png";

const show = ref(true);

const toggle = () => {
    show.value = !show.value;
}


window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        show.value = true;
    }
    else {
        show.value = false;
    }
})

const handleLogout = () => {
    logout()
        .then((res) => {
            //console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

</script>

<style scoped>

nav {
    transition: transform 0.3s ease-in-out;
}

.closed {
    transform: translateX(-100%);
}

@media (min-width: 768px) {
    .menu-btn {
        display: none;
    }
}

</style>