<template>
    <main class="font-poppins">
        <!-- Hero Section with Image Gallery -->
        <section class="bg-white">
            <div class="max-w-7xl mx-auto md:px-12 px-4 py-8">
                <!-- Breadcrumb -->
                <nav class="flex mb-6 text-sm text-neutral-4">
                    <router-link to="/" class="hover:text-primary-5">Home</router-link>
                    <span class="mx-2">/</span>
                    <router-link to="/properties" class="hover:text-primary-5">Properties</router-link>
                    <span class="mx-2">/</span>
                    <span class="text-neutral-6 font-medium">{{ property.title }}</span>
                </nav>

                <!-- Property Images -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                    <!-- Main Image -->
                    <div class="lg:col-span-2 relative">
                        <img :src="activeImage" :alt="property.title"
                            class="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg cursor-pointer"
                            @click="openImageModal" />
                        <button @click="openImageModal"
                            class="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm hover:bg-black/80 transition">
                            View All Photos ({{ property.images.length }})
                        </button>
                    </div>

                    <!-- Thumbnail Grid -->
                    <div class="grid grid-cols-2 lg:grid-cols-1 gap-4">
                        <img v-for="(image, index) in property.images.slice(0, 4)" :key="index" :src="image"
                            :alt="`${property.title} - Image ${index + 1}`"
                            class="w-full h-28 lg:h-36 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                            :class="{ 'ring-2 ring-primary-5': activeImage === image }" @click="activeImage = image" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Property Details Section -->
        <section class="bg-primary-0 py-12">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <div class="grid lg:grid-cols-3 gap-8">
                    <!-- Left Column - Property Info -->
                    <div class="lg:col-span-2">
                        <!-- Property Header -->
                        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
                            <div class="flex flex-col sm:flex-row justify-between items-start mb-4">
                                <div>
                                    <span
                                        class="inline-block bg-primary-1 text-primary-5 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                                        For {{ property.type }}
                                    </span>
                                    <h1 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6">
                                        {{ property.title }}
                                    </h1>
                                    <p class="text-neutral-5 mt-2 flex items-center">
                                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        {{ property.location }}
                                    </p>
                                </div>
                                <div class="text-right mt-4 sm:mt-0">
                                    <p class="text-2xl lg:text-3xl font-bold font-campton text-primary-5">
                                        ₦{{ formatPrice(property.price) }}
                                        <span class="text-sm text-neutral-4 font-normal"
                                            v-if="property.type === 'Rent'">
                                            /month
                                        </span>
                                    </p>
                                    <p class="text-sm text-neutral-4">{{ property.category }} Property</p>
                                </div>
                            </div>

                            <!-- Property Features -->
                            <div class="flex flex-wrap gap-6 pt-4 border-t border-neutral-2">
                                <div class="flex items-center gap-2">
                                    <img src="/svg/house1.svg" alt="Bedrooms" class="w-6 h-6" />
                                    <span class="text-neutral-5 text-sm">{{ property.beds }} Bedrooms</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <img src="/svg/house2.svg" alt="Bathrooms" class="w-6 h-6" />
                                    <span class="text-neutral-5 text-sm">{{ property.baths }} Bathrooms</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-6 h-6 text-neutral-5" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2m-6 12V10m0 0V8a2 2 0 00-2-2H8a2 2 0 00-2 2v2m8 0V8">
                                        </path>
                                    </svg>
                                    <span class="text-neutral-5 text-sm">{{ property.sqft || '2,500' }} sqft</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-6 h-6 text-neutral-5" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 8h6m-6 4h6"></path>
                                    </svg>
                                    <span class="text-neutral-5 text-sm">Parking Available</span>
                                </div>
                            </div>
                        </div>

                        <!-- Description -->
                        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
                            <h2 class="text-xl font-bold font-campton text-neutral-6 mb-4">Description</h2>
                            <p class="text-neutral-5 leading-relaxed mb-4">
                                {{ property.description || `This stunning ${property.beds}-bedroom property offers the
                                perfect blend of modern comfort and elegant design. Located in the heart of
                                ${property.location}, this home features spacious living areas, premium finishes, and
                                thoughtful layouts designed for contemporary living.` }}
                            </p>
                            <div class="space-y-2 text-sm text-neutral-5">
                                <p>✓ Premium location with easy access to major roads</p>
                                <p>✓ Modern kitchen with high-end appliances</p>
                                <p>✓ Spacious bedrooms with built-in wardrobes</p>
                                <p>✓ Secure parking and 24/7 security</p>
                                <p>✓ Close to schools, hospitals, and shopping centers</p>
                            </div>
                        </div>

                        <!-- Amenities -->
                        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
                            <h2 class="text-xl font-bold font-campton text-neutral-6 mb-4">Key Features & Amenities</h2>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div v-for="amenity in amenities" :key="amenity" class="flex items-center gap-2">
                                    <div class="w-2 h-2 bg-primary-5 rounded-full"></div>
                                    <span class="text-neutral-5 text-sm">{{ amenity }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Location Map -->
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h2 class="text-xl font-bold font-campton text-neutral-6 mb-4">Location</h2>
                            <div class="bg-neutral-1 rounded-lg h-64 flex items-center justify-center">
                                <div class="text-center text-neutral-4">
                                    <svg class="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p class="text-sm">Interactive Map</p>
                                    <p class="text-xs">{{ property.location }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Contact & Actions -->
                    <div class="lg:col-span-1">
                        <!-- Contact Card -->
                        <div class="bg-white rounded-lg shadow-lg p-6 mb-6 sticky top-8">
                            <div class="text-center mb-6">
                                <div
                                    class="w-16 h-16 bg-primary-1 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span class="text-primary-5 font-bold text-xl">{{ getInitials(agent.name) }}</span>
                                </div>
                                <h3 class="font-bold text-neutral-6">{{ agent.name }}</h3>
                                <p class="text-sm text-neutral-4">{{ agent.title }}</p>
                                <div class="flex items-center justify-center gap-1 mt-2">
                                    <StarRating :modelValue="agent.rating" color="#1C55E0" unratedColor="#eee" />
                                    <span class="text-xs text-neutral-4 ml-1">({{ agent.reviews }} reviews)</span>
                                </div>
                            </div>

                            <div class="space-y-3">
                                <button @click="contactAgent"
                                    class="w-full bg-primary-5 text-white py-3 rounded-lg font-semibold hover:bg-primary-6 transition">
                                    Contact Agent
                                </button>

                                <button @click="scheduleViewing"
                                    class="w-full border border-primary-5 text-primary-5 py-3 rounded-lg font-semibold hover:bg-primary-1 transition">
                                    Schedule Viewing
                                </button>

                                <button @click="toggleWishlist"
                                    class="w-full border border-neutral-3 text-neutral-5 py-3 rounded-lg font-semibold hover:bg-neutral-1 transition flex items-center justify-center gap-2">
                                    <svg :class="isWishlisted ? 'fill-red-500 text-red-500' : 'text-neutral-5'"
                                        class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    {{ isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist' }}
                                </button>
                            </div>

                            <div class="mt-6 pt-6 border-t border-neutral-2">
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-sm text-neutral-4">Property ID:</span>
                                    <span class="text-sm font-medium text-neutral-6">#{{ property.id }}</span>
                                </div>
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-sm text-neutral-4">Listed:</span>
                                    <span class="text-sm text-neutral-6">{{ formatDate(property.listedDate) }}</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-neutral-4">Type:</span>
                                    <span class="text-sm text-neutral-6">{{ property.type }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Stats -->
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="font-bold text-neutral-6 mb-4">Property Statistics</h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-sm text-neutral-4">Views this month:</span>
                                    <span class="text-sm font-medium text-neutral-6">{{ Math.floor(Math.random() * 200)
                                        + 50 }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-neutral-4">Times favorited:</span>
                                    <span class="text-sm font-medium text-neutral-6">{{ Math.floor(Math.random() * 50) +
                                        10 }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-sm text-neutral-4">Price per sqft:</span>
                                    <span class="text-sm font-medium text-neutral-6">₦{{ Math.floor(property.price /
                                        2500).toLocaleString() }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Similar Properties -->
        <section class="bg-white py-12">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <h2 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6 mb-8">
                    Similar Properties
                </h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <PropertyCard v-for="similarProperty in similarProperties" :key="similarProperty.id"
                        :property="similarProperty" @click="goToProperty(similarProperty.id)" />
                </div>
            </div>
        </section>

        <!-- Image Modal -->
        <div v-if="showImageModal" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            @click="closeImageModal">
            <div class="relative max-w-4xl max-h-full">
                <button @click="closeImageModal"
                    class="absolute -top-12 right-0 text-white hover:text-neutral-3 transition">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img :src="modalImage" :alt="property.title" class="max-w-full max-h-full object-contain rounded-lg"
                    @click.stop />
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <button v-for="(image, index) in property.images" :key="index" @click="modalImage = image"
                        class="w-3 h-3 rounded-full transition"
                        :class="modalImage === image ? 'bg-white' : 'bg-white/50 hover:bg-white/75'"></button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PropertyCard from '@/components/PropertyCard.vue'
import StarRating from '@/components/StarRating.vue'
import { dummy } from '../../dummy'

const route = useRoute()
const router = useRouter()

// Reactive data
const activeImage = ref('')
const showImageModal = ref(false)
const modalImage = ref('')
const isWishlisted = ref(false)

// Mock property data - in real app, fetch by route.params.id
const property = ref({
    id: route.params.id || 1,
    title: '6 Bedroom Detached Duplex With Rooftop Terrace',
    location: 'Abuja, Nigeria',
    price: 85000000,
    type: 'Buy',
    category: 'Luxury',
    beds: 6,
    baths: 4,
    sqft: 3500,
    description: 'This magnificent 6-bedroom detached duplex represents the pinnacle of luxury living in Abuja. Featuring a stunning rooftop terrace with panoramic city views, this property combines contemporary design with premium finishes throughout.',
    images: [
        '/svg/house2.svg',
        '/svg/house2.svg',
        '/svg/house2.svg',
        '/svg/house2.svg',
        '/svg/house2.svg'
    ],
    listedDate: new Date('2024-01-15')
})

// Mock agent data
const agent = ref({
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    rating: 4.8,
    reviews: 127,
    phone: '+234 812 345 6789',
    email: 'sarah@realestate.com'
})

// Amenities list
const amenities = ref([
    'Air Conditioning',
    'Swimming Pool',
    'Gym/Fitness Center',
    'Security System',
    'Parking Garage',
    'Garden/Landscaping',
    'Modern Kitchen',
    'Walk-in Closets',
    'Balcony/Terrace',
    'High-speed Internet',
    'Backup Generator',
    'CCTV Surveillance'
])

// Computed properties
const similarProperties = computed(() => {
    return dummy.filter(p =>
        p.type === property.value.type &&
        p.id !== property.value.id
    ).slice(0, 4)
})

// Methods
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG').format(price)
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const openImageModal = () => {
    showImageModal.value = true
    modalImage.value = activeImage.value
}

const closeImageModal = () => {
    showImageModal.value = false
}

const contactAgent = () => {
    // Implement contact functionality
    alert('Contact agent functionality - integrate with your contact system')
}

const scheduleViewing = () => {
    // Implement scheduling functionality
    alert('Schedule viewing functionality - integrate with your booking system')
}

const toggleWishlist = () => {
    isWishlisted.value = !isWishlisted.value
}

const goToProperty = (id) => {
    router.push({ name: 'property-single', params: { id } })
}

// Lifecycle
onMounted(() => {
    // Set first image as active
    if (property.value.images.length > 0) {
        activeImage.value = property.value.images[0]
    }

    // In real app, fetch property data here
    // fetchProperty(route.params.id)
})
</script>