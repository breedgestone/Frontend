<template>
    <div class="w-full ">
        <!-- Search Bar -->
        <div
            class="flex items-center md:bg-neutral-100 bg-none md:w-3/4 mx-auto rounded-xl p-2 md:shadow-sm shadow-[0] gap-2">
            <div class="bg-primary-0 flex md:flex-row flex-col gap-2 items-center w-full px-4 py-3 rounded-xl">

                <input type="text" placeholder="Search for a place to rent" v-model="searchQuery"
                    class="flex-1 bg-transparent outline-none text-sm md:text-base placeholder-gray-400 md:border-none border-4 border-neutral-0-5 md:w-fit w-full md:p-0 p-2 rounded-xl" />

                <B-button variant="outline" class="md:w-fit w-full" @click="openVoiceSearch">
                    <div class="flex gap-2">
                        <img src="../assets/svg/voicesearch.svg" alt="">
                        <span> Voice Search</span>
                    </div>
                </B-button>
                <B-button class="md:w-fit w-full">
                    <div class="flex gap-2">

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 19.0781L13.8033 13.8814M13.8033 13.8814C15.1605 12.5242 16 10.6492 16 8.57812C16 4.43599 12.6421 1.07812 8.5 1.07812C4.35786 1.07812 1 4.43599 1 8.57812C1 12.7203 4.35786 16.0781 8.5 16.0781C10.5711 16.0781 12.4461 15.2387 13.8033 13.8814Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Find Property
                    </div>
                </B-button>
            </div>
        </div>
        <!-- Voice Search Bar -->
        <transition name="fade">
            <div v-if="isVoiceModal"
                class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-xl flex items-center gap-6 shadow-lg z-50">
                <!-- Animated Voice Dots -->
                <div class="flex items-end gap-1 h-6">
                    <span v-for="n in 4" :key="n" class="w-2 rounded-full bg-white"
                        :class="listening ? 'animate-bounce-dot' : ''"
                        :style="{ animationDelay: listening ? (n * 0.15) + 's' : '0s' }"></span>
                </div>

                <!-- Text + pause icon -->
                <div class="flex items-center gap-2">
                    <p class="text-sm font-semibold">Tap to interrupt</p>
                    <span class="text-lg">⏸️</span>
                </div>

                <!-- Mic + Stop buttons -->
                <div class="flex items-center gap-3 ml-auto">
                    <button @click="stopListening"
                        class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-400">
                        🎤
                    </button>
                    <button @click="closeVoiceSearch"
                        class="w-9 h-9 flex items-center justify-center rounded-full bg-red-500">
                        ✕
                    </button>
                </div>
            </div>
        </transition>

        <!-- Filter Categories -->
        <div class="flex flex-wrap gap-3 items-center bg-neutral-100 rounded-xl px-4 py-3 shadow-sm relative">
            <div v-for="(category, idx) in filterCategories" :key="idx" class="relative flex-1 min-w-[150px]">

                <!-- Dropdown button -->
                <div class="flex items-center justify-between gap-2 w-full p-3 rounded-md cursor-pointer text-sm text-gray-700 bg-white hover:bg-neutral-100"
                    @click="toggleDropdown(idx)">

                    <span class="border-r border-neutral-0-5 pr-1">{{ category.icon }}</span>
                    <span class="flex-1 text-left whitespace-nowrap">{{ category.label }}</span>

                    <span
                        class="ml-1 text-white bg-neutral-9 h-5 w-5 flex items-center justify-center rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                            aria-label="chevron v filled">
                            <path d="M12 15.6 5.2 8.8a1 1 0 0 1 1.4-1.4L12 12.8l5.4-5.4a1 1 0 1 1 1.4 1.4L12 15.6z"
                                fill="#fff" />
                        </svg>
                    </span>
                </div>

                <!-- Dropdown Menu -->
                <div v-if="openDropdown === idx"
                    class="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div v-for="(option, oIdx) in category.options" :key="oIdx" @click="selectOption(option)"
                        class="px-4 py-2 text-sm text-gray-700 hover:bg-primary-5 hover:text-white cursor-pointer">
                        {{ option }}
                    </div>
                </div>
            </div>
        </div>


        <!-- Active Filters -->
        <div v-if="activeFilters.length" class="flex gap-2 items-center   px-4 py-3 mt-2  justify-between">
            <div class="flex flex-wrap gap-2 items-center ">

                <div v-for="(item, idx) in activeFilters" :key="idx"
                    class="flex items-center gap-2 px-3 py-1 border border-primary-5 text-primary-5 rounded-full text-sm bg-white">
                    {{ item }}
                    <button @click="removeFilter(idx)" class="text-xs">✕</button>
                </div>
            </div>

            <B-button variant="outline" v-if="activeFilters.length" @click="clearAll">
                Clear all
            </B-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const activeFilters = ref([
]);

const filterCategories = ref([
    { label: "Location", icon: "📍", options: ["Abuja", "Lagos", "Kano"] },
    { label: "Property Type", icon: "🏠", options: ["Apartment/Flat", "Duplex"] },
    { label: "Pricing Range", icon: "💰", options: ["50,000 - 1,000,000", "1,000,000 - 5,000,000"] },
    { label: "Property Size", icon: "📦", options: ["2 Bedrooms", "5 Bedrooms"] },
    { label: "Furnishing", icon: "🛋️", options: ["Furnished", "Unfurnished"] }
]);

const openDropdown = ref(null);
const toggleDropdown = (idx) => {
    openDropdown.value = openDropdown.value === idx ? null : idx;
};
const selectOption = (option) => {
    if (!activeFilters.value.includes(option)) {
        activeFilters.value.push(option);
    }
    openDropdown.value = null;
};
const removeFilter = (idx) => {
    activeFilters.value.splice(idx, 1);
};
const clearAll = () => {
    activeFilters.value = [];
};

// Voice search state
const isVoiceModal = ref(false);
const listening = ref(false);
let mediaStream = null; // store the active mic stream

const openVoiceSearch = async () => {
    isVoiceModal.value = true;
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        listening.value = true;
        console.log("Mic access granted:", mediaStream);
    } catch (err) {
        alert("Microphone access denied");
    }
};

const stopListening = () => {
    listening.value = false;
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop()); // 🔴 stop all mic tracks
        mediaStream = null;
    }
};

const closeVoiceSearch = () => {
    isVoiceModal.value = false;
    listening.value = false;
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        mediaStream = null;
    }
};
</script>
<style scoped>
@keyframes bounceHeight {

    0%,
    100% {
        transform: scaleY(0.4);
    }

    50% {
        transform: scaleY(1.2);
    }
}

.animate-bounce-dot {
    animation: bounceHeight 0.8s infinite ease-in-out;
    transform-origin: bottom;
}
</style>
