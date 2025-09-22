<template>
  <nav class="bg-white border-b border-neutral-1 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto flex justify-between items-center h-16">
      <!-- Left: Logo -->
      <button class="hidden md:flex cursor-pointer items-center space-x-2" @click="router.push('/')">
        <img class="2xl:w-fit xl:w-[118px] xl:h-[19px] w-[94px]" src="../../assets/svg/logo.svg" alt="Logo" />
      </button>
      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button aria-label="Open menu">
          <img src="../../assets/svg/hamburger.svg" alt="" />
        </button>
      </div>
      <!-- Center: Nav Links -->
      <div class="hidden md:flex xl:space-x-6 lg:space-x-4 space-x-3 items-center">
        <router-link to="/"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-5">Home</router-link>
        <router-link to="/about"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-5">About
          Us</router-link>
        <router-link to="/properties"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-5">Properties
        </router-link>

        <router-link to="/products"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-5">Products</router-link>
        <router-link to="/interior-design"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-5">Interior
          Design</router-link>
        <router-link to="/consultations"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-5">Consultations</router-link>
        <router-link to="/contact"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-5">Contact
          Us</router-link>
      </div>
      <div class="md:hidden flex">
        <p class="capitalize 2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6">
          {{ router.currentRoute.value.name }}
        </p>
      </div>

      <!-- Right: Icons + Sign In -->
      <div class="flex items-center lg:space-x-4 md:space-x-2 space-x-4">
        <!-- Wishlist Icon -->
        <button aria-label="Wishlist">
          <img class="2xl:w-fit xl:w-[20px]  md:w-[12px] w-[16px]" src="../../assets/svg/ash-heart-light.svg" alt="" />
        </button>

        <!-- Cart Icon -->
        <button aria-label="Cart">
          <img class="2xl:w-fit xl:w-[20px]  md:w-[12px] w-[16px]" src="../../assets/svg/ash-cart-light.svg" alt="" />
        </button>

        <!-- Sign In Button -->
        <div class="md:flex hidden">
          <B-button @click="router.push('/sign-in')"> Sign In </B-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
/* Custom color utilities */
.text-primary-5 {
  color: var(--color-primary-5);
}

.text-primary-6 {
  color: var(--color-primary-6);
}

.bg-primary-5 {
  background-color: var(--color-primary-5);
}

.bg-primary-6 {
  background-color: var(--color-primary-6);
}

.hover\:bg-primary-6:hover {
  background-color: var(--color-primary-6);
}

.hover\:text-primary-5:hover {
  color: var(--color-primary-5);
}

.text-neutral-4 {
  color: var(--color-neutral-4);
}

.text-neutral-6 {
  color: var(--color-neutral-6);
}

.text-neutral-8 {
  color: var(--color-neutral-8);
}

.hover\:text-neutral-6:hover {
  color: var(--color-neutral-6);
}

.border-neutral-1 {
  border-color: var(--color-neutral-1);
}

router-link,
a {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  /* font-size: 1px; */
  /* line-height: 30px; */
  letter-spacing: 0%;
}

a.router-link-active.router-link-exact-active {
  background: var(--color-primary-5);
  color: var(--color-primary-0);
  padding: 8px 12px;
  border-radius: 4px;
}
</style>
