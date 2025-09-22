<script setup>
const contactReasons = [
  'General Inquiry',
  'Support',
  'Partnership',
]
</script>

<template>
  <div class="font-poppins  min-h-screen">
    <section class="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div class=" w-full">
        <h2 class="font-campton font-bold text-2xl md:text-3xl text-neutral-9 mb-2">Get in touch</h2>
        <p class="mt-1 text-neutral-3 mb-6">We’d love to hear from you. Please fill out this form.</p>
        <form class="bg-[#F7F7FD] max-w-3xl mx-auto shadow-sm rounded-xl p-6 md:p-8 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="*First name"
              class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5"
              required />
            <input type="text" placeholder="*Last name"
              class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5"
              required />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="*Email Address"
              class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5"
              required />
            <input type="tel" placeholder="*Phone Number"
              class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5"
              required />
          </div>
          <select
            class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5"
            required>
            <option value="" disabled selected>*Your reason for contacting us</option>
            <option v-for="reason in contactReasons" :key="reason">{{ reason }}</option>
          </select>
          <textarea placeholder="Write your message"
            class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 h-32 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5"
            required></textarea>
          <div class="flex gap-6 justify-between items-center flex-wrap">

            <label class="flex items-center gap-2 sm:text-sm text-xs text-neutral-3">
              <input type="checkbox" class="accent-primary-5" required />
              I agree with
              <a href="#" class="text-primary-5  underline">Terms of Use</a>
              and
              <a href="#" class="text-primary-5  sm:text-sm text-xs underline">Privacy Policy</a>

            </label>
            <B-button class="flex-1 max-w-[250px]" type="submit"> Contact Us
            </B-button>
          </div>
        </form>
      </div>
      <div class=" flex flex-col items-center md:items-start">
        <h2 class="font-campton font-bold text-2xl md:text-3xl text-center md:text-left text-neutral-9 mb-2">
          We’d love to hear from you
        </h2>
        <p class="mt-1 text-neutral-3 text-center md:text-left mb-6 md:mb-8">
          Need something cleared up? Here are our most frequently asked questions.
        </p>
        <div class="w-full flex flex-col gap-8">
          <!-- Email -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFF5F0] mb-2 md:mb-0">
              <img src="../../assets/svg/email.svg" alt="Email icon" class="w-7 h-7" />
            </div>
            <div class="text-center md:text-left">
              <h3 class="font-campton font-bold text-neutral-9 text-lg mb-1">Email</h3>
              <p class="text-neutral-3 text-sm mb-1">Our friendly team is here to help.</p>
              <a href="mailto:hi@agency.com" class="text-primary-5 font-medium text-base">hi@agency.com</a>
            </div>
          </div>
          <!-- Phone -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F0FF] mb-2 md:mb-0">
              <img src="../../assets/svg/phone.svg" alt="Phone icon" class="w-7 h-7" />
            </div>
            <div class="text-center md:text-left">
              <h3 class="font-campton font-bold text-neutral-9 text-lg mb-1">Phone</h3>
              <p class="text-neutral-3 text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+15550000000" class="text-primary-5 font-medium text-base">+1 (555) 000-0000</a>
            </div>
          </div>
          <!-- Office -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E7F5E8] mb-2 md:mb-0">
              <img src="../../assets/svg/location.svg" alt="Location icon" class="w-7 h-7" />
            </div>
            <div class="text-center md:text-left">
              <h3 class="font-campton font-bold text-neutral-9 text-lg mb-1">Office</h3>
              <p class="text-neutral-3 text-sm mb-1">Come say hello at our office HQ.</p>
              <address class="not-italic text-primary-5 font-medium text-base">
                100 Smith Street<br />
                Collingwood VIC 3066 AU
              </address>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Form -->

    </section>
  </div>
</template>