<script setup></script>

<template>
  <div class="font-poppins text-neutral-9">

    <!-- Hero Section -->
    <section class="bg-neutral-8 py-12">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-3xl md:text-5xl font-bold leading-tight">
            Africa’s Trusted Hub for Living and Building
          </h1>
          <p class="mt-4 text-neutral-2">
            Short description about the platform and its offerings.
          </p>
          <button class="mt-6 px-6 py-3 bg-color-primary-5 hover:bg-color-primary-4 text-white rounded-lg">
            Get Started
          </button>
        </div>
        <div>
          <img alt="Hero section house illustration / map placeholder"
            class="w-full border rounded-lg bg-neutral-7 h-64">
        </div>
      </div>
    </section>

    <!-- Trusted Companies -->
    <section class="py-8 bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="font-semibold">Many Companies Trust Breedgestone</p>
        <div class="flex justify-center flex-wrap gap-8 mt-6 text-neutral-4">
          <span>Logo placeholder 1</span>
          <span>Logo placeholder 2</span>
          <span>Logo placeholder 3</span>
          <span>Logo placeholder 4</span>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 bg-neutral-9 text-white">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-neutral-8 p-6 rounded-lg">
          <h3 class="font-bold">Tenants</h3>
          <p class="mt-2 text-neutral-3">Service description for tenants.</p>
        </div>
        <div class="bg-neutral-8 p-6 rounded-lg">
          <h3 class="font-bold">Landlords</h3>
          <p class="mt-2 text-neutral-3">Service description for landlords.</p>
        </div>
        <div class="bg-neutral-8 p-6 rounded-lg">
          <h3 class="font-bold">Builders</h3>
          <p class="mt-2 text-neutral-3">Service description for builders.</p>
        </div>
      </div>
    </section>

    <!-- Properties Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-2xl font-bold mb-6">Based on Your Need</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="bg-neutral-7 rounded-lg overflow-hidden">
            <img alt="Property image placeholder" class="w-full h-40 bg-neutral-6">
            <div class="p-4">
              <p class="font-semibold">Property title</p>
              <p class="text-sm text-neutral-3">Price / details</p>
            </div>
          </div>
          <div class="bg-neutral-7 rounded-lg overflow-hidden">
            <img alt="Property image placeholder" class=" border w-full h-40 bg-neutral-6">
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
            <img alt="Material image placeholder" class="w-full h-32 border bg-neutral-6">
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
          <img alt="Featured property image placeholder" class="w-full h-64 bg-neutral-7 rounded-lg">
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
          <img alt="Designer chair placeholder" class="w-full h-64 bg-neutral-7 border rounded-lg">
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
          <img alt="Mobile app mockup placeholder" class="w-full border h-64 bg-neutral-7 rounded-lg">
        </div>
      </div>
    </section>

  </div>
</template>
