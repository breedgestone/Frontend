<script setup></script>

<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section class="relative min-h-[600px] flex items-center overflow-x-clip">
      <!-- Large Yellow Shape -->
      <div class="absolute left-0 top-0 lg:w-[70vw] w-full h-[600px] bg-[#FFD476]  rounded-tr-[320px] "></div>

      <svg class="absolute left-[40vw] top-[160px] lg:block hidden z-10" width="607" height="400" viewBox="0 0 807 598"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.32" d="M804.117 2.5V595.5H300.617C136.313 595.5 3.1172 462.305 3.11719 298V2.5H804.117Z"
          stroke="#7600CD" stroke-width="5" />
      </svg>


      <div class="relative  max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-0 items-center">
        <!-- Left: Text Content -->
        <div class="pl-8 pt-16 pb-24 ">
          <h1 class="font-campton font-bold text-4xl md:text-5xl text-neutral-9 mb-6 leading-tight">
            Modern Interior<br />Design Service
          </h1>
          <p class="text-neutral-9  text-lg mb-8 max-w-md">
            Transforming spaces with contemporary styles, functional layouts, and timeless elegance tailored to your
            needs
          </p>
          <B-button class="">
            Contact Us
          </B-button>
          <!-- Circular Image Overlap -->
          <div class="flex gap-6 mt-8">
            <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=200&q=80"
              alt="Dining Area" class="rounded-full w-32 h-60 object-cover shadow-lg border-4 border-white" />
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80"
              alt="Decor Wall" class="rounded-full w-32 h-80 z-0 object-cover shadow-lg border-4 border-white" />
          </div>
        </div>
        <!-- Right: Hero Image Overlapping Yellow -->
        <div class="relative lg:flex hidden  justify-center items-center h-full">
          <img src="../../assets/svg/intdesign.svg" alt="Modern Interior" class=" absolute right-0 top-8 z-30" />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
      <div class="md:col-span-1 flex flex-col justify-center items-center">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          alt="Decorative showcase" class="w-56 h-56 object-cover rounded-lg shadow-lg" />
      </div>
      <div class="md:col-span-2 flex flex-col md:flex-row items-center justify-around">
        <div>
          <p class="font-campton font-bold text-4xl text-neutral-9">7</p>
          <p class="text-neutral-3">Years of experience</p>
        </div>
        <div>
          <p class="font-campton font-bold text-4xl text-neutral-9">162</p>
          <p class="text-neutral-3">Projects completed</p>
        </div>
        <div>
          <p class="font-campton font-bold text-2xl text-neutral-9 mb-2">Make your dream home.</p>
          <button class="bg-[#6C2BD7] hover:bg-[#4B1A9B] text-white px-6 py-3 rounded-lg">
            Talk To Us
          </button>
        </div>
      </div>
    </section>


    <!-- Stats Section -->
    <section class="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
      <div class="md:col-span-1">
        <img src="" alt="Decorative showcase" class="w-full h-72 bg-neutral-7 rounded-lg" />
      </div>
      <div class="md:col-span-2 flex flex-col md:flex-row items-center justify-around">
        <div>
          <p class="font-campton font-bold text-4xl text-neutral-9">7</p>
          <p class="text-neutral-3">Years of experience</p>
        </div>
        <div>
          <p class="font-campton font-bold text-4xl text-neutral-9">162</p>
          <p class="text-neutral-3">Projects completed</p>
        </div>
        <div>
          <button class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-3 rounded-lg">
            Make your dream home.
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 class="font-campton font-bold text-3xl text-neutral-9">Create your Dream Space.</h2>
      <div class="mt-10 grid md:grid-cols-3 gap-8">
        <div>
          <img src="" alt="Workflow icon" class="mx-auto w-16 h-16 bg-neutral-7 rounded-lg" />
          <h3 class="mt-4 font-campton font-bold text-neutral-9">Smooth workflow</h3>
          <p class="mt-2 text-neutral-3">
            Even concepts or complexities, our team ensures smooth execution of your project.
          </p>
        </div>
        <div>
          <img src="" alt="Professionalism icon" class="mx-auto w-16 h-16 bg-neutral-7 rounded-lg" />
          <h3 class="mt-4 font-campton font-bold text-neutral-9">Professionalism</h3>
          <p class="mt-2 text-neutral-3">
            With our strong background, we bring expertise and detail-oriented execution to each
            space.
          </p>
        </div>
        <div>
          <img src="" alt="Trusted platform icon" class="mx-auto w-16 h-16 bg-neutral-7 rounded-lg" />
          <h3 class="mt-4 font-campton font-bold text-neutral-9">Trusted platform</h3>
          <p class="mt-2 text-neutral-3">
            A reliable platform for turning your dream home into a reality.
          </p>
        </div>
      </div>
    </section>

    <!-- Before & After Section -->
    <section class="bg-neutral-1 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-campton font-bold text-3xl text-neutral-9 mb-8">
          Modern and Stylish Living Room
        </h2>
        <div class="bg-neutral-2 rounded-lg overflow-hidden">
          <div class="flex justify-between px-6 py-4">
            <button class="font-poppins text-neutral-9">Before</button>
            <button class="font-poppins text-neutral-9">After</button>
          </div>
          <img src="" alt="Before and after living room design" class="w-full h-96 bg-neutral-7 rounded-lg" />
          <div class="p-6">
            <h3 class="font-campton font-bold text-neutral-9">Client’s Challenge</h3>
            <p class="text-neutral-3 mt-2">
              The client wanted a modern, spacious, and stylish living room transformation.
            </p>
            <h3 class="mt-4 font-campton font-bold text-neutral-9">Result</h3>
            <p class="text-neutral-3 mt-2">
              The outcome was an elegant contemporary space designed with relaxing tones and
              functional setup.
            </p>
            <p class="mt-4 font-poppins text-neutral-3 italic">– Known</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 class="font-campton font-bold text-3xl text-neutral-9">Work with us and see the Magic</h2>
      <div class="mt-10 grid md:grid-cols-4 gap-8">
        <div>
          <p class="font-campton font-bold text-xl text-neutral-9">Up to 70% Off</p>
          <p class="text-neutral-3">on your first interior design project</p>
        </div>
        <div>
          <p class="font-campton font-bold text-xl text-neutral-9">Latest Innovations</p>
          <p class="text-neutral-3">in home decor & furniture</p>
        </div>
        <div>
          <p class="font-campton font-bold text-xl text-neutral-9">Eco-Friendly Fabrics</p>
          <p class="text-neutral-3">sourced sustainably</p>
        </div>
        <div>
          <p class="font-campton font-bold text-xl text-neutral-9">Choose Your Plan</p>
          <p class="text-neutral-3">Flexible packages for every need</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="bg-neutral-1 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap gap-4 justify-center mb-8">
          <button class="font-poppins text-neutral-9">Dining Room</button>
          <button class="font-poppins text-neutral-9">Bedroom</button>
          <button class="font-poppins text-neutral-9">Bathroom</button>
          <button class="font-poppins text-neutral-9">Office</button>
          <button class="font-poppins text-neutral-9">Kitchen</button>
          <button class="font-poppins text-neutral-9">Hallway</button>
          <button class="font-poppins text-neutral-9">Other</button>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <img src="" alt="Bedroom design 1" class="w-full h-72 bg-neutral-7 rounded-lg" />
          <img src="" alt="Bedroom design 2" class="w-full h-72 bg-neutral-7 rounded-lg" />
          <img src="" alt="Bedroom design 3" class="w-full h-72 bg-neutral-7 rounded-lg" />
          <img src="" alt="Bedroom design 4" class="w-full h-72 bg-neutral-7 rounded-lg" />
          <img src="" alt="Bedroom design 5" class="w-full h-72 bg-neutral-7 rounded-lg" />
          <img src="" alt="Bedroom design 6" class="w-full h-72 bg-neutral-7 rounded-lg" />
        </div>
        <div class="mt-8 text-center">
          <button class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-3 rounded-lg">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>

    <!-- Mobile App Section -->
    <MobileAppCta />
  </div>
</template>
<script setup>
import MobileAppCta from '@/components/MobileAppCta.vue';
</script>
