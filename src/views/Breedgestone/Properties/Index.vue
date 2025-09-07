<template>
  <main class="font-poppins ">
    <section class="py-16 bg-primary-0">
      <div class="max-w-7xl mx-auto md:px-12 px-4">
        <div v-if="currentRoute === 'buy'" class="flex flex-col gap-y-3 justify-center items-center text-center mb-6">
          <p class="uppercase text-primary-5 font-campton font-bold">Buy a house</p>
          <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold ">Claim the Home Meant for You</h2>
          <p class=" text-neutral-5 font-poppins xl:text-lg max-w-xl">
            Stop dreaming, start owning — explore trusted listings with transparent pricing and virtual tours. The right
            home is ready, waiting for you.
          </p>

        </div>
        <div v-if="currentRoute === 'shortlet'"
          class="flex flex-col gap-y-3 justify-center items-center text-center mb-6">
          <p class="uppercase text-primary-5 font-campton font-bold">Shortlet</p>
          <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold ">The Space You Need, Instantly</h2>
          <p class=" text-neutral-5 font-poppins xl:text-lg max-w-xl">
            Move in without the hassle — secure sublets, trusted hosts, and ready-to-go spaces designed for your stay.
            Pick it, live it.
          </p>

        </div>
        <div v-if="currentRoute === 'rent'" class="flex flex-col gap-y-3 justify-center items-center text-center mb-6">
          <p class="uppercase text-primary-5 font-campton font-bold">Rent a house</p>
          <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl font-bold ">Your Perfect Rental Awaits Today</h2>
          <p class=" text-neutral-5 font-poppins xl:text-lg max-w-xl">
            Step into comfort & convenience — verified homes, flexible pricing, and spaces designed to match your
            lifestyle. Don’t search endlessly, choose now.
          </p>

        </div>

        <!-- Tabs -->
        <div class="flex sm:flex-row mb-6 gap-3 flex-col-reverse sm:justify-between justify-center">
          <Tabs :tabs="tabs" :activeTab="activeTab" @update:activeTab="activeTab = $event" />
        </div>

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 font-poppins">
          <PropertyCard @click="clicked(property.id)" v-for="property in filteredProperties" :key="property.id"
            :property="property" />
        </div>

        <!-- Browse more button -->
        <div class="flex justify-center mt-10">
          <!-- pagination -->
        </div>
      </div>
    </section>
    <section class="py-8 bg-[#F7F7FD]">
      <div class="max-w-7xl mx-auto md:px-12 px-4 ">
        <h2 class=" font-bold font-campton lg:text-3xl xl:text-4xl text-2xl">
          What Our Customer Say about Our Houses
        </h2>
        <p class="text-neutral-4 text-sm mb-8">
          Here are our reviews from people who has gotten a house from us
        </p>
        <div class="flex sm:flex-row mb-6 gap-3 flex-col-reverse sm:justify-between justify-center">
          <Tabs :tabs="testimonialTabs" :activeTab="activeTestimonialTab"
            @update:activeTab="activeTestimonialTab = $event" />
        </div>
        <div class="flex justify-between flex-wrap gap-8 mt-8 text-neutral-4">
          <swiper :breakpoints="{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },

          }" :slides-per-view="2" :modules="modules" :space-between="50" :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }">
            <swiper-slide v-for="item in testimonials">
              <div class="flex 2xl:flex-row flex-col items-start gap-2">

                <div class="cursor-pointer rounded-lg  bg-white shadow hover:shadow-lg transition">
                  <div class="relative">
                    <img :src="`/svg/house2.svg`" alt="property.title" class="w-full lg:h-[282px] h-40 object-cover" />

                  </div>

                  <div class="p-4">

                    <p class="mt-1 text-sm font-semibold text-neutral-5 font-campton">
                      Abuja, Nigeria
                    </p>
                    <p class="mt-1 text-xs text-neutral-5">
                      6 Bedroom Detached Duplex With Rooftop Terrace
                    </p>
                    <div class="border my-4 w-full border-primary-1/50"></div>
                    <div class="flex justify-between xl:text-sm text-xs text-neutral-6 mt-3 ">
                      <div class="flex gap-2 flex-row items-center">
                        <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]" src="../../../assets/svg/purpleCar.svg"
                          alt="">
                        <span>0 Beds</span>
                      </div>
                      <div class="flex gap-2 flex-row items-center">
                        <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]" src="../../../assets/svg/sink.svg"
                          alt="" />
                        <span>2 Baths</span>
                      </div>
                      <div class="flex gap-2 flex-row items-center">
                        <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]" src="../../../assets/svg/sink.svg"
                          alt="" />
                        <span>3X5 Baths</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="max-w-md bg-primary-0 h-full">
                  <StarRating unratedColor="#eee" color="#1C55E0" :modelValue="4" />
                  <p>The team took time to understand our vision and delivered a sleek, professional site that not only
                    looks great but also improved our conversion rates. Their design process was smooth, communication
                    was
                    clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s
                    easier for customers to navigate. I can confidently say we’ll be working with them again in the
                    future.”</p>
                  <div>
                    <img v-if="img" src="" alt="">
                    <div v-else class="bg-primary-5 w-12 h-12 rounded-full p-2 flex items-center justify-center">
                      <p class="text-white font-bold">JD</p>

                    </div>
                    <p class="font-bold text-neutral-5 mt-4">- Jane Doe</p>
                    <p class="text-xs text-neutral-4">CEO, Company</p>
                  </div>
                </div>
              </div>

            </swiper-slide>

          </swiper>
        </div>
      </div>
    </section>
    <!-- Mobile App CTA -->
    <MobileAppCta class="mt-10" />
  </main>
</template>
<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MobileAppCta from '@/components/MobileAppCta.vue'
import { dummy } from '../../dummy'
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import Tabs from '@/components/Tabs.vue'
import PropertyCard from "@/components/PropertyCard.vue"
import StarRating from '@/components/StarRating.vue'
const modules = [Navigation, Scrollbar, A11y, Autoplay]
const router = useRouter()
const route = useRoute()
const activeTestimonialTab = ref('Rent')
const testimonialTabs = ['Buy', 'Rent', 'Shortlet']
const testimonials = ref([0, 1, 2, 3, 4, 5, 6])
const allProperties = ref(dummy)
const currentRoute = ref(null)
// New property categories based on your image
// Tabs for categories
const tabs = ['Latest', 'Popular', 'Luxury', 'Affordable']

// Active tab defaults to first
const activeTab = ref(tabs[0, 1])

// Figure out type from route (rent, buy, shortlet, or all)
const activeType = computed(() => {
  const path = route.path.toLowerCase()
  if (path.includes('rent')) {
    currentRoute.value = 'rent';
    return 'Rent'
  }
  if (path.includes('buy')) {
    currentRoute.value = 'buy';
    return 'Buy'
  }
  if (path.includes('shortlet')) {
    currentRoute.value = 'shortlet';
    return 'Shortlet'
  }
  return null // /properties → show all
})

// Final filtered properties
const filteredProperties = computed(() => {
  let list = allProperties.value

  // Step 1: filter by type if any
  if (activeType.value) {
    list = list.filter((p) => p.type.toLowerCase() === activeType.value.toLowerCase())
  }

  // Step 2: filter by category tab
  list = list.filter((p) => p.category === activeTab.value)

  return list
})

// Watch route changes
watch(
  () => route.path,
  () => {
    // reset tab to first when type changes
    activeTab.value = tabs[0]
  }
)
const clicked = (id) => {
  router.push({ name: 'property-single', params: { id: 5 } })
}
</script>
