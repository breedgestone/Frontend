<template>
    <div>
        <header>🌐 Breedgestone</header>
        <main>
            <Navbar />
            <router-view />
        </main>
        <footer>© 2025 Breedgestone</footer>
    </div>
</template>
<script setup>
import Navbar from '@/components/Layout/Navbar.vue';

</script>
