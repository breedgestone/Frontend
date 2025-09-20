<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[#F7F7FD]">
      <div
        class="bg-[#F7F7FD] md:py-16 py-8 max-w-[1920px] mx-auto xl:min-h-[100vh] min-h-[70vh] bg-center bg-no-repeat relative lg:bg-cover lg:bg-[url('/hero.png')] sm:bg-[url('/mobilehero.svg')]">
        <div class="absolute inset-0 z-0 bg-[#F7F7FD]/95 lg:hidden sm:block hidden"></div>

        <div class="relative z-10 mb-16 flex items-center px-4 md:px-12 max-w-7xl">
          <div class="2xl:w-[570px] xl:w-[450px] lg:w-[300px]">
            <h1 class="text-2xl font-campton text-neutral-5 sm:text-3xl xl:text-4xl font-bold leading-tight">
              Africa’s Trusted Hub for Living and Building
            </h1>
            <p class="mt-4 text-neutral-5 font-poppins xl:text-lg max-w-xl">
              A one-stop lifestyle marketplace redefining how Nigerians and Africans find, furnish,
              and build their homes.
            </p>
            <div class="flex mt-6 mb-10 space-x-8 items-center">
              <div class="border-l border-primary-0-5 px-6 flex flex-col w-fit">
                <h3 class="font-bold font-campton text-neutral-5 text-xl">{{ '50k+' }}</h3>
                <p>Renters</p>
              </div>
              <div class="border-l px-6 border-primary-0-5 flex flex-col w-fit">
                <h3 class="font-bold font-campton text-neutral-5 text-xl">{{ '10k+' }}</h3>
                <p>properties</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:w-3/5  relative z-10   w-full min-w-fit px-4 md:px-12 max-w-7xl">
          <!-- Tabs -->
          <div
            class="flex flex-wrap justify-around bg-primary-0 rounded-t-lg gap-4 px-3 pt-3 border-b border-primary-1 sm:w-fit w-full">
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
              ' p-2 text-sm font-semibold relative transition-colors',
              activeTab === tab
                ? 'text-primary-5  border-b-2 border-primary-5  rounded-t-2xl'
                : 'text-neutral-5 hover:text-neutral-9',
            ]">
              {{ tab }}
            </button>
          </div>
          <!-- Form -->
          <div class="p-5 rounded-lg bg-primary-0  sm:block hidden">
            <div class="flex flex-col sm:flex-row gap-6 items-end">
              <!-- Location -->
              <div class="flex-1 flex flex-col">
                <label class="text-sm text-neutral-7 mb-2">Location</label>
                <input v-model="location" type="text" placeholder="Enter your Location"
                  class="border-0 border-neutral-3 font-semibold text-sm text-neutral-9 placeholder-neutral-4 focus:outline-none focus:border-color-primary-5" />
              </div>

              <!-- Date Picker -->
              <div class="flex-1 flex flex-col relative">
                <label class="text-sm text-neutral-7 mb-2">When</label>
                <input v-model="moveInDate" type="date"
                  class="border-0 font-semibold border-neutral-3 text-sm text-neutral-9 focus:outline-none focus:border-color-primary-5 relative" />
              </div>
              <B-button class="flex-1 flex flex-col relative" @click="handleSearch" size="lg">
                Browse Properties
              </B-button>
            </div>

            <!-- Browse Button -->
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Companies -->
    <section class="py-8 bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class=" font-bold font-campton lg:text-3xl xl:text-4xl text-2xl">
          Many Companies Trust Breedgestone
        </h2>
        <div class="flex justify-between flex-wrap gap-8 mt-8 text-neutral-4">
          <swiper :slides-per-view="5" :modules="modules" :space-between="50" @swiper="onSwiper"
            @slideChange="onSlideChange" :autoplay="{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }">
            <swiper-slide> <img src="../../assets/svg/notion.svg" alt="" /></swiper-slide>
            <swiper-slide> <img src="../../assets/svg/notion.svg" alt="" /></swiper-slide>
            <swiper-slide> <img src="../../assets/svg/notion.svg" alt="" /></swiper-slide>
            <swiper-slide> <img src="../../assets/svg/notion.svg" alt="" /></swiper-slide>
            <swiper-slide> <img src="../../assets/svg/notion.svg" alt="" /></swiper-slide>
            <swiper-slide> <img src="../../assets/svg/notion.svg" alt="" /></swiper-slide>
            <swiper-slide> <img src="../../assets/svg/notion.svg" alt="" /></swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 bg-neutral-8">
      <div class="max-w-7xl mx-auto px-6 text-primary-0">
        <img src="../../assets/svg/three-yellow-stars.svg" alt="breedgestone three yellow stars" />
        <div class="flex md:flex-row flex-col w-full justify-between gap-3 mt-8">
          <h3 class="font-bold max-w-[700px] font-campton lg:text-3xl xl:text-4xl text-2xl">
            We Make it Easy for <span class="text-primary-5">TENANTS</span> and
            <span class="text-primary-5">LANDLORDS</span>
          </h3>
          <p class=" max-w-[406px]">
            Whether you’re looking to rent a cozy shortlet, or purchase your dream home, we simplify
            the process for you. The best part? You’ll save both time and money with our expert
            services.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mt-10">

          <div class="flex items-start gap-2 bg-primary-5 p-6 rounded-lg">
            <img src="../../assets/svg/media-whitebg.svg" alt="">
            <div class="">
              <h3 class="font-bold">Tenants</h3>
              <p class="mt-2 text-primary-0">Service description for tenants.</p>
            </div>
          </div>
          <div class="flex items-start gap-2 bg-primary-0 text-neutral-9 p-6 rounded-lg">
            <img src="../../assets/svg/purple-home.svg" alt="">
            <div class="">
              <h3 class="font-bold">Landlords</h3>
              <p class="mt-2 text-neutral-3">Service description for landlords.</p>
            </div>
          </div>
          <div class="flex items-start gap-2 bg-primary-5 p-6 rounded-lg">
            <img src="../../assets/svg/getReady.svg" alt="">
            <div class="">
              <h3 class="font-bold">Builders</h3>
              <p class="mt-2 text-primary-0">Service description for builders.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-[#312F4B] w-full my-8"></div>
      <div
        class="w-full px-6 text-primary-0 sm:gap-8 gap-4 flex sm:flex-row flex-col justify-center items-center sm:text-left text-center">
        <div class="flex flex-col ">
          <h4 class="font-bold text-xl">7.4%</h4>
          <p class="opacity-70 font-poppins">Property Return Rate</p>
        </div>
        <div class="flex flex-col sm:border-x border-x-0 border-y sm:border-y-0 sm:px-6 px-0 sm:py-0 py-6 ">
          <h4 class="font-bold text-xl">3,856</h4>
          <p class="opacity-70 font-poppins">Property in sell & Rent</p>
        </div>
        <div class="flex flex-col">
          <h4 class="font-bold text-xl">2540</h4>
          <p class="opacity-70 font-poppins">Daily Completed Transactions</p>
        </div>
      </div>
    </section>

    <!-- Properties Section -->
    <section class="py-16 bg-[#F9F9F9]">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold mb-6">Based on Your Need</h2>

        <!-- Tabs -->
        <div class="flex sm:flex-row mb-6 gap-3 flex-col-reverse sm:justify-between justify-center">

          <div
            class="flex flex-wrap gap-4 bg-primary-0-5/50 px-4 py-2 rounded-lg w-fit focus:border-primary-0-5/50 focus:ring-primary-0-5/50 ">
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
              'sm:px-5 px-3 py-2 rounded-[6px] font-medium transition',
              activeTab === tab
                ? 'bg-primary-0 text-neutral-5 border-primary-3 shadow-lg shadow-primary-0-5  border-2'
                : 'text-neutral-7  hover:bg-primary-0-5',
            ]">
              {{ tab }}
            </button>
          </div>
          <input class=" rounded-lg border-neutral-2 border-2 p-4" type="search" placeholder="search" name="" id="">
        </div>

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 font-poppins">
          <PropertyCard @click="clicked(property.id)" v-for="property in filteredProperties" :key="property.id"
            :property="property" />

        </div>

        <!-- Browse more button -->
        <div class="flex justify-center mt-10">
          <B-button size="xl" variant="outline"> Browse more properties
          </B-button>
        </div>
      </div>
    </section>


    <!-- Materials -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold mb-1">Materials That Make Spaces</h2>
        <p class="font-poppins text-neutral-4 lg:text-lg mb-6">Whether you’re building from the ground up or finishing
          with décor, we
          supply
          the essentials that bring every space to life.</p>
        <div class="flex items-center mb-3 gap-2 justify-between">
          <h4 class="font-campton text-lg  font-semibold">Best Seller Products</h4>
          <router-link class="text-primary-5 flex items-center gap-2 hover:translate-x-1" to="/products">View all <svg
              width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2178 7H1.21777" stroke="#7600CD" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M10.168 0.974609L16.218 6.99861L10.168 13.0236" stroke="#7600CD" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </router-link>
        </div>
        <div class="grid font-poppins sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          <div @click="router.push({ name: 'productDetails', params: { id: index + 1 } })" role="button"
            class="bg-white rounded-lg sm:w-[300px] w-full shadow group relative transition-all hover:shadow-primary-5"
            v-for="(item, index) in 4">
            <!-- Image container for hover effect -->
            <div class="relative">
              <img alt="Material image placeholder" src="/public/svg/house2.svg"
                class="w-full h-[246px] object-cover rounded-t-lg" />
              <!-- Overlay only on image -->
              <div
                class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-end p-4 justify-center z-10">
                <button>

                  <img src="../../assets/svg/whiteWishlist.svg" alt="Cart" class="mb-4 w-8 h-8" />
                </button>
                <button>

                  <img src="../../assets/svg/whiteEyes.svg" alt="Wishlist" class="w-8 h-8" />
                </button>
              </div>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <p class="mt-3 text-sm text-[#4D4D4D]">Emerald Velvet</p>
                <p class="font-semibold text-neutral-9 mb-2">₦85,000.00</p>
                <star-rating :modelValue="3" />
              </div>
              <button class="rounded-full cursor-pointer hover:shadow">
                <img src="../../assets/svg/ashCart.svg" alt="">
              </button>
            </div>
          </div>
          <!-- Repeat cards -->
        </div>
        <div class="flex xl:flex-nowrap flex-wrap gap-8 mt-8 w-full">
          <div class="flex font-poppins flex-col gap-8 w-full md:flex-row">
            <!-- Hot Deals -->
            <div class="flex-1">
              <h3 class="font-bold font-campton  text-xl mb-4">Hot Deals</h3>
              <div class="flex flex-col gap-6">
                <div v-for="item in 3" class="bg-white rounded-xl shadow p-1 flex gap-4 items-center">
                  <img src="/public/svg/hotdeals.svg" alt="Emerald Oasis" class="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <p class="font-poppins text-sm text-neutral-700">Emerald Oasis</p>
                    <p class="font-semibold text-neutral-900">₦85,000.00</p>
                    <star-rating :modelValue="4" />
                  </div>
                </div>

              </div>
            </div>
            <!-- Best Seller -->
            <div class="flex-1">
              <h3 class="font-bold  font-campton text-xl mb-4">Best Seller</h3>
              <div class="flex flex-col gap-6">
                <div v-for="item in 3" class="bg-white rounded-xl shadow p-1 flex gap-4 items-center">
                  <img src="/public/svg/bestseller.svg" alt="Royal Velvet" class="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <p class="font-poppins text-sm text-neutral-700">Royal Velvet</p>
                    <p class="font-semibold text-neutral-900">₦85,000.00</p>
                    <star-rating :modelValue="4" />
                  </div>
                </div>

              </div>
            </div>
            <!-- Top Rated -->
            <div class="flex-1">
              <h3 class="font-bold font-campton  text-xl mb-4">Top Rated</h3>
              <div class="flex flex-col gap-6">
                <div v-for="item in 3" class="bg-white rounded-xl shadow p-1 flex gap-4 items-center">
                  <img src="/public/svg/topRated.svg" alt="Giant Rustic" class="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <p class="font-poppins text-sm text-neutral-700">Giant Rustic</p>
                    <p class="font-semibold text-neutral-900">₦85,000.00</p>
                    <star-rating :modelValue="4" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="hidden lg:flex items-center justify-center">
            <img class="flex-1" src="../../assets/svg/yellowSales.svg" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- Highlight Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img alt="Featured property image placeholder" class="w-full h-64 bg-neutral-7 rounded-lg" />
        </div>
        <div>
          <h2 class="text-2xl font-bold">Find the Perfect Home to Own</h2>
          <p class="mt-4 text-neutral-3">Details about the feature.</p>
          <button class="mt-6 px-6 py-3 bg-color-primary-5 text-white rounded-lg hover:bg-color-primary-4">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Designer Spaces -->
    <section class="py-16 bg-neutral-1">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-2xl font-bold">Get a Designer Space You’ll Love</h2>
          <p class="mt-4 text-neutral-3">Details about design services.</p>
          <button class="mt-6 px-6 py-3 bg-color-primary-5 text-white rounded-lg hover:bg-color-primary-4">
            Explore Designs
          </button>
        </div>
        <div>
          <img alt="Designer chair placeholder" class="w-full h-64 bg-neutral-7 border rounded-lg" />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <details class="p-4 bg-neutral-1 rounded-lg">
            <summary class="font-semibold cursor-pointer">How does it work?</summary>
            <p class="mt-2 text-neutral-3">Answer goes here.</p>
          </details>
          <details class="p-4 bg-neutral-1 rounded-lg">
            <summary class="font-semibold cursor-pointer">Is Breedgestone affordable?</summary>
            <p class="mt-2 text-neutral-3">Answer goes here.</p>
          </details>
          <!-- More FAQs -->
        </div>
      </div>
    </section>

    <!-- Mobile App CTA -->
    <section class="py-16 bg-neutral-1">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-2xl font-bold">Enjoy All the Benefits from Our MobileApp</h2>
          <p class="mt-4 text-neutral-3">Download and enjoy features.</p>
          <button class="mt-6 px-6 py-3 bg-color-primary-5 text-white rounded-lg hover:bg-color-primary-4">
            Download Now
          </button>
        </div>
        <div>
          <img alt="Mobile app mockup placeholder" class="w-full border h-64 bg-neutral-7 rounded-lg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import StarRating from '@/components/StarRating.vue'
import PropertyCard from "@/components/PropertyCard.vue"

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { useRouter } from 'vue-router'
const router = useRouter()
const modules = [Navigation, Scrollbar, A11y, Autoplay]

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const clicked = (id) => {
  router.push({ name: 'productDetails', params: { id } })
}
const activeTab = ref('Rent')
const tabs = ['Purchase', 'Rent', 'Shortlet']

const location = ref('')
const moveInDate = ref('')
const allProperties = ref([
  {
    id: 1,
    type: "Rent",
    title: "6 Bedroom Detached Duplex With Rooftop Terrace",
    price: "₦2,700,000.00 ",
    location: "Abuja, Nigeria",
    image: "house4.svg",
    beds: 6,
    baths: 2,
    duration: " Year",
    size: "5x7 m²",
  },
  {
    id: 2,
    type: "Buy",
    title: "Luxury 4 Bedroom Duplex",
    price: "₦120,000,000.00",
    location: "Lagos, Nigeria",
    image: "house2.svg",
    beds: 4,
    baths: 3,
    duration: " Year",
    size: "6x8 m²",
  },
  {
    id: 3,
    type: "Shortlet",
    title: "Modern 3 Bedroom Apartment",
    price: "₦80,000.00 ",
    location: "Port Harcourt, Nigeria",
    image: "house3.svg",
    beds: 3,
    baths: 2,
    duration: " Night",
    size: "4x6 m²",
  },
  {
    id: 4,
    type: "Rent",
    title: "Cozy 2 Bedroom Flat",
    price: "₦900,000.00 ",
    location: "Ibadan, Nigeria",
    image: "house1.svg",
    beds: 2,
    baths: 1,
    duration: " Year",
    size: "3x5 m²",
  },
  {
    id: 4,
    type: "Rent",
    title: "Cozy 2 Bedroom Flat",
    price: "₦900,000.00 ",
    location: "Ibadan, Nigeria",
    image: "house2.svg",
    beds: 2,
    baths: 1,
    duration: " Year",
    size: "3x5 m²",
  },
  {
    id: 4,
    type: "Rent",
    title: "Cozy 2 Bedroom Flat",
    price: "₦900,000.00 ",
    location: "Ibadan, Nigeria",
    image: "house3.svg",
    beds: 2,
    baths: 1,
    duration: " Year",
    size: "3x5 m²",
  },
])
const filteredProperties = computed(() => {
  console.log("Filtering properties for tab:", activeTab.value, allProperties.value);

  return allProperties.value.filter((p) => p.type === activeTab.value)
})
console.log("Filtered Properties:", filteredProperties.value);

const handleSearch = () => {
  const searchData = {
    type: activeTab.value,
    location: location.value,
    moveInDate: moveInDate.value,
  }

  console.log('Search data:', searchData)

  if (!location.value) {
    alert('Please enter a location')
    return
  }

  alert(`Searching for ${activeTab.value.toLowerCase()} properties in ${location.value}`)
}
</script>
