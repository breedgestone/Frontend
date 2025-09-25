<template>
  <nav class="bg-white border-b border-neutral-1 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto flex justify-between items-center h-16">
      <!-- Left: Logo -->
      <button class="hidden md:flex cursor-pointer items-center space-x-2" @click="router.push('/')">
        <img class="2xl:w-fit xl:w-[118px] xl:h-[19px] w-[94px]" src="../../assets/svg/logo.svg" alt="Logo" />
      </button>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button aria-label="Open menu" @click="isMobileMenuOpen = true">
          <img src="../../assets/svg/hamburger.svg" alt="" />
        </button>
      </div>

      <!-- Center: Nav Links (desktop only) -->
      <div class="hidden md:flex xl:space-x-6 lg:space-x-4 space-x-3 items-center">
        <router-link to="/"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-2">Home</router-link>
        <router-link to="/about"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-2">About
          Us</router-link>
        <div class="relative group">
          <button :class="isPropertiesActive ? 'bg-primary-5 text-primary-0 px-3 py-2 rounded' : 'text-neutral-6'"
            class="anchor 2xl:text-lg text-[10px] xl:text-sm font-medium  hover:text-primary-1 flex items-center">
            Properties
            <svg class="w-3 h-3 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            class="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200">
            <router-link to="/properties/rent"
              class="block px-4 py-2 text-[10px] xl:text-sm text-neutral-6 hover:bg-primary-50 hover:text-primary-6 rounded-t-lg">
              Rent a House
            </router-link>
            <router-link to="/properties/buy"
              class="block px-4 py-2 text-[10px] xl:text-sm text-neutral-6 hover:bg-primary-50 hover:text-primary-6">
              Buy a House
            </router-link>
            <router-link to="/properties/shortlet"
              class="block px-4 py-2 text-[10px] xl:text-sm text-neutral-6 hover:bg-primary-50 hover:text-primary-6 rounded-b-lg">
              Shortlet (Air BVB)
            </router-link>
          </div>
        </div>

        <router-link to="/products"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-2">Products</router-link>
        <router-link to="/interior-design"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-2">Interior
          Design</router-link>
        <router-link to="/consultations"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-2">Consultations</router-link>
        <router-link to="/contact"
          class="2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6 hover:text-primary-2">Contact
          Us</router-link>
      </div>

      <div class="md:hidden flex">
        <p class="capitalize 2xl:text-lg text-[10px] xl:text-sm font-medium text-neutral-6">
          {{ router.currentRoute.value.name }}
        </p>
      </div>

      <!-- Right: Icons + Sign In -->
      <div class="flex items-center lg:space-x-4 md:space-x-2 space-x-4">
        <button aria-label="Wishlist">
          <img class="2xl:w-fit xl:w-[20px]  md:w-[12px] w-[16px]" src="../../assets/svg/ash-heart-light.svg" alt="" />
        </button>
        <button aria-label="Cart">
          <img class="2xl:w-fit xl:w-[20px]  md:w-[12px] w-[16px]" src="../../assets/svg/ash-cart-light.svg" alt="" />
        </button>
        <div class="md:flex hidden">
          <B-button @click="router.push('/sign-in')"> Sign In </B-button>
        </div>
      </div>
    </div>

    <!-- Mobile Sidebar -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
        <!-- Close Btn -->
        <button class="absolute top-6 right-6 text-red-500" @click="isMobileMenuOpen = false">
          ✕
        </button>

        <!-- Links -->
        <div class="space-y-6 mt-10">
          <router-link to="/" class="block text-lg font-medium text-neutral-8"
            @click="isMobileMenuOpen = false">Home</router-link>
          <router-link to="/about" class="block text-lg font-medium text-neutral-8"
            @click="isMobileMenuOpen = false">About Us</router-link>

          <!-- Properties (collapsible) -->
          <div>
            <button @click="isMobilePropertiesOpen = !isMobilePropertiesOpen"
              class="flex items-center justify-between w-full text-lg font-medium text-neutral-8">
              Properties
              <span :class="isMobilePropertiesOpen ? 'rotate-180' : ''" class="transition-transform">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div v-if="isMobilePropertiesOpen" class="mt-2 ml-4 space-y-3">
              <router-link to="/properties/rent" class="block text-neutral-6" @click="isMobileMenuOpen = false">Rent a
                House</router-link>
              <router-link to="/properties/buy" class="block text-neutral-6" @click="isMobileMenuOpen = false">Buy a
                House</router-link>
              <router-link to="/properties/shortlet" class="block text-neutral-6"
                @click="isMobileMenuOpen = false">Shortlet (Air BNB)</router-link>
            </div>
          </div>

          <router-link to="/products" class="block text-lg font-medium text-neutral-8"
            @click="isMobileMenuOpen = false">Products</router-link>
          <router-link to="/interior-design" class="block text-lg font-medium text-neutral-8"
            @click="isMobileMenuOpen = false">Interior Design</router-link>
          <router-link to="/consultations" class="block text-lg font-medium text-neutral-8"
            @click="isMobileMenuOpen = false">Consultations</router-link>
          <router-link to="/contact" class="block text-lg font-medium text-neutral-8"
            @click="isMobileMenuOpen = false">Contact Us</router-link>
        </div>

        <!-- Sign In Button at bottom -->
        <div class="mt-10">
          <B-button class="w-full" @click="isMobileMenuOpen = false; router.push('/sign-in')">
            Sign In
          </B-button>
        </div>
      </div>
    </transition>

  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isMobilePropertiesOpen = ref(false)

const isPropertiesActive = computed(() =>
  route.path.startsWith('/properties')
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
