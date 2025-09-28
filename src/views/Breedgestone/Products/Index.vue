<template>
    <div class="bg-[#F9F9F9] min-h-screen">

        <!-- Desktop Content -->
        <div class="hidden sm:block">
            <div class="max-w-7xl mx-auto px-4 md:px-12 py-8">
                <div class="flex gap-8">
                    <!-- Desktop Sidebar -->
                    <div class="w-64 flex-shrink-0">
                        <!-- All Categories Dropdown -->
                        <div class="bg-purple-600 text-white p-4 rounded-t-lg">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                    <span class="font-semibold">All Categories</span>
                                </div>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>

                        <!-- Search -->
                        <div class="bg-white p-4 border-x border-gray-200">
                            <div class="relative">
                                <input v-model="searchQuery" type="text"
                                    placeholder="Search products, brands and categories"
                                    class="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-500" />
                                <button
                                    class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Filter Section -->
                        <div class="bg-white border-x border-b border-gray-200 rounded-b-lg">
                            <div class="p-4">
                                <button class="flex items-center gap-2 text-purple-600 font-semibold">
                                    <span>Filter</span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z">
                                        </path>
                                    </svg>
                                </button>
                            </div>

                            <!-- Plumbing Categories -->
                            <div class="border-t border-gray-200 p-4">
                                <h3 class="font-semibold text-lg mb-4">Plumbing</h3>
                                <div class="space-y-3">
                                    <label v-for="category in plumbingCategories" :key="category.name"
                                        class="flex items-center gap-3 cursor-pointer">
                                        <div class="relative">
                                            <input v-model="selectedCategory" :value="category.name" type="radio"
                                                name="plumbing" class="sr-only" />
                                            <div :class="[
                                                'w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors',
                                                selectedCategory === category.name
                                                    ? 'bg-purple-600 border-purple-600'
                                                    : 'border-gray-300 bg-white hover:border-purple-600'
                                            ]" @click="selectCategory(category.name)">
                                                <div v-if="selectedCategory === category.name"
                                                    class="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <span class="text-gray-700">{{ category.name }}</span>
                                        <span class="text-gray-500 text-sm">({{ category.count }})</span>
                                    </label>
                                </div>
                            </div>

                            <!-- Price Range -->
                            <div class="border-t border-gray-200 p-4">
                                <h3 class="font-semibold text-lg mb-4">Price</h3>
                                <div class="space-y-4">
                                    <div class="relative px-2">
                                        <!-- Range Track -->
                                        <div class="h-2 bg-gray-200 rounded-full relative">
                                            <div class="h-2 bg-purple-600 rounded-full absolute"
                                                :style="`left: ${((selectedPriceRange.min - 20000) / 80000) * 100}%; width: ${((selectedPriceRange.max - selectedPriceRange.min) / 80000) * 100}%`">
                                            </div>
                                        </div>

                                        <!-- Range Inputs -->
                                        <input v-model.number="selectedPriceRange.min" type="range" min="20000"
                                            max="100000" step="5000"
                                            class="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
                                            @input="updatePriceFilter" />
                                        <input v-model.number="selectedPriceRange.max" type="range" min="20000"
                                            max="100000" step="5000"
                                            class="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
                                            @input="updatePriceFilter" />
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        Price: ₦{{ selectedPriceRange.min.toLocaleString() }} — ₦{{
                                            selectedPriceRange.max.toLocaleString() }}
                                    </div>
                                </div>
                            </div>

                            <!-- Rating Filter -->
                            <div class="border-t border-gray-200 p-4">
                                <h3 class="font-semibold text-lg mb-4">Rating</h3>
                                <div class="space-y-3">
                                    <label v-for="rating in ratingFilters" :key="rating.stars"
                                        class="flex items-center gap-3 cursor-pointer">
                                        <div class="relative">
                                            <input v-model="selectedRatings" :value="rating.stars" type="checkbox"
                                                class="w-5 h-5 sr-only" />
                                            <div :class="[
                                                'w-5 h-5 border-2 rounded flex items-center justify-center transition-colors',
                                                selectedRatings.includes(rating.stars)
                                                    ? 'bg-purple-600 border-purple-600'
                                                    : 'border-gray-300 bg-white hover:border-purple-600'
                                            ]" @click="toggleRating(rating.stars)">
                                                <svg v-if="selectedRatings.includes(rating.stars)"
                                                    class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="flex">
                                                <svg v-for="i in 5" :key="i"
                                                    :class="i <= rating.stars ? 'text-yellow-400' : 'text-gray-300'"
                                                    class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <span class="text-sm text-gray-600">{{ rating.label }}</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <!-- Popular Tags -->
                            <div class="border-t border-gray-200 p-4">
                                <h3 class="font-semibold text-lg mb-4">Popular Tag</h3>
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Roofing</span>
                                    <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Tiles and
                                        Marbles</span>
                                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Steel and
                                        Iron</span>
                                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Paint and
                                        Chemicals</span>
                                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Cements and
                                        Concrete</span>
                                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Timber</span>
                                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Block, Kerbs
                                        and Interlocks</span>
                                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Iron</span>
                                    <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Wood and
                                        Timber</span>
                                </div>
                            </div>

                            <!-- Discount Banner -->
                            <div class="border-t border-gray-200 p-4">
                                <div
                                    class="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white relative overflow-hidden">
                                    <div class="relative z-10">
                                        <div class="text-3xl font-bold mb-1">79% <span
                                                class="text-lg font-normal">Discount</span></div>
                                        <div class="text-sm opacity-90 mb-3">on your first order</div>
                                        <button
                                            class="text-white underline text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                                            Shop Now
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="absolute bottom-0 right-0">
                                        <img src="/svg/house2.svg" alt="Discount illustration" class="opacity-20" />
                                    </div>
                                </div>
                            </div>

                            <!-- Sale Products -->
                            <div class="border-t border-gray-200 p-4">
                                <h3 class="font-semibold text-lg mb-4">Sale Products</h3>
                                <div class="space-y-4">
                                    <div v-for="product in saleProducts" :key="product.id"
                                        class="flex gap-3 p-2 bg-white rounded-lg border">
                                        <img :src="product.image" :alt="product.name"
                                            class="w-16 h-16 object-cover rounded" />
                                        <div class="flex-1">
                                            <h4 class="font-semibold text-sm">{{ product.name }}</h4>
                                            <div class="flex items-center gap-2">
                                                <span class="font-bold text-purple-600">₦{{
                                                    product.salePrice.toLocaleString() }}</span>
                                                <span class="text-sm text-gray-500 line-through">₦{{
                                                    product.originalPrice.toLocaleString() }}</span>
                                            </div>
                                            <div class="flex items-center gap-1 mt-1">
                                                <div class="flex">
                                                    <svg v-for="i in 5" :key="i"
                                                        :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                                                        class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop Main Content -->
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <p class="text-sm text-gray-600 mb-1">Sort by:</p>
                                <select
                                    class="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-purple-500">
                                    <option>Latest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Most Popular</option>
                                </select>
                            </div>
                            <div class="text-sm text-gray-600">
                                {{ totalResults }} Results found
                            </div>
                        </div>

                        <!-- Products Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-8">
                            <div v-for="product in filteredProducts" :key="product.id"
                                class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group relative">
                                <!-- Sale Badge -->
                                <div v-if="product.onSale"
                                    class="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                                    Sale {{ product.discount }}%
                                </div>

                                <!-- Product Image -->
                                <div class="relative overflow-hidden rounded-t-lg">
                                    <img :src="product.image" :alt="product.name"
                                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>

                                <!-- Product Info -->
                                <div class="p-4">
                                    <h3 class="font-semibold text-gray-900 mb-1">{{ product.name }}</h3>
                                    <p class="text-xs text-gray-500 mb-2">{{ product.category }}</p>
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="font-bold text-lg">₦{{ product.price.toLocaleString() }}</span>
                                        <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <div class="flex">
                                            <svg v-for="i in 5" :key="i"
                                                :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                                                class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <!-- Shopping bag icon -->
                                <div class="absolute bottom-4 right-4">
                                    <button
                                        class="bg-gray-100 p-2 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Pagination -->
                        <div class="flex items-center justify-center gap-4">
                            <button
                                class="p-3 border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>
                            <span class="text-gray-600">01 of 10</span>
                            <button
                                class="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Content -->
        <div class="sm:hidden">
            <!-- Breadcrumb -->
            <div class="px-4 py-3 bg-white border-b">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                    <span>Home</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Plumbing</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="text-purple-600">Lighting Systems</span>
                </div>
            </div>

            <!-- Search and Filter Bar -->
            <div class="px-4 py-4 bg-white border-b">
                <div class="flex gap-3 mb-4">
                    <div class="flex-1 relative">
                        <select
                            class="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-100 focus:outline-none">
                            <option>All</option>
                        </select>
                    </div>
                    <div class="flex-1 relative">
                        <input v-model="mobileSearchQuery" type="text" placeholder="Search products & categories"
                            class="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-500" />
                        <button
                            class="absolute right-1 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <button @click="showMobileFilter = true"
                        class="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">
                        <span>Filter</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z">
                            </path>
                        </svg>
                    </button>
                    <span class="text-sm text-gray-600">{{ totalResults }} Results Found</span>
                </div>

                <!-- Applied Filters Display -->
                <div v-if="hasActiveFilters" class="flex flex-wrap gap-2 mt-4">
                    <span v-if="selectedCategory"
                        class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        {{ selectedCategory }}
                        <button @click="selectedCategory = ''" class="hover:bg-purple-200 rounded-full p-0.5">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </span>
                    <span v-if="selectedPriceRange.min > 20000 || selectedPriceRange.max < 100000"
                        class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        ₦{{ selectedPriceRange.min.toLocaleString() }} - ₦{{ selectedPriceRange.max.toLocaleString() }}
                        <button @click="resetPriceRange" class="hover:bg-purple-200 rounded-full p-0.5">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </span>
                    <span v-for="rating in selectedRatings" :key="rating"
                        class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        {{ rating }}.0 & Up
                        <button @click="toggleRating(rating)" class="hover:bg-purple-200 rounded-full p-0.5">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </span>
                </div>
            </div>

            <!-- Mobile Products Grid -->
            <div class="px-4 py-4">
                <div class="grid grid-cols-2 gap-4 mb-8">
                    <div v-for="product in mobileDisplayedProducts" :key="product.id"
                        class="bg-white rounded-lg shadow-sm relative">
                        <!-- Sale Badge -->
                        <div v-if="product.onSale"
                            class="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                            Sale {{ product.discount }}%
                        </div>

                        <!-- Product Image -->
                        <div class="relative overflow-hidden rounded-t-lg">
                            <img :src="product.image" :alt="product.name" class="w-full h-32 object-cover" />
                        </div>

                        <!-- Product Info -->
                        <div class="p-3">
                            <h3 class="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">{{ product.name }}</h3>
                            <p class="text-xs text-gray-500 mb-1">{{ product.category }}</p>
                            <span class="font-bold text-sm">₦{{ product.price.toLocaleString() }}</span>
                            <div class="flex items-center gap-1 mt-1">
                                <div class="flex">
                                    <svg v-for="i in 5" :key="i"
                                        :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                                        class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Shopping bag icon -->
                        <div class="absolute bottom-3 right-3">
                            <button
                                class="bg-gray-100 p-1.5 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Pagination -->
                <div class="flex items-center justify-center gap-4">
                    <button
                        class="p-3 border border-gray-300 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </button>
                    <span class="text-gray-600">01 of 10</span>
                    <button class="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Filter Modal -->
        <div v-if="showMobileFilter" class="fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden">
            <div class="bg-white h-full overflow-y-auto">
                <!-- Filter Header -->
                <div class="flex items-center justify-between p-4 border-b">
                    <button @click="showMobileFilter = false" class="p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </button>
                    <h2 class="text-lg font-semibold">Filter</h2>
                    <button class="p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                            </path>
                        </svg>
                    </button>
                </div>

                <!-- Filter Content -->
                <div class="p-4">
                    <!-- Mobile Plumbing Categories -->
                    <div class="mb-8">
                        <h3 class="font-semibold text-lg mb-4">Plumbing</h3>
                        <div class="space-y-4">
                            <label v-for="category in plumbingCategories" :key="category.name"
                                class="flex items-center gap-3 cursor-pointer">
                                <div class="relative">
                                    <input v-model="selectedCategory" :value="category.name" type="radio"
                                        name="plumbing" class="sr-only" />
                                    <div :class="[
                                        'w-6 h-6 border-2 rounded-full flex items-center justify-center transition-colors',
                                        selectedCategory === category.name
                                            ? 'bg-purple-600 border-purple-600'
                                            : 'border-gray-300 bg-white hover:border-purple-600'
                                    ]" @click="selectCategory(category.name)">
                                        <div v-if="selectedCategory === category.name"
                                            class="w-2.5 h-2.5 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <span class="text-gray-700 block">{{ category.name }}</span>
                                    <span class="text-gray-500 text-sm">({{ category.count }})</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Mobile Price Range -->
                    <div class="mb-8">
                        <h3 class="font-semibold text-lg mb-4">Price</h3>
                        <div class="space-y-4">
                            <div class="relative px-2">
                                <!-- Range Track -->
                                <div class="h-2 bg-gray-200 rounded-full relative">
                                    <div class="h-2 bg-purple-600 rounded-full absolute"
                                        :style="`left: ${((selectedPriceRange.min - 20000) / 80000) * 100}%; width: ${((selectedPriceRange.max - selectedPriceRange.min) / 80000) * 100}%`">
                                    </div>
                                </div>

                                <!-- Range Inputs -->
                                <input v-model.number="selectedPriceRange.min" type="range" min="20000" max="100000"
                                    step="5000"
                                    class="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
                                    @input="updatePriceFilter" />
                                <input v-model.number="selectedPriceRange.max" type="range" min="20000" max="100000"
                                    step="5000"
                                    class="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
                                    @input="updatePriceFilter" />
                            </div>
                            <div class="text-sm text-gray-600">
                                Price: ₦{{ selectedPriceRange.min.toLocaleString() }} — ₦{{
                                    selectedPriceRange.max.toLocaleString() }}
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Rating Filter -->
                    <div class="mb-8">
                        <h3 class="font-semibold text-lg mb-4">Rating</h3>
                        <div class="space-y-4">
                            <label v-for="rating in ratingFilters" :key="rating.stars"
                                class="flex items-center gap-3 cursor-pointer">
                                <div class="relative">
                                    <input v-model="selectedRatings" :value="rating.stars" type="checkbox"
                                        class="w-6 h-6 sr-only" />
                                    <div :class="[
                                        'w-6 h-6 border-2 rounded flex items-center justify-center transition-colors',
                                        selectedRatings.includes(rating.stars)
                                            ? 'bg-purple-600 border-purple-600'
                                            : 'border-gray-300 bg-white hover:border-purple-600'
                                    ]" @click="toggleRating(rating.stars)">
                                        <svg v-if="selectedRatings.includes(rating.stars)" class="w-4 h-4 text-white"
                                            fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="flex">
                                        <svg v-for="i in 5" :key="i"
                                            :class="i <= rating.stars ? 'text-yellow-400' : 'text-gray-300'"
                                            class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-600">{{ rating.label }}</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Popular Tags -->
                    <div class="mb-8">
                        <h3 class="font-semibold text-lg mb-4">Popular Tag</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Roofing</span>
                            <span class="bg-purple-600 text-white px-3 py-2 rounded-full text-sm">Tiles and
                                Marbles</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Steel and Iron</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Paint and
                                Chemicals</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Cements and
                                Concrete</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Timber</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Block, Kerbs and
                                Interlocks</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Iron</span>
                            <span class="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm">Wood and
                                Timber</span>
                        </div>
                    </div>
                </div>

                <!-- Filter Actions -->
                <div class="sticky bottom-0 bg-white p-4 border-t space-y-3">
                    <button @click="applyFilters"
                        class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Apply Filter
                    </button>
                    <button @click="clearFilters"
                        class="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Mobile state
const showMobileFilter = ref(false)
const mobileSearchQuery = ref('')

// Search state  
const searchQuery = ref('')

// FIXED: Filter states - reset to neutral/empty states
const selectedCategory = ref('') // Empty string instead of 'Circuit Protection Devices'
const selectedRatings = ref([])  // Empty array instead of [4.0]
const selectedPriceRange = ref({
    min: 20000,
    max: 100000  // Full range instead of 80000
})

// Data
const totalResults = ref(12) // Will be updated by computed property

const plumbingCategories = [
    { name: 'Power Distribution Systems', count: 134 },
    { name: 'Circuit Protection Devices', count: 150 },
    { name: 'Wiring & Cabling', count: 54 },
    { name: 'Lighting Systems', count: 47 },
    { name: 'Switches & Sockets', count: 43 },
    { name: 'Control Panels', count: 38 },
    { name: 'Generators & Backup Power', count: 15 }
]

const ratingFilters = [
    { stars: 5.0, label: '5.0' },
    { stars: 4.0, label: '4.0 & up' },
    { stars: 3.0, label: '3.0 & up' },
    { stars: 2.0, label: '2.0 & up' },
    { stars: 1.0, label: '1.0 & up' }
]

const saleProducts = [
    {
        id: 1,
        name: 'Brown Wall Art',
        salePrice: 32000,
        originalPrice: 42000,
        rating: 4,
        image: '/svg/house2.svg'
    },
    {
        id: 2,
        name: 'Side bed piece',
        salePrice: 24000,
        originalPrice: 32000,
        rating: 4,
        image: '/svg/house2.svg'
    },
    {
        id: 3,
        name: 'Center Chair',
        salePrice: 32000,
        originalPrice: 45000,
        rating: 4,
        image: '/svg/house2.svg'
    }
]

// FIXED: Products with categories added
const products = [
    {
        id: 1,
        name: 'Stylish wall art',
        price: 25000,
        rating: 4,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Circuit Protection Devices',
        discount: 0
    },
    {
        id: 2,
        name: 'Elegant table lamp',
        price: 35000,
        rating: 5,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Lighting Systems',
        discount: 0
    },
    {
        id: 3,
        name: 'Chic area rug',
        price: 45000,
        rating: 3,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Power Distribution Systems',
        discount: 0
    },
    {
        id: 4,
        name: 'Modern bookshelf',
        price: 75000,
        rating: 4,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Wiring & Cabling',
        discount: 0
    },
    {
        id: 5,
        name: 'Sleek coffee table',
        price: 55000,
        rating: 5,
        image: '/svg/house2.svg',
        onSale: true,
        category: 'Circuit Protection Devices',
        discount: 50
    },
    {
        id: 6,
        name: 'Contemporary sofa',
        price: 85000,
        rating: 4,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Switches & Sockets',
        discount: 0
    },
    {
        id: 7,
        name: 'Vintage mirror',
        price: 30000,
        rating: 3,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Lighting Systems',
        discount: 0
    },
    {
        id: 8,
        name: 'Artistic vase',
        price: 22000,
        rating: 4,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Control Panels',
        discount: 0
    },
    {
        id: 9,
        name: 'Stylish curtains',
        price: 40000,
        rating: 5,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Power Distribution Systems',
        discount: 0
    },
    {
        id: 10,
        name: 'Minimalist desk',
        price: 65000,
        rating: 4,
        image: '/svg/house2.svg',
        onSale: true,
        category: 'Generators & Backup Power',
        discount: 50
    },
    {
        id: 11,
        name: 'Colorful throw pillows',
        price: 28000,
        rating: 3,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Wiring & Cabling',
        discount: 0
    },
    {
        id: 12,
        name: 'Rustic dining chair',
        price: 48000,
        rating: 5,
        image: '/svg/house2.svg',
        onSale: false,
        category: 'Switches & Sockets',
        discount: 0
    }
]

// FIXED: Computed properties with corrected filtering logic
const filteredProducts = computed(() => {
    let filtered = products.filter(product => {
        // Category filter - only filter if a category is selected
        const matchesCategory = selectedCategory.value === '' ||
            product.category === selectedCategory.value

        // Price range filter
        const matchesPrice = product.price >= selectedPriceRange.value.min &&
            product.price <= selectedPriceRange.value.max

        // Rating filter - only filter if ratings are selected
        const matchesRating = selectedRatings.value.length === 0 ||
            selectedRatings.value.some(rating => product.rating >= rating)

        // Search filter - only filter if search query exists
        const matchesSearch = searchQuery.value === '' ||
            product.name.toLowerCase().includes(searchQuery.value.toLowerCase())

        return matchesCategory && matchesPrice && matchesRating && matchesSearch
    })

    // Update results count
    totalResults.value = filtered.length
    return filtered.slice(0, 16)
})

const mobileDisplayedProducts = computed(() => {
    let filtered = products.filter(product => {
        const matchesCategory = selectedCategory.value === '' ||
            product.category === selectedCategory.value
        const matchesPrice = product.price >= selectedPriceRange.value.min &&
            product.price <= selectedPriceRange.value.max
        const matchesRating = selectedRatings.value.length === 0 ||
            selectedRatings.value.some(rating => product.rating >= rating)
        const matchesSearch = mobileSearchQuery.value === '' ||
            product.name.toLowerCase().includes(mobileSearchQuery.value.toLowerCase())

        return matchesCategory && matchesPrice && matchesRating && matchesSearch
    })

    return filtered.slice(0, 12)
})

// Helper computed property to check if any filters are active
const hasActiveFilters = computed(() => {
    return selectedCategory.value !== '' ||
        selectedRatings.value.length > 0 ||
        selectedPriceRange.value.min > 20000 ||
        selectedPriceRange.value.max < 100000
})

// Methods
const selectCategory = (categoryName) => {
    // Allow deselecting by clicking the same category
    selectedCategory.value = selectedCategory.value === categoryName ? '' : categoryName
}

const toggleRating = (ratingValue) => {
    const index = selectedRatings.value.indexOf(ratingValue)
    if (index > -1) {
        selectedRatings.value.splice(index, 1)
    } else {
        selectedRatings.value.push(ratingValue)
    }
}

const updatePriceFilter = () => {
    // Ensure min doesn't exceed max
    if (selectedPriceRange.value.min > selectedPriceRange.value.max) {
        selectedPriceRange.value.min = selectedPriceRange.value.max
    }
}

const resetPriceRange = () => {
    selectedPriceRange.value = { min: 20000, max: 100000 }
}

const applyFilters = () => {
    showMobileFilter.value = false
}

const clearFilters = () => {
    selectedCategory.value = ''
    selectedRatings.value = []
    selectedPriceRange.value = { min: 20000, max: 100000 }
    searchQuery.value = ''
    mobileSearchQuery.value = ''
    showMobileFilter.value = false
}
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Custom Range Input Styling */
input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
}

input[type="range"]::-webkit-slider-track {
    background: transparent;
    height: 8px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #7600CD;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

input[type="range"]::-moz-range-track {
    background: transparent;
    height: 8px;
    border: none;
}

input[type="range"]::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #7600CD;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

input[type="range"]:focus {
    outline: none;
}

input[type="range"]:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px rgba(118, 0, 205, 0.2);
}

input[type="range"]:focus::-moz-range-thumb {
    box-shadow: 0 0 0 3px rgba(118, 0, 205, 0.2);
}
</style>