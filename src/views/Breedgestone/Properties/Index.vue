<template>
    <main class="font-poppins text-neutral-3">
        <!-- Hero Section -->
        <section class="bg-neutral-1 py-12">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <h1 class="text-3xl md:text-5xl font-campton font-bold text-neutral-9 mb-4">
                    The Space You Need, Instantly
                </h1>
                <p class="text-neutral-3 mb-8">Search for the perfect place to rent, buy or stay</p>

                <!-- Search Filters with Voice -->
                <div
                    class="bg-white shadow-md rounded-xl p-4 md:p-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                    <div class="flex items-center flex-1 gap-2">
                        <input type="text" placeholder="Location"
                            class="w-full border border-neutral-2 rounded-lg px-4 py-3 text-sm" />
                        <!-- Voice Search Button -->
                        <button class="bg-color-primary-5 hover:bg-color-primary-4 text-white p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 1v14m0 0c2.21 0 4-1.79 4-4V5a4 4 0 10-8 0v6c0 2.21 1.79 4 4 4zm0 0v4m0 0H9m3 0h3" />
                            </svg>
                        </button>
                    </div>

                    <select class="flex-1 border border-neutral-2 rounded-lg px-4 py-3 text-sm">
                        <option>Property Type</option>
                    </select>
                    <select class="flex-1 border border-neutral-2 rounded-lg px-4 py-3 text-sm">
                        <option>Price Range</option>
                    </select>
                    <select class="flex-1 border border-neutral-2 rounded-lg px-4 py-3 text-sm">
                        <option>Bedrooms</option>
                    </select>
                    <button class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-3 rounded-lg">
                        Search
                    </button>
                </div>
            </div>
        </section>

        <!-- Property Listings -->
        <section class="py-16 bg-neutral-1">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex gap-4">
                        <button class="text-sm text-neutral-3">All</button>
                        <button class="text-sm text-neutral-3">Buy</button>
                        <button class="text-sm text-neutral-3">Rent</button>
                        <button class="text-sm text-neutral-3">Popular</button>
                    </div>
                </div>

                <!-- Grid of Properties -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="i in 9" :key="i" class="bg-white rounded-xl shadow-md overflow-hidden">
                        <img alt="Interior of a house" class="w-full h-72 bg-neutral-7 rounded-t-lg object-cover" />
                        <div class="p-4">
                            <div class="flex items-center justify-between mb-2">
                                <h2 class="font-campton font-bold text-neutral-9 text-lg">Villa Lakeview</h2>
                                <span class="text-color-primary-5 font-semibold">$2,500/mo</span>
                            </div>
                            <p class="text-sm text-neutral-3 mb-2">2 Beds • 2 Baths • 1200 sqft</p>
                            <p class="text-sm text-neutral-4">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="py-16 bg-neutral-1">
            <div class="max-w-7xl mx-auto px-6">
                <h2 class="text-2xl font-campton font-bold text-neutral-9 mb-8">
                    What Our Customer Say about Our Houses
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl shadow-md p-6">
                        <img alt="Exterior of reviewed house"
                            class="w-full h-40 rounded-lg bg-neutral-7 mb-4 object-cover" />
                        <p class="text-sm mb-4">“Amazing service and great homes! Found the perfect one in days.”</p>
                        <div class="text-sm text-neutral-4">- Sarah Johnson</div>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-6">
                        <img alt="Customer reviewed house exterior"
                            class="w-full h-40 rounded-lg bg-neutral-7 mb-4 object-cover" />
                        <p class="text-sm mb-4">“The platform made it easy to compare and decide. Highly recommend.”</p>
                        <div class="text-sm text-neutral-4">- Daniel Lee</div>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-6">
                        <img alt="Reviewed house with garden"
                            class="w-full h-40 rounded-lg bg-neutral-7 mb-4 object-cover" />
                        <p class="text-sm mb-4">“Beautiful listings and smooth experience from start to finish.”</p>
                        <div class="text-sm text-neutral-4">- Maria Gonzalez</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mobile App CTA -->
        <section class="py-16 bg-neutral-1">
            <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                <div class="flex-1">
                    <h3 class="text-2xl font-campton font-bold text-neutral-9 mb-4">
                        Enjoy All the Benefits from Our MobileApp
                    </h3>
                    <p class="text-neutral-3 mb-6">The Marketplace That Fits In Your Pocket</p>
                    <div class="flex gap-4">
                        <button class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-3 rounded-lg">
                            App Store
                        </button>
                        <button class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-3 rounded-lg">
                            Google Play
                        </button>
                    </div>
                </div>
                <div class="flex-1">
                    <img alt="Mobile app screenshots" class="w-full h-72 bg-neutral-7 rounded-lg object-cover" />
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
function startVoiceSearch() {
}


</script>