<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-[#F7F7FD]">
      <div
        class="bg-[#F7F7FD] md:py-16 py-8 max-w-[1920px] mx-auto min-h-[70vh] bg-center bg-no-repeat relative lg:bg-cover lg:bg-[url('/hero.png')] sm:bg-[url('/mobile-hero.png')]">
        <div class="relative z-10 flex items-center px-4 md:px-12 max-w-7xl">
          <div class="2xl:w-[570px] xl:w-[450px] lg:w-[300px]">
            <h1 class="text-2xl font-campton text-neutral-5 lg:text-3xl xl:text-5xl font-bold leading-tight">
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
        <div class="sm:w-3/5 w-full min-w-fit px-4 md:px-12 max-w-7xl">
          <!-- Tabs -->
          <div
            class="flex justify-around bg-primary-0 rounded-t-lg gap-4 px-3 pt-3 border-b border-primary-1 sm:w-fit w-full">
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
          <div class="p-5 rounded-lg bg-primary-0 sm:block hidden">
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
        <h2 class="font-campton font-bold 2xl:text-4xl xl:text-3xl md:text-2xl text-xl">
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
          <h3 class="font-bold max-w-[700px] font-campton lg:text-3xl xl:text-5xl text-2xl">
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
              <p class="mt-2 text-neutral-3">Service description for tenants.</p>
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
              <p class="mt-2 text-neutral-3">Service description for builders.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-[#312F4B] w-full my-8"></div>
      <div class="w-full text-primary-0 sm:gap-8 gap-4 flex justify-center items-center">
        <div class="flex flex-col">
          <h4>7.4%</h4>
          <p>Property Return Rate</p>
        </div>
        <div class="flex flex-col">
          <h4>7.4%</h4>
          <p>Property Return Rate</p>
        </div>
        <div class="flex flex-col">
          <h4>7.4%</h4>
          <p>Property Return Rate</p>
        </div>
      </div>
    </section>

    <!-- Properties Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-2xl font-bold mb-6">Based on Your Need</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="bg-neutral-7 rounded-lg overflow-hidden">
            <img alt="Property image placeholder" class="w-full h-40 bg-neutral-6" />
            <div class="p-4">
              <p class="font-semibold">Property title</p>
              <p class="text-sm text-neutral-3">Price / details</p>
            </div>
          </div>
          <div class="bg-neutral-7 rounded-lg overflow-hidden">
            <img alt="Property image placeholder" class="border w-full h-40 bg-neutral-6" />
            <div class="p-4">
              <p class="font-semibold">Property title</p>
              <p class="text-sm text-neutral-3">Price / details</p>
            </div>
          </div>
          <!-- Repeat cards -->
        </div>
      </div>
    </section>

    <!-- Materials -->
    <section class="py-16 bg-neutral-1">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-2xl font-bold mb-6">Materials That Make Spaces</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div class="bg-white rounded-lg p-4 shadow">
            <img alt="Material image placeholder" class="w-full h-32 border bg-neutral-6" />
            <p class="mt-3 text-sm">Category</p>
          </div>
          <!-- Repeat cards -->
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
import { ref } from 'vue'

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules'

const modules = [Navigation, Scrollbar, A11y, Autoplay]

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const activeTab = ref('Purchase')
const tabs = ['Purchase', 'Rent', 'Shortlet']

const location = ref('')
const moveInDate = ref('')

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
