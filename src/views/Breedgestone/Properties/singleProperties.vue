<template>
    <main class="font-poppins">
        <!-- Hero Section with Image Gallery -->
        <section class="bg-white">
            <div class="max-w-7xl mx-auto md:px-12 px-4 py-8">
                <!-- Breadcrumb -->
                <div>
                    <button class="flex items-center gap-2">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.613099 6.78973C0.425627 6.97726 0.320312 7.23156 0.320312 7.49673C0.320312 7.76189 0.425628 8.0162 0.613099 8.20373L6.2701 13.8607C6.36235 13.9562 6.47269 14.0324 6.59469 14.0848C6.7167 14.1372 6.84792 14.1648 6.9807 14.166C7.11348 14.1671 7.24516 14.1418 7.36805 14.0915C7.49095 14.0413 7.6026 13.967 7.69649 13.8731C7.79039 13.7792 7.86464 13.6676 7.91492 13.5447C7.9652 13.4218 7.9905 13.2901 7.98935 13.1573C7.9882 13.0245 7.96061 12.8933 7.9082 12.7713C7.85579 12.6493 7.77961 12.539 7.6841 12.4467L3.7341 8.49673L16.9771 8.49673C17.2423 8.49673 17.4967 8.39137 17.6842 8.20383C17.8717 8.0163 17.9771 7.76194 17.9771 7.49673C17.9771 7.23151 17.8717 6.97716 17.6842 6.78962C17.4967 6.60208 17.2423 6.49673 16.9771 6.49673L3.7341 6.49673L7.6841 2.54673C7.86626 2.35812 7.96705 2.10552 7.96477 1.84333C7.96249 1.58113 7.85732 1.33032 7.67192 1.14491C7.48651 0.959501 7.2357 0.854331 6.9735 0.852052C6.7113 0.849774 6.4587 0.950568 6.2701 1.13273L0.613099 6.78973Z"
                                fill="#333333" />
                        </svg>
                        Go back
                    </button>
                </div>
                <div class="flex w-full items-center justify-between">
                    <h1 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6">
                        {{ property.title }}
                    </h1>
                    <p class="text-2xl lg:text-3xl font-bold font-campton text-primary-5">
                        ₦{{ formatPrice(property.price) }}
                        <span class="text-sm text-neutral-4 font-normal" v-if="property.type === 'Rent'">
                            /month
                        </span>
                    </p>
                </div>
                <Tabs :tabs="videosOrPhotos" :activeTab="activeTabForvideosOrPhotos"
                    @update:activeTab="activeTabForvideosOrPhotos = $event" />
                <!-- Property Images -->
                <div class="flex flex-col gap-4 mb-8">
                    <div class="flex gap-4">
                        <img v-for="(image, index) in property.images.slice(0, 4)" :key="index" :src="image"
                            :alt="`${property.title} - Image ${index + 1}`"
                            class="w-full h-28 lg:h-36 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                            :class="{ 'ring-2 ring-primary-5': activeImage === image }" @click="activeImage = image" />
                    </div>
                    <!-- Main Image -->
                    <div class="relative">
                        <img :src="activeImage" :alt="property.title"
                            class="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg cursor-pointer"
                            @click="openImageModal" />
                        <button @click="openImageModal"
                            class="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm hover:bg-black/80 transition">
                            View All Photos ({{ property.images.length }})
                        </button>
                    </div>

                    <!-- Thumbnail Grid -->

                </div>
            </div>
        </section>



        <!-- Similar Properties -->
        <section class="bg-white py-12">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <h2 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6 mb-8">
                    Recommended for you
                </h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <PropertyCard v-for="similarProperty in similarProperties" :key="similarProperty.id"
                        :property="similarProperty" @click="goToProperty(similarProperty.id)" />
                </div>
            </div>
        </section>
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <p class="font-semibold text-center text-neutral-9 uppercase mb-2 tracking-wide">
                    GET ALL THE ANSWERS TO YOUR QUESTIONS
                </p>
                <h2 class="font-campton text-center lg:text-3xl xl:text-4xl text-2xl font-bold mb-8">
                    Frequently Asked Questions
                </h2>
                <div
                    class="w-full flex flex-col xl:flex-row xl:gap-12 gap-6 items-center xl:items-start justify-center">
                    <!-- FAQ List -->
                    <div class="w-full xl:w-1/2 flex flex-col gap-4">
                        <FaqAccordion v-for="(faq, i) in faqs.slice(0, Math.ceil(faqs.length / 2))" :key="faq.question"
                            :faq="faq" :active="activeFaq === i" @toggle="activeFaq = activeFaq === i ? null : i" />
                    </div>
                    <div class="w-full xl:w-1/2 flex flex-col gap-4">
                        <FaqAccordion v-for="(faq, i) in faqs.slice(Math.ceil(faqs.length / 2))" :key="faq.question"
                            :faq="faq" :active="activeFaq === i + Math.ceil(faqs.length / 2)"
                            @toggle="activeFaq = activeFaq === i + Math.ceil(faqs.length / 2) ? null : i + Math.ceil(faqs.length / 2)" />
                    </div>
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
import FaqAccordion from '@/components/FaqAccordion.vue'
import { dummy } from '../../dummy'
import Tabs from '@/components/Tabs.vue'

const route = useRoute()
const router = useRouter()

// Reactive data
const activeImage = ref('')
const showImageModal = ref(false)
const modalImage = ref('')
const isWishlisted = ref(false)
const videosOrPhotos = ref(['videos', 'photos'])
const activeTabForvideosOrPhotos = ref('videos');
// Mock property data - in real app, fetch by route.params.id
const property = ref({
    id: route.params.id || 1,
    title: '6 Bedroom Detached Duplex',
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
const faqs = [
    {
        question: "How do you ensure trust?",
        answer: "Breedgestone builds trust by verifying agents, detecting fraud, and allowing community ratings, ensuring every user enjoys a safe, reliable experience online.",
        icon: "../../assets/svg/faq-trust.svg"
    },
    {
        question: "Can I buy furniture here?",
        answer: "Yes, you can browse and purchase furniture directly from our marketplace.",
        icon: "../../assets/svg/faq-furniture.svg"
    },
    {
        question: "Is it optimized for low data?",
        answer: "Our platform is designed to work efficiently even on low data connections.",
        icon: "../../assets/svg/faq-data.svg"
    },
    {
        question: "What makes Breedgestone different?",
        answer: "We combine verified listings, expert support, and a seamless experience for buyers and renters.",
        icon: "../../assets/svg/faq-different.svg"
    },
    {
        question: "How does AI search work?",
        answer: "Our AI search matches you with the best properties based on your preferences and needs.",
        icon: "../../assets/svg/faq-ai.svg"
    },
    {
        question: "What payment methods are supported?",
        answer: "We support multiple secure payment options for your convenience.",
        icon: "../../assets/svg/faq-payment.svg"
    }
];
const activeFaq = ref(0)
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