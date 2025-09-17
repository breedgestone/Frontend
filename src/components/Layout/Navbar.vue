<template>
    <nav class="bg-white border-b border-neutral-1 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto flex justify-between items-center h-16">

            <!-- Left: Logo -->
            <div class="flex items-center space-x-2">
                <img src="../../assets/svg/logo.svg" alt="Logo" />
            </div>

            <!-- Center: Nav Links -->
            <div class="hidden md:flex space-x-6">
                <router-link to="/" class="text-sm font-medium text-neutral-6 hover:text-primary-5">Home</router-link>
                <router-link to="/about" class="text-sm font-medium text-neutral-6 hover:text-primary-5">About
                    Us</router-link>
                <router-link to="/about" class="text-sm font-medium text-neutral-6 hover:text-primary-5">Properties
                    Us</router-link>



                <router-link to="/products"
                    class="text-sm font-medium text-neutral-6 hover:text-primary-5">Products</router-link>
                <router-link to="/interior-design"
                    class="text-sm font-medium text-neutral-6 hover:text-primary-5">Interior
                    Design</router-link>
                <router-link to="/consultations"
                    class="text-sm font-medium text-neutral-6 hover:text-primary-5">Consultations</router-link>
                <router-link to="/contact" class="text-sm font-medium text-neutral-6 hover:text-primary-5">Contact
                    Us</router-link>
            </div>

            <!-- Right: Icons + Sign In -->
            <div class="flex items-center space-x-4">
                <!-- Wishlist Icon -->
                <button aria-label="Wishlist">
                    <img src="../../assets/svg/ash-heart-light.svg" alt="">

                </button>

                <!-- Cart Icon -->
                <button aria-label="Cart">
                    <img src="../../assets/svg/ash-cart-light.svg" alt="">
                </button>

                <!-- Sign In Button -->
                <B-button @click="router.push('/sign-in')">
                    Sign In
                </B-button>
            </div>

            <!-- Mobile Hamburger -->
            <div class="md:hidden">
                <button aria-label="Open menu">
                    <svg class="h-6 w-6 text-neutral-6" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

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
    font-family: "Campton", sans-serif;
    font-weight: 600;
    /* font-size: 1px; */
    /* line-height: 30px; */
    letter-spacing: 0%;

}
</style>