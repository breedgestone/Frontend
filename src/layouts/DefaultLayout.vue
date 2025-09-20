<template>
  <div class="flex flex-col min-h-screen">
    <div class="sticky top-0 z-50">
      <Navbar />
    </div>

    <!-- Main Content -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Layout/Footer.vue'
import Navbar from '@/components/Layout/Navbar.vue'
</script>
