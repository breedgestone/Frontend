<template>
    <div class="w-full">
        <!-- Search Bar -->
        <div
            class="flex items-center md:bg-neutral-100 bg-none md:w-3/4 mx-auto rounded-xl p-2 md:shadow-sm shadow-[0] gap-2">
            <div v-if="!isVoiceModal"
                class="bg-primary-0 flex md:flex-row flex-col gap-2 items-center w-full px-4 py-3 rounded-xl">
                <input type="text" placeholder="Search for a place to rent" v-model="searchQuery"
                    class="flex-1 bg-transparent outline-none text-sm md:text-base placeholder-gray-400 md:border-none border-4 border-neutral-0-5 md:w-fit w-full md:p-0 p-2 rounded-xl" />

                <B-button variant="outline" class="md:w-fit w-full" @click="openVoiceSearch">
                    <div class="flex gap-2">
                        <img src="../assets/svg/voicesearch.svg" alt="" />
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

            <!-- Voice Search Bar -->
            <transition name="fade" v-else>
                <div
                    class=" w-full bg-neutral-9 text-primary-0 px-6 py-3 rounded-xl flex sm:flex-row flex-col items-center gap-6 shadow-lg z-50">
                    <div class="flex items-end gap-2 max-h-full">
                        <span v-for="(level, i) in levels" :key="i"
                            class="w-5  bg-white rounded-full transition-all duration-100"
                            :class="{ 'animate-pulse-bar': !listening }" :style="listening
                                ? { height: (20 + (level + 1) * 18) + 'px' }
                                : { height: '20px' }"></span>
                    </div>



                    <!-- Text + pause icon -->
                    <div class="flex items-center gap-2">
                        <p class="text-sm font-semibold">Tap to interrupt</p>
                        <span class="text-lg">⏸️</span>
                    </div>

                    <!-- Mic + Stop buttons -->
                    <div class="flex items-center gap-3 sm:ml-auto">
                        <button @click="stopListening"
                            class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-400">
                            <img v-if="!listening" src="../assets/svg/muted-mic.svg" alt="" />
                            <img v-else src="../assets/svg/opened-mic.svg" alt="" />
                        </button>
                        <button @click="closeVoiceSearch"
                            class="w-9 h-9 flex items-center justify-center rounded-full bg-red-500">
                            ✕
                        </button>
                    </div>
                </div>
            </transition>
        </div>

        <!-- Filter Categories -->
        <div class="sm:flex hidden flex-wrap gap-3 items-center bg-neutral-100 rounded-xl px-4 py-3 shadow-sm relative">
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
        <div v-if="activeFilters.length" class="flex gap-2 items-center px-4 py-3 mt-2 justify-between">
            <div class="flex flex-wrap gap-2 items-center">
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
const activeFilters = ref([]);

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
let mediaStream = null;

// Visualizer state
const levels = ref([1, 1, 1, 1]);
let audioContext, analyser, source, dataArray, rafId;

const startVisualizer = () => {
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    source = audioContext.createMediaStreamSource(mediaStream);
    source.connect(analyser);
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    const animate = () => {
        analyser.getByteFrequencyData(dataArray);
        const avg = dataArray.slice(0, 32).reduce((a, b) => a + b, 0) / 32;
        const normalized = avg / 256;
        levels.value = [normalized, Math.random(), normalized * 0.8, Math.random() * 0.6];
        rafId = requestAnimationFrame(animate);
    };
    animate();
};

const stopVisualizer = () => {
    cancelAnimationFrame(rafId);
    if (audioContext) audioContext.close();
    levels.value = [1, 1, 1, 1];
};

const openVoiceSearch = async () => {
    isVoiceModal.value = true;
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        listening.value = true;
        startVisualizer();
        console.log("Mic access granted:", mediaStream);
    } catch (err) {
        alert("Microphone access denied");
    }
};

const stopListening = async () => {
    if (!listening.value) {
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            listening.value = true;
            startVisualizer();
            console.log("Mic resumed:", mediaStream);
        } catch (err) {
            alert("Microphone access denied");
        }
    } else {
        listening.value = false;
        stopVisualizer();
        if (mediaStream) {
            mediaStream.getTracks().forEach((track) => track.stop());
            mediaStream = null;
        }
    }
};

const closeVoiceSearch = () => {
    isVoiceModal.value = false;
    listening.value = false;
    stopVisualizer();
    if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
        mediaStream = null;
    }
};
</script>
<style scoped>
@keyframes pulse-bar {

    0%,
    100% {
        height: 20px;
    }

    50% {
        height: 24px;
    }
}

.animate-pulse-bar {
    animation: pulse-bar 1.5s ease-in-out infinite;
}
</style>
