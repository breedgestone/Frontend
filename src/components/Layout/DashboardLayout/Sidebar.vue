<template>
    <aside class="lg:w-78 sm:w-68 w-full bg-white border-r border-neutral-1 h-screen flex flex-col">
        <!-- Logo + Close (mobile only) -->
        <div class="flex items-center justify-between px-6 py-5 border-b border-neutral-1 shrink-0">
            <button class="flex items-center space-x-2 cursor-pointer" @click="router.push('/')">
                <img class="w-[118px] h-[19px]" src="@/assets/svg/logo.svg" alt="Breedgestone" />
            </button>
            <button class="" @click="$emit('close')">✕</button>
        </div>

        <!-- Search -->
        <div class="px-6 py-4 shrink-0">
            <div class="relative">
                <input type="text" placeholder="Search..."
                    class="w-full border-[#CBD5E1] px-4 py-2 text-sm border rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-5"
                    v-model="search" />
                <img class="absolute right-3 top-2.5 w-4 h-4" src="@/assets/svg/search.svg" alt="search" />
            </div>
        </div>

        <!-- Scrollable Nav + CTA -->
        <div class="flex-1 overflow-y-auto px-3">
            <!-- Nav Links -->
            <nav>
                <ul class="space-y-1">
                    <li v-for="item in navItems" :key="item.label">
                        <router-link :to="item.to"
                            class="flex items-center justify-between px-3 py-2 rounded-3xl text-neutral-6 hover:text-primary-2 hover:bg-primary-50"
                            :class="route.path === item.to ? 'bg-primary-0-5 font-semibold' : ''">
                            <div class="flex items-center space-x-3">
                                <img :src="route.path === item.to ? item.activeIcon : item.icon" alt=""
                                    class="w-5 h-5" />
                                <span class="2xl:text-lg text-sm">{{ item.label }}</span>
                            </div>

                            <span v-if="item.label === 'Messages'"
                                class=" border roubded-full border-primary-5text-xs bg-primary-50 text-primary-5 px-2.5 bg-[#EEF2FF] py-0.5 rounded-full">
                                {{ 8 }}
                            </span>
                            <span v-if="item.label === 'Shopping Cart'"
                                class=" border roubded-full border-primary-5text-xs bg-primary-50 text-primary-5 px-2.5 bg-[#EEF2FF] py-0.5 rounded-full">
                                {{ 3 }}
                            </span>
                            <span v-if="item.label === 'Wishlist'"
                                class=" border roubded-full border-primary-5text-xs bg-primary-50 text-primary-5 px-2.5 bg-[#EEF2FF] py-0.5 rounded-full">
                                {{ 24 }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </nav>

            <!-- CTA Card -->
            <div class="px-1 py-6">
                <div
                    class="bg-center bg-no-repeat relative bg-cover h-fit bg-[url('/svg/sidebar-consultation-bg.svg')] rounded-xl p-4 text-white text-center flex flex-col items-center gap-3">
                    <img src="@/assets/svg/sidebar-cta.svg" alt="">
                    <h3 class="font-bold text-base">Breedgestone Experts</h3>
                    <p class="text-xs opacity-90 ">
                        Unlock the full potential of Breedgestone—book your consultation today!
                    </p>
                    <B-button color="neutral">
                        Book a Consultation
                    </B-button>
                </div>
            </div>
        </div>

        <!-- Profile (fixed bottom) -->
        <div class="flex items-center space-x-3 border-t border-neutral-1 px-6 py-4 shrink-0">
            <img v-if="user" class="w-10 h-10 rounded-full" src="" alt="User" />
            <div v-else
                class="w-10 h-10 rounded-full bg-neutral-4 flex items-center justify-center text-sm font-semibold text-primary-0">
                <p>KO</p>
            </div>
            <div class="flex-1">
                <p class="font-semibold text-sm text-neutral-8">Kenneth Okpara</p>
                <p class="text-xs text-neutral-5">Breedgestone Member</p>
            </div>
            <button>
                <img src="@/assets/svg/logout.svg" alt="Logout" class="w-5 h-5" />
            </button>
        </div>
    </aside>
</template>


<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import navItems from './navItem'
const router = useRouter()
const route = useRoute()
const search = ref('')



</script>
