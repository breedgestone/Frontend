<template>
  <div class="sm:bg-primary-0 bg-[#F9F9F9]">
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
      <div class="max-w-7xl mx-auto md:px-12 px-4 text-center">
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
      <div class="max-w-7xl mx-auto md:px-12 px-4 text-primary-0">
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
      <div class="max-w-7xl mx-auto md:px-12 px-4">
        <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold mb-6">Based on Your Need</h2>

        <!-- Tabs -->
        <div class="flex sm:flex-row mb-6 gap-3 flex-col-reverse sm:justify-between justify-center">

          <Tabs :tabs="tabs" :activeTab="activeTab" @update:activeTab="activeTab = $event" />

          <input class=" rounded-lg border-neutral-2 border-2 p-4" type="search" placeholder="search" name="" id="">
        </div>

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 font-poppins">
          <PropertyCard @click="clicked(property.id)" v-for="property in filteredProperties" :key="property.id"
            :property="property" />

        </div>

        <!-- Browse more button -->
        <div class="flex justify-center mt-10">
          <B-button @click="router.push(`/properties/${activeTab.toLowerCase()}`)" size="xl" variant="outline"> Browse
            more properties
          </B-button>
        </div>
      </div>
    </section>


    <!-- Materials -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto md:px-12 px-4 ">
        <img src="../../assets/svg/three-yellow-stars-white-bg.svg" alt="breedgestone three yellow stars" />
        <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold my-1">Materials That Make Spaces</h2>
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
          <div class="flex  font-poppins flex-col gap-8 w-full md:flex-row">
            <!-- Hot Deals -->
            <div class="flex-1">
              <h3 class="font-semibold text-neutral-5 font-campton  text-xl mb-4">Hot Deals</h3>
              <div class="flex flex-col gap-6">
                <div v-for="item in 3" class="bg-white rounded-xl shadow p-1 flex gap-4 items-center">
                  <img src="/public/svg/hotdeals.svg" alt="Emerald Oasis" class="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <p class="font-poppins text-xs text-neutral-700">Emerald Oasis</p>
                    <p class=" text-neutral-900">₦85,000.00</p>
                    <star-rating size="sm" :modelValue="4" />
                  </div>
                </div>

              </div>
            </div>
            <!-- Best Seller -->
            <div class="flex-1">
              <h3 class="font-semibold text-neutral-5  font-campton text-xl mb-4">Best Seller</h3>
              <div class="flex flex-col gap-6">
                <div v-for="item in 3" class="bg-white rounded-xl shadow p-1 flex gap-4 items-center">
                  <img src="/public/svg/bestseller.svg" alt="Royal Velvet" class="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <p class="font-poppins text-sm text-neutral-700">Royal Velvet</p>
                    <p class=" text-neutral-900">₦85,000.00</p>
                    <star-rating size="sm" :modelValue="4" />
                  </div>
                </div>

              </div>
            </div>
            <!-- Top Rated -->
            <div class="flex-1">
              <h3 class="font-semibold text-neutral-5 font-campton  text-xl mb-4">Top Rated</h3>
              <div class="flex flex-col gap-6">
                <div v-for="item in 3" class="bg-white rounded-xl shadow p-1 flex gap-4 items-center">
                  <img src="/public/svg/topRated.svg" alt="Giant Rustic" class="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <p class="font-poppins text-sm text-neutral-700">Giant Rustic</p>
                    <p class=" text-neutral-900">₦85,000.00</p>
                    <star-rating size="sm" :modelValue="4" />
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
      <div class="max-w-7xl mx-auto md:px-12 px-4 flex flex-wrap gap-16 items-center">
        <div class="2xl:w-[619px] md:w-[500px] w-full relative">
          <div
            class="absolute sm:w-[400px] max-w-[340px] bg-primary-0 rounded-lg p-4 -translate-y-1/2 top-1/2 shadow-xl -left-6 flex items-center gap-4">
            <img class="sm:w-fit w-[48px] " src="../../assets/svg/yellowMediaIcon.svg" alt="">
            <div>
              <h5 class="font-campton font-semibold text-lg">Virtual Home tour</h5>
              <p class="text-neutral-5 text-sm font-poppins">We provide you with virtual tour with HD video walkthroughs
              </p>
            </div>
          </div>
          <img src="../../assets/svg/designHouse.svg" alt="Featured property image placeholder"
            class="w-full  rounded-lg" />
          <div
            class=" absolute sm:w-90 w-3/4 bg-primary-0 rounded-lg p-4 shadow-xl flex items-center gap-4 left-1/2 -translate-x-1/2 bottom-[-40px]">
            <img class="sm:w-fit w-[48px] absolute top-0 right-4 -translate-y-1/2"
              src="../../assets/svg/purpleHouse.svg" alt="">
            <div>
              <h5 class="font-campton font-semibold text-lg">Find the best Deal</h5>
              <p class="text-neutral-5 text-sm font-poppins">
                Browse thousands of properties
              </p>
            </div>
          </div>
        </div>
        <div>
          <Tabs :tabs="buyOrSell" :activeTab="activeTabForBuyOrSell"
            @update:activeTab="activeTabForBuyOrSell = $event" />
          <div v-if="activeTabForBuyOrSell === 'House To Buy'">

            <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl sm:text-left text-center font-bold mt-6">Find the
              Perfect Home to Own</h2>
            <p class="mt-2 sm:text-left text-center max-w-xl mb-4 text-neutral-4">Discover verified properties with
              transparent pricing and
              secure
              payments,
              making homeownership simple and trustworthy.</p>
            <div class="p-4 max-w-xl rounded-lg bg-[#FFFBE5] mb-4">
              <div class="flex flex-col gap-4 font-poppins">
                <div class="flex flex-col sm:flex-row items-start  gap-2">
                  <img class="w-8 sm:w-fit" src="../../assets/svg/duotone.svg" alt="">
                  <div>
                    <h4 class="font-[500] text-neutral-900">Step Into Brand New Living</h4>
                    <p class="text-neutral-9/60 text-sm mt-1">Explore modern houses built to today’s standards, ready
                      for
                      you to
                      move in
                      with confidence,
                      comfort, and style for your future.</p>
                  </div>
                </div>
                <div class="border border-neutral-9/10 w-3/4"></div>
                <div class="flex flex-col sm:flex-row items-start  gap-2">
                  <img class="w-8 sm:w-fit" src="../../assets/svg/duotoneCpu.svg" alt="">
                  <div>
                    <h4 class="font-[500] text-neutral-9">Find Value in Established Homes</h4>
                    <p class="text-neutral-9/60 text-sm mt-1">Choose from trusted, well-kept properties that balance
                      affordability, comfort, and convenience, offering character and value for every discerning buyer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl sm:text-left text-center font-bold mt-6">Rent
              Smarter, Live Better</h2>
            <p class="mt-2 sm:text-left text-center max-w-xl mb-4 text-neutral-4">Browse trusted rental listings,
              connect with verified agents,
              and move in with ease and peace of mind.</p>
            <div class="p-4 max-w-xl rounded-lg bg-[#FFFBE5] mb-4">
              <div class="flex flex-col gap-4 font-poppins">
                <div class="flex flex-col sm:flex-row items-start  gap-2">
                  <img class="w-8 sm:w-fit" src="../../assets/svg/duotone.svg" alt="">
                  <div>
                    <h4 class="font-[500] text-neutral-900">Flexibility for Every Season</h4>
                    <p class="text-neutral-9/60 text-sm mt-1">Perfect for students, travelers, or temporary stays — find
                      rentals that match your timeline, lifestyle, and budget with ease and flexibility.</p>
                  </div>
                </div>
                <div class="border border-neutral-9/10 w-3/4"></div>
                <div class="flex  flex-col sm:flex-row items-start  gap-2">
                  <img class="w-8 sm:w-fit" src="../../assets/svg/duotoneCpu.svg" alt="">
                  <div>
                    <h4 class="font-[500] text-neutral-9">Settle In With Peace of Mind</h4>
                    <p class="text-neutral-9/60 text-sm mt-1">Discover reliable, long-term housing with secure
                      agreements and transparent payments, designed to provide peace, stability, and comfort for growing
                      families.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <B-button size="xl" variant="outline" @click="router.push('/properties')">Browse More Properties</B-button>
        </div>
      </div>
    </section>

    <!-- Designer Spaces -->
    <section class="py-16 bg-primary-0">
      <div class="max-w-7xl mx-auto md:px-12 px-4">
        <img src="../../assets/svg/three-yellow-stars-white-bg.svg" alt="breedgestone three yellow stars" />
        <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold mt-1 mb-2">
          Get a Designer Space You'll Love
        </h2>
        <p class="mt-2 text-neutral-3 mb-8">
          From elegant furnishings to thoughtful finishes, we bring beauty, comfort, and function together—tailored just
          for you
        </p>
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Left: Card with image and CTA -->
          <div class="bg-[#F7F7FD] text-center rounded-xl border border-[#E0DEF7] p-8 flex flex-col items-start">
            <h3 class="font-campton font-semibold text-xl mb-2 text-neutral-9">Concepts from multiple top designers</h3>
            <p class="mb-6 text-neutral-4 text-base text-center md:text-left">
              Get award-winning personalized interior design help
            </p>
            <B-button size="lg">
              Browse Properties
            </B-button>
            <img src="../../assets/svg/designer-lamp.svg" alt="Designer lamp" class="w-full max-w-xs mb-0" />
          </div>
          <!-- Right: Features Grid -->
          <div class="grid text-center sm:text-left xl:grid-cols-2 grid-cols-1 gap-8">
            <div class="flex flex-col xl:flex-row items-center sm:items-start gap-4 w-full ">
              <img src="../../assets/svg/save-money.svg" alt="Save Money" class="w-10 h-10" />
              <div>
                <h4 class="font-semibold text-neutral-9 mb-1">Save Money</h4>
                <p class="text-neutral-4 text-sm">
                  With access to trusted suppliers and smart design solutions, we help you avoid costly mistakes and get
                  more value for your budget.
                </p>
              </div>
            </div>
            <div class="flex flex-col xl:flex-row items-center sm:items-start gap-4 w-full">
              <img src="../../assets/svg/save-time.svg" alt="Save Time" class="w-10 h-10" />
              <div>
                <h4 class="font-semibold text-neutral-9 mb-1">Save Time</h4>
                <p class="text-neutral-4 text-sm">
                  Our experts manage the entire design and furnishing process—so you don’t have to spend months figuring
                  it out yourself.
                </p>
              </div>
            </div>
            <div class="flex flex-col xl:flex-row items-center sm:items-start gap-4 w-full">
              <img src="../../assets/svg/invest-style.svg" alt="Investment in Comfort & Style" class="w-10 h-10" />
              <div>
                <h4 class="font-semibold text-neutral-9 mb-1">An Investment in Comfort & Style</h4>
                <p class="text-neutral-4 text-sm">
                  Professional design isn’t just decoration—it’s lasting value, crafted spaces, and a home you’ll truly
                  love.
                </p>
              </div>
            </div>
            <div class="flex flex-col xl:flex-row items-center sm:items-start gap-4 w-full">
              <img src="../../assets/svg/convenient.svg" alt="Convenient & Stress Free" class="w-10 h-10" />
              <div>
                <h4 class="font-semibold text-neutral-9 mb-1">Convenient & Stress Free</h4>
                <p class="text-neutral-4 text-sm">
                  From concept to setup, we handle everything—delivering a beautiful, ready-to-enjoy space without the
                  hassle.
                </p>
              </div>
            </div>
            <div class="xl:col-span-2 flex justify-center mt-2 w-full">
              <B-button size="xl" variant="outline" @click="router.push({ name: 'interior design' })">
                Start My Transformation

              </B-button>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto md:px-12 px-4">
        <p class="font-semibold text-center text-neutral-9 uppercase mb-2 tracking-wide">
          GET ALL THE ANSWERS TO YOUR QUESTIONS
        </p>
        <h2 class="font-campton text-center lg:text-3xl xl:text-4xl text-2xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <div class="w-full flex flex-col xl:flex-row xl:gap-12 gap-6 items-center xl:items-start justify-center">
          <!-- FAQ List -->
          <div class="w-full xl:w-1/2 flex flex-col gap-4">
            <FaqAccordion v-for="(faq, i) in faqs.slice(0, Math.ceil(faqs.length / 2))" :key="faq.question" :faq="faq"
              :active="activeFaq === i" @toggle="activeFaq = activeFaq === i ? null : i" />
          </div>
          <div class="w-full xl:w-1/2 flex flex-col gap-4">
            <FaqAccordion v-for="(faq, i) in faqs.slice(Math.ceil(faqs.length / 2))" :key="faq.question" :faq="faq"
              :active="activeFaq === i + Math.ceil(faqs.length / 2)"
              @toggle="activeFaq = activeFaq === i + Math.ceil(faqs.length / 2) ? null : i + Math.ceil(faqs.length / 2)" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile App CTA -->
    <MobileAppCta />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import StarRating from '@/components/StarRating.vue'
import PropertyCard from "@/components/PropertyCard.vue"
import Tabs from '@/components/Tabs.vue'
import MobileAppCta from '@/components/MobileAppCta.vue'
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { useRouter } from 'vue-router'
import FaqAccordion from '@/components/FaqAccordion.vue'
import { dummy } from '../dummy'
const router = useRouter()
const modules = [Navigation, Scrollbar, A11y, Autoplay]
const allProperties = ref(dummy)
const onSwiper = (swiper) => {
  // console.log(swiper)
}
const onSlideChange = () => {
  // console.log('slide change')
}
const clicked = (id) => {
  router.push({ name: 'productDetails', params: { id } })
}
const activeTab = ref('Rent')
const tabs = ['Buy', 'Rent', 'Shortlet']
const buyOrSell = ["House To Buy", "House To Sell"]
const activeTabForBuyOrSell = ref('House To Buy')
const location = ref('')
const moveInDate = ref('')

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

const filteredProperties = computed(() => {
  return allProperties.value.filter((p) => p.type === activeTab.value).slice(0, 6)
})

const handleSearch = () => {
  const searchData = {
    type: activeTab.value,
    location: location.value,
    moveInDate: moveInDate.value,
  }
  if (!location.value) {
    alert('Please enter a location')
    return
  }

  alert(`Searching for ${activeTab.value.toLowerCase()} properties in ${location.value}`)
}
</script>
