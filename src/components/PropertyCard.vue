<template>
    <div @click="$emit('click')" role="button"
        class="cursor-pointer rounded-lg  bg-white shadow hover:shadow-lg transition">
        <div class="relative">
            <img :src="`/svg/${property.image}`" :alt="property.title" class="w-full lg:h-[282px] h-40 object-cover" />
            <div class="absolute -left-3 -bottom-5  transform -translate-y-1/2 z-20" aria-hidden="true">
                <div
                    class="relative flex items-center px-4 py-2 rounded-t-xl rounded-br-xl bg-primary-5 text-white font-semibold shadow">
                    <!-- star / sparkle -->

                    <span class="text-sm flex items-center gap-1 uppercase tracking-wide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.11449 2.92188C6.4147 2.92188 6.7026 3.04113 6.91488 3.25341C7.12715 3.46568 7.24641 3.75359 7.24641 4.05379V5.1857H8.37832C8.67853 5.1857 8.96643 5.30496 9.17871 5.51724C9.39098 5.72951 9.51024 6.01742 9.51024 6.31762C9.51024 6.61782 9.39098 6.90573 9.17871 7.118C8.96643 7.33028 8.67853 7.44953 8.37832 7.44953H7.24641V8.58145C7.24641 8.88165 7.12715 9.16956 6.91488 9.38183C6.7026 9.59411 6.4147 9.71336 6.11449 9.71336C5.81429 9.71336 5.52639 9.59411 5.31411 9.38183C5.10184 9.16956 4.98258 8.88165 4.98258 8.58145V7.44953H3.85066C3.55046 7.44953 3.26256 7.33028 3.05028 7.118C2.838 6.90573 2.71875 6.61782 2.71875 6.31762C2.71875 6.01742 2.838 5.72951 3.05028 5.51724C3.26256 5.30496 3.55046 5.1857 3.85066 5.1857H4.98258V4.05379C4.98258 3.75359 5.10184 3.46568 5.31411 3.25341C5.52639 3.04113 5.81429 2.92188 6.11449 2.92188ZM6.11449 14.241C6.4147 14.241 6.7026 14.3603 6.91488 14.5726C7.12715 14.7848 7.24641 15.0727 7.24641 15.3729V16.5049H8.37832C8.67853 16.5049 8.96643 16.6241 9.17871 16.8364C9.39098 17.0487 9.51024 17.3366 9.51024 17.6368C9.51024 17.937 9.39098 18.2249 9.17871 18.4372C8.96643 18.6494 8.67853 18.7687 8.37832 18.7687H7.24641V19.9006C7.24641 20.2008 7.12715 20.4887 6.91488 20.701C6.7026 20.9133 6.4147 21.0325 6.11449 21.0325C5.81429 21.0325 5.52639 20.9133 5.31411 20.701C5.10184 20.4887 4.98258 20.2008 4.98258 19.9006V18.7687H3.85066C3.55046 18.7687 3.26256 18.6494 3.05028 18.4372C2.838 18.2249 2.71875 17.937 2.71875 17.6368C2.71875 17.3366 2.838 17.0487 3.05028 16.8364C3.26256 16.6241 3.55046 16.5049 3.85066 16.5049H4.98258V15.3729C4.98258 15.0727 5.10184 14.7848 5.31411 14.5726C5.52639 14.3603 5.81429 14.241 6.11449 14.241ZM14.0379 2.92188C14.2877 2.92179 14.5305 3.00435 14.7285 3.15668C14.9265 3.309 15.0685 3.52254 15.1325 3.76402L16.467 8.80783L20.2634 10.997C20.4355 11.0963 20.5784 11.2392 20.6777 11.4113C20.777 11.5833 20.8293 11.7785 20.8293 11.9772C20.8293 12.1759 20.777 12.3711 20.6777 12.5431C20.5784 12.7152 20.4355 12.8581 20.2634 12.9574L16.467 15.1477L15.1313 20.1904C15.0673 20.4316 14.9253 20.6449 14.7274 20.7971C14.5295 20.9493 14.2869 21.0318 14.0373 21.0318C13.7877 21.0318 13.5451 20.9493 13.3473 20.7971C13.1494 20.6449 13.0074 20.4316 12.9433 20.1904L11.6088 15.1466L7.81237 12.9574C7.64031 12.8581 7.49743 12.7152 7.39809 12.5431C7.29876 12.3711 7.24646 12.1759 7.24646 11.9772C7.24646 11.7785 7.29876 11.5833 7.39809 11.4113C7.49743 11.2392 7.64031 11.0963 7.81237 10.997L11.6088 8.8067L12.9445 3.76402C13.0084 3.52273 13.1502 3.30933 13.348 3.15702C13.5457 3.00471 13.7883 2.92204 14.0379 2.92188Z"
                                fill="white" />
                        </svg>

                        {{ property.category }}</span>

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
