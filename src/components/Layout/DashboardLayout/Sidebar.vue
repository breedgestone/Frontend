<template>
    <aside class="w-72 bg-white border-r border-neutral-1 h-screen flex flex-col">
        <!-- Logo + Close (mobile only) -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-1">
            <button class="flex items-center space-x-2 cursor-pointer" @click="router.push('/')">
                <img class="w-[118px] h-[19px]" src="@/assets/svg/logo.svg" alt="Breedgestone" />
            </button>
            <button class="md:hidden" @click="$emit('close')">
                ✕
            </button>
        </div>

        <!-- Search -->
        <div class="px-6 py-4">
            <div class="relative">
                <input type="text" placeholder="Search..."
                    class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-5"
                    v-model="search" />
                <img class="absolute right-3 top-2.5 w-4 h-4" src="" alt="search" />
            </div>
        </div>

        <!-- Nav Links -->
        <nav class="flex-1 overflow-y-auto px-3">
            <ul class="space-y-1">
                <li v-for="item in navItems" :key="item.label">
                    <router-link :to="item.to"
                        class="flex items-center justify-between px-3 py-2 rounded-md text-neutral-6 hover:text-primary-2 hover:bg-primary-50"
                        :class="route.path === item.to ? 'bg-primary-50 text-primary-6 font-semibold' : ''">
                        <div class="flex items-center space-x-3">
                            <img src="" alt="" class="w-5 h-5" />
                            <span class="2xl:text-lg text-sm">{{ item.label }}</span>
                        </div>
                        <span v-if="item.badge" class="text-xs bg-primary-50 text-primary-6 px-2 py-0.5 rounded-full">
                            {{ item.badge }}
                        </span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <!-- CTA Card -->
        <div class="px-4 py-6">
            <div class="bg-gradient-to-br from-primary-5 to-primary-6 rounded-xl p-4 text-white text-center">
                <h3 class="font-bold text-base mb-2">Breedgestone Experts</h3>
                <p class="text-xs opacity-90 mb-4">
                    Unlock the full potential of Breedgestone—book your consultation today!
                </p>
                <B-button class="w-full bg-white text-primary-6 hover:bg-neutral-1">
                    Book a Consultation
                </B-button>
            </div>
        </div>

        <!-- Profile -->
        <div class="flex items-center space-x-3 border-t border-neutral-1 px-6 py-4">
            <img class="w-10 h-10 rounded-full" src="" alt="User" />
            <div class="flex-1">
                <p class="font-semibold text-sm text-neutral-8">Kenneth Okpara</p>
                <p class="text-xs text-neutral-5">Breedgestone Member</p>
            </div>
            <button>
                <img src="" alt="Logout" class="w-5 h-5" />
            </button>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const search = ref('')

const navItems = [
    { label: 'Overview', to: '/dashboard' },
    { label: 'Order History', to: '/orders' },
    { label: 'Wishlist', to: '/wishlist', badge: 8 },
    { label: 'Shopping Cart', to: '/cart', badge: 4 },
    { label: 'Messages', to: '/messages', badge: 10 },
    { label: 'Inspection', to: '/inspection' },
    { label: 'Consultation', to: '/consultation' },
    { label: 'Recently Viewed', to: '/recently-viewed' },
    { label: 'Help Center', to: '/help' },
    { label: 'Settings', to: '/settings' }
]
</script>
