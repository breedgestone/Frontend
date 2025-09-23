<script setup>
import { useRouter } from 'vue-router'
import MobileAppCta from '@/components/MobileAppCta.vue'
import { ref, computed } from 'vue'
import StarRating from '@/components/StarRating.vue'
const router = useRouter()
const current = ref('after')
const categories = [
  'Dining Room',
  'Bedroom',
  'Bathroom',
  'Office',
  'Kitchen',
  'Hallway',
  'Other'
]

const galleryData = [
  {
    category: 'Bedroom',
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1505691723518-41cb85eeaf55?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    category: 'Dining Room',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    category: 'Bathroom',
    images: [
      'https://images.unsplash.com/photo-1505691723518-41cb85eeaf55?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    category: 'Office',
    images: [
      'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    category: 'Kitchen',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    category: 'Hallway',
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    category: 'Other',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    ]
  }
]

const selectedCategory = ref('Bedroom')

const filteredImages = computed(() => {
  const found = galleryData.find(g => g.category === selectedCategory.value)
  return found ? found.images : []
})
</script>

<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <section class="relative min-h-[600px] flex items-center overflow-x-clip">
      <div class="absolute left-0 top-0 lg:w-[70vw] w-full h-[600px] bg-[#FFD476] rounded-tr-[320px]"></div>
      <svg class="absolute left-[40vw] top-[160px] lg:block hidden z-10" width="607" height="400" viewBox="0 0 807 598"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.32" d="M804.117 2.5V595.5H300.617C136.313 595.5 3.1172 462.305 3.11719 298V2.5H804.117Z"
          stroke="#7600CD" stroke-width="5" />
      </svg>
      <div class="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-0 items-center">
        <!-- Left: Text Content -->
        <div class="pl-8 pt-16">
          <h1 class="font-campton font-bold lg:text-3xl xl:text-4xl text-2xl text-neutral-9 mb-6 leading-tight">
            Modern Interior<br />Design Service
          </h1>
          <p class="text-neutral-9 leading-[170%] sm:text-lg text-sm mb-8 sm:max-w-md max-w-xs">
            Transforming spaces with contemporary styles, functional layouts, and timeless elegance
            tailored to your needs
          </p>
          <B-button @click="router.push({ name: 'contact' })" size="xl" class="">
            Contact Us
          </B-button>
          <!-- Circular Image Overlap -->
          <div class="flex gap-6 mt-20">
            <img src="../../assets/svg/rounded-dinning-area.svg" alt="Dining Area"
              class="rounded-full w-32 h-60 object-cover shadow-lg border-4 border-white" />
            <img src="../../assets/svg/half-dinning-area.svg" alt="Decor Wall"
              class="rounded-full w-32 h-80 z-0 object-cover shadow-lg border-4 border-white" />
          </div>
        </div>
        <!-- Right: Hero Image Overlapping Yellow -->
        <div class="relative lg:flex hidden px-4 sm:px-12 justify-center items-center h-full">
          <img src="../../assets/svg/moderdesigntext.svg" alt="" class="absolute right-0 top-0 z-40" />
          <img src=" ../../assets/svg/intdesign.svg" alt="Modern Interior" class="absolute right-0 top-12 z-30" />
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-12 py-12 flex justify-between gap-6 relative text-center">
      <div class="lg:flex hidden flex-1 gap-12 justify-center items-center">
        <img src="../../assets/svg/scrolldown.svg" alt="" class="" />
        <img src="../../assets/svg/lantern.svg" alt="" class="" />
      </div>
      <div class="flex lg:flex-2 flex-[100%] flex-col items-center justify-around">
        <div class="flex flex-wrap sm:gap-20 gap-5 items-center justify-baseline">
          <div>
            <p class="font-campton font-bold lg:text-3xl xl:text-4xl text-2xl text-neutral-9 sm:mb-6 leading-tight">
              7
            </p>
            <p class="text-neutral-3">Years of <br />experience</p>
          </div>
          <div>
            <p
              class="font-campton font-bold lg:text-3xl xl:text-4xl text-2xl text-neutral-9 mb-2 sm:mb-6 leading-tight">
              162
            </p>
            <p class="text-neutral-3">
              Projects<br />
              completed
            </p>
          </div>
        </div>
        <div>
          <p class="font-campton font-bold text-2xl text-neutral-9 mb-2 mt-16">
            Make your dream home.
          </p>
          <B-button size="xl" class="md:min-w-xs min-w-fit"> Talk To Us </B-button>
        </div>
      </div>
    </section>
    <div class="border w-3/4 border-neutral-0-5"></div>
    <!-- Features Section -->
    <section class="max-w-7xl mx-auto md:px-12 px-4 py-16 text-left">
      <h2 class="font-campton font-bold lg:text-3xl xl:text-4xl text-2xl text-neutral-9 mb-6 leading-tight">
        Create your Dream Space.
      </h2>
      <div class="mt-10 grid md:grid-cols-3 gap-8">
        <div>
          <img src="../../assets/svg/workflow-icon.svg" alt="Workflow icon" class="w-16 h-16" />
          <h3 class="mt-4 font-campton font-bold text-neutral-9">Smooth workflow</h3>
          <p class="mt-2 text-neutral-3">
            From concept to completion, we simplify the process—ensuring your design journey is
            seamless and efficient.
          </p>
        </div>
        <div>
          <img src="../../assets/svg/professionalism.svg" alt="Professionalism icon" class="w-16 h-16" />
          <h3 class="mt-4 font-campton font-bold text-neutral-9">Professionalism</h3>
          <p class="mt-2 text-neutral-3">
            Our team brings expertise, excellence, and attention to detail in every project we
            deliver.
          </p>
        </div>
        <div>
          <img src="../../assets/svg/block.svg" alt="Trusted platform icon" class="w-16 h-16" />
          <h3 class="mt-4 font-campton font-bold text-neutral-9">Trusted platform</h3>
          <p class="mt-2 text-neutral-3">
            Backed by reliability and proven results, we’re the go-to partner for interior design
            and furnishing solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Before & After Section -->
    <section class="bg-primary-0 py-16 md:px-12 px-4">
      <div class="max-w-7xl bg-neutral-9 rounded-3xl mx-auto md:p-12 p-4">
        <div class="bg-neutral-8 text-primary-0  p-4 rounded-3xl overflow-hidden">
          <h2 class="font-campton text-center font-bold text-3xl text-primary-0 mb-8">
            Modern and Stylish Living Room
          </h2>
          <div class="flex gap-6 px-6 py-4">
            <button @click="current = 'before'" class="font-poppins "
              :class="[current === 'before' ? 'underline' : '']">
              Before
            </button>
            <button @click="current = 'after'" class="font-poppins text-primary-0"
              :class="[current === 'after' ? 'underline' : '']">
              After
            </button>
          </div>
          <div class="flex gap-6 lg:flex-row flex-col">
            <img v-if="current === 'after'" src="../../assets/svg/intdesignAfter.svg"
              alt="Before and after living room design"
              class="w-full object-cover h-96 xl:max-w-lg 2xl:max-w-xl bg-neutral-7 rounded-3xl" />
            <img v-else src="../../assets/svg/intdesignBefore.svg" alt="Before and after living room design"
              class="w-full object-cover h-96 xl:max-w-lg 2xl:max-w-xl bg-neutral-7 rounded-3xl" />
            <div class="p-6">
              <h3 class="font-campton font-bold ">Client’s Challenge</h3>
              <p class=" mt-1">
                The client wanted a modern, spacious, and stylish living room transformation.
              </p>
              <h3 class="mt-6 font-campton font-bold ">Result</h3>
              <p class=" mt-1">
                The outcome was an elegant contemporary space designed with relaxing tones and
                functional setup.
              </p>
              <p class="mt-4 font-poppins mb-2  italic">– Kenneth</p>
              <StarRating :modelValue="5" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="max-w-7xl mx-auto md:px-12 px-4 py-16 text-center">
      <h2 class="font-campton text-center font-bold text-3xl text-neutral-9 mb-8 ">Work with us and see the Magic</h2>
      <div class="mt-10 grid lg:grid-cols-5 md:grid-cols-3  gap-8 ">
        <div class="flex flex-col items-center justify-center gap-2">
          <img src="../../assets/svg/percent-off.svg" alt="">
          <p class="text-neutral-3">Up to 30% off of furniture</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img src="../../assets/svg/ideas.svg" alt="">
          <p class="text-neutral-3">Ideas From Multiple Designers </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img src="../../assets/svg/one-to-one.svg" alt="">
          <p class="text-neutral-3">One to one Interior
            Design Assistance </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img src="../../assets/svg/3d.svg" alt="">
          <p class="text-neutral-3">Get A 3d model of your Space </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-2">
          <img src="../../assets/svg/palette.svg" alt="">
          <p class="text-neutral-3">Choose Your Own Color Palette</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="bg-neutral-9 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Category Tabs -->
        <div class="flex gap-8 justify-center mb-8">
          <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
            class="text-white text-xl font-campton px-2 pb-2 border-b-2"
            :class="selectedCategory === cat ? 'border-white font-bold underline' : 'border-transparent opacity-70'"
            style="background: none;">
            {{ cat }}
          </button>
        </div>
        <!-- Images Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          <div v-for="(img, idx) in filteredImages" :key="img + idx"
            class="rounded-lg overflow-hidden shadow-lg bg-neutral-8">
            <img :src="img" alt="" class="w-full h-48 object-cover" />
          </div>
        </div>
        <!-- CTA Button -->
        <div class="mt-8 text-center">
          <B-button @click="router.push({ name: 'consultations' })" variant="outline"
            class="bg-white text-[#6C2BD7] px-8 py-3 rounded-lg font-semibold shadow-md">
            Reach Out To Us
          </B-button>
        </div>
      </div>
    </section>
    <!-- Mobile App Section -->
    <MobileAppCta />
  </div>
</template>
