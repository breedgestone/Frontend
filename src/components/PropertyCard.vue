<template>
    <div @click="$emit('click')" role="button"
        class="cursor-pointer rounded-lg  bg-white shadow hover:shadow-lg transition">
        <div class="relative">
            <img :src="`/svg/${property.image}`" :alt="property.title" class="w-full lg:h-[282px] h-40 object-cover" />
            <div class="absolute -left-3 -bottom-5  transform -translate-y-1/2 z-20" aria-hidden="true">
                <div
                    class="relative flex items-center px-4 py-2 rounded-t-xl rounded-br-xl bg-primary-5 text-white font-semibold shadow">
                    <!-- star / sparkle -->

                    <span class="text-sm uppercase tracking-wide">{{ property.category }}</span>

                    <div class="absolute -bottom-[18px] left-0 -translate-y-1/2">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4578 12.2137L0.138672 0.894531H11.4578V12.2137Z" fill="#5E00A4" />
                        </svg>

                    </div>

                </div>
            </div>
        </div>

        <div class="p-4">
            <div class="flex items-center justify-between">
                <p class="text-lg font-bold my-2">
                    {{ property.price }}
                    <span class="font-light">/ {{ property.duration }}</span>
                </p>
                <button class="cursor-pointer rounded-full hover:shadow-lg transition">
                    <img src="../assets/svg/purple-heart.svg" alt="" />
                </button>
            </div>

            <p class="text-neutral-5 capitalize text-lg">
                {{ property.location }}
            </p>
            <p class="mt-1 text-sm text-neutral-4">
                {{ property.title }}
            </p>

            <div class="flex justify-between xl:text-sm text-xs text-neutral-6 mt-3 ">
                <div class="flex gap-2 flex-row items-center">
                    <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]" src="../assets/svg/purpleCar.svg" alt="">
                    <span>{{ property.beds }} Beds</span>
                </div>
                <div class="flex gap-2 flex-row items-center">
                    <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]" src="../assets/svg/sink.svg" alt="" />
                    <span>{{ property.baths }} Baths</span>
                </div>
                <div class="flex gap-2 flex-row items-center">
                    <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]" src="../assets/svg/sink.svg" alt="" />
                    <span>{{ property.size }} Baths</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    property: {
        type: Object,
        required: true
    },
})
</script>
