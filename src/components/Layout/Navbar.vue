<template>
    <nav class="bg-white border-b border-neutral-1 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto flex justify-between items-center h-16">

            <!-- Left: Logo -->
            <div class="flex items-center space-x-2">
                <img src="" alt="Logo" class="h-6 w-6" />
                <span class="text-lg font-bold text-neutral-8">Breedestone</span>
            </div>

            <!-- Center: Nav Links -->
            <div class="hidden md:flex space-x-6">
                <router-link to="/" class="text-sm font-medium text-neutral-6 hover:text-primary-5">Home</router-link>
                <router-link to="/about" class="text-sm font-medium text-neutral-6 hover:text-primary-5">About
                    Us</router-link>

                <!-- Properties Dropdown Placeholder -->
                <button class="px-3 py-1.5 text-sm font-medium text-white rounded-md bg-primary-5">
                    Properties <span class="ml-1">▼</span>
                </button>

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
                    <svg class="h-5 w-5 text-neutral-4 hover:text-neutral-6" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path
                            d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10.1 4 11.5 5 12 6C12.5 5 13.9 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z" />
                    </svg>
                </button>

                <!-- Cart Icon -->
                <button aria-label="Cart">
                    <svg class="h-5 w-5 text-neutral-4 hover:text-neutral-6" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path d="M6 6H21L20 14H8L6 6ZM6 6L5 2H2" />
                        <circle cx="9" cy="20" r="1" />
                        <circle cx="17" cy="20" r="1" />
                    </svg>
                </button>

                <!-- Sign In Button -->
                <router-link to="/sign-in"
                    class="px-4 py-1.5 text-sm font-medium text-white rounded-md bg-primary-5 hover:bg-primary-6">
                    Sign In
                </router-link>
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
// No script logic yet — optionally handle dropdown or mobile menu toggling here.
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
</style>