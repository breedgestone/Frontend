<script setup>
import { ref } from 'vue'
const activeTab = ref('INTERIOR')
const showForm = ref(false)
const tabs = [
  { label: 'PROPERTIES', value: 'PROPERTIES' },
  { label: 'INTERIOR DESIGN', value: 'INTERIOR' }
]
</script>

<template>
  <div class="font-poppins ">
    <div v-if="!showForm">
      <!-- Consultation Plan Section -->
      <section class="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
        <h2 class="font-campton font-bold text-[2rem] md:text-[2.5rem] text-neutral-9 text-center leading-tight">
          Our Consultation Plan
        </h2>
        <p class="mt-2 md:mt-4 text-neutral-3 text-center text-base md:text-lg">
          Choose the plan that works for you.
        </p>

        <!-- Plan Toggle -->
        <div class="mt-6 bg-[#EBEFF0] rounded-full w-fit flex p-2 justify-self-center gap-2 md:gap-4">
          <button v-for="tab in tabs" :key="tab.value" @click="activeTab = tab.value" :class="[
            'px-5 py-2 rounded-full text-sm md:text-base tracking-wider  transition transform-3d ',
            activeTab === tab.value
              ? 'bg-primary-5 shadow-sm text-white'
              : 'bg-[#EBEFF0] text-neutral-9 hover:bg-neutral-0-5'
          ]">
            {{ tab.label }}
          </button>
        </div>

        <!-- Plan Cards -->
        <div
          class="mt-8 bg-neutral-0-5 p-8 rounded-3xl md:mt-12 flex flex-col md:flex-row gap-6 justify-center items-stretch">
          <!-- Left Card -->
          <div
            class="bg-white rounded-xl shadow-lg p-6 md:p-8 flex-1 md:max-w-[400px] max-w-full w-full mx-auto md:mx-0">
            <div class="border border-primary-5 rounded-lg py-3 px-4 text-center mb-4">
              <span class="font-campton font-bold text-primary-5 text-lg md:text-xl">₦50,000.00</span>
            </div>
            <h3 class="font-campton font-semibold text-neutral-9 text-base md:text-lg mb-2">
              Give it a go for as long as you want:
            </h3>
            <ul v-if="activeTab === 'INTERIOR'" class="space-y-3 text-neutral-7 text-sm md:text-base pl-1">
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Unlimited Style Exploration
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Accessory & Décor Trials
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Try Color Palettes Freely
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Furniture Mix & Match
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Layout & Space Planning
              </li>
            </ul>
            <ul v-else class="space-y-3 text-neutral-7 text-sm md:text-base pl-1">
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Flexible Virtual Tours
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Continuous Expert Access
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Personal Growth in Knowledge
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Tailored Property Recommendations
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-5 font-bold">✔</span> Smart Financial Planning
              </li>
            </ul>
          </div>
          <!-- Right Card -->
          <div
            class="bg-primary-5 rounded-xl shadow-lg p-6 md:p-8 flex-1 max-w-[600px] mx-auto md:mx-0 text-white relative">
            <div class="flex sm:flex-row flex-col justify-between items-center mb-4">

              <div>

                <h3 class="font-campton font-bold text-lg md:text-xl mb-2">
                  {{ activeTab === 'INTERIOR' ? 'INTERIOR DESIGN' : 'PROPERTIES' }}
                </h3>


              </div>
              <span
                class=" bg-yellow-400 text-neutral-9 text-sm tracking-wider font-bold rounded-full px-3 py-2 shadow-md">RECOMMENDED</span>
            </div>
            <p class="text-white/80 text-sm md:text-base font-campton font-bold mb-2">Our Endless Possibilities</p>
            <!-- Responsive grid for right card items -->
            <ul v-if="activeTab === 'INTERIOR'"
              class="text-white text-sm md:text-base pl-1 flex flex-wrap gap-x-6 gap-y-3">
              <li class="flex items-center gap-2 max-w-[250px]">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Budget Planning & Cost Estimation
              </li>
              <li class="flex items-center gap-2 max-w-[250px]">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                3D Visualization & Renderings
              </li>
              <li class="flex items-center gap-2 max-w-[250px]">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Personalized Design Assessment
              </li>
              <li class="flex items-center gap-2 max-w-[250px]">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Color Scheme Selection
              </li>
              <li class="flex items-center gap-2 max-w-[250px]">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Furniture & Decor Recommendations
              </li>
              <li class="flex items-center gap-2 max-w-[250px]">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Implementation Roadmap
              </li>
              <li class="flex items-center gap-2 max-w-[250px] col-span-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Lighting Design Advice
              </li>
            </ul>
            <ul v-else class="text-white text-sm md:text-base pl-1 flex flex-wrap gap-x-6 gap-y-3">
              <li class="flex items-center  max-w-[250px] gap-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Personalized Property Matching
              </li>
              <li class="flex items-center  max-w-[250px] gap-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Priority Access to Properties
              </li>
              <li class="flex items-center  max-w-[250px] gap-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Legal & Contract Assistance
              </li>
              <li class="flex items-center  max-w-[250px] gap-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Optional Viewing Packages
              </li>
              <li class="flex items-center  max-w-[250px] gap-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                After Support & Relocation Help
              </li>
              <li class="flex items-center  max-w-[250px] gap-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Verified & Secure Deals
              </li>
              <li class="flex items-center  max-w-[250px] gap-2 col-span-2">
                <span
                  class="text-xs bg-primary-0 rounded-full px-2 py-1 flex items-center justify-center text-primary-5">✔</span>
                Time & Cost Savings
              </li>
            </ul>
            <button @click="showForm = true"
              class="mt-6 w-full bg-white text-primary-5 font-semibold px-6 py-3 rounded-lg shadow hover:bg-neutral-0-5 transition">
              Start Consultation Now
            </button>
          </div>
        </div>
      </section>

      <!-- Guidance Section -->
      <section class=" bg-top bg-no-repeat relative lg:bg-cover bg-[url('/svg/consultationStep.svg')] py-10 md:py-16">
        <div class="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 class="font-campton font-bold text-[1.5rem] md:text-[2rem] text-white text-center leading-tight">
            Guiding You to Smarter Choices, Every Step of the Way
          </h2>
          <p class="mt-2 md:mt-4 text-neutral-2 text-center text-base md:text-lg max-w-2xl mx-auto">
            We simplify the complex, offering tailored guidance that helps you make confident decisions and achieve
            results that truly reflect your goals.
          </p>
          <div class="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <!-- Card 1 -->
            <div class="bg-white rounded-xl p-6 md:p-8 flex flex-col gap-2 shadow-lg">
              <div class=" flex items-center justify-center sm:w-fit sm:h-fit h-10 w-10 mb-2">
                <img src="../../assets/svg/personalized-guidance.svg" alt="">
              </div>
              <h3 class="font-campton font-bold text-neutral-9 text-lg md:text-xl">Personalized Guidance</h3>
              <p class="text-neutral-7 text-sm md:text-base">
                Tailored advice designed to match your goals and unique situation, with clarity and focus; We ensure no
                step is missed. Achieve results with direction and expert insight.
              </p>
            </div>
            <!-- Card 2 -->
            <div class="bg-white rounded-xl p-6 md:p-8 flex flex-col gap-2 shadow-lg">
              <div class=" flex items-center justify-center sm:w-fit sm:h-fit h-10 w-10 mb-2">
                <img src="../../assets/svg/transparent-process.svg" alt="">
              </div>
              <h3 class="font-campton font-bold text-neutral-9 text-lg md:text-xl">Transparent Process</h3>
              <p class="text-neutral-7 text-sm md:text-base">
                Every stage is explained with honesty and full accountability, giving peace of mind; Our process removes
                doubts. Decisions become clear with openness and trusted support.
              </p>
            </div>
            <!-- Card 3 -->
            <div class="bg-white rounded-xl p-6 md:p-8 flex flex-col gap-2 shadow-lg">
              <div class=" flex items-center justify-center sm:w-fit sm:h-fit h-10 w-10 mb-2">
                <img src="../../assets/svg/expert-knowledge.svg" alt="">
              </div>
              <h3 class="font-campton font-bold text-neutral-9 text-lg md:text-xl">Expert Knowledge</h3>
              <p class="text-neutral-7 text-sm md:text-base">
                Years of proven skill ensure you benefit from reliable insights and strategies; We bring depth and
                precision. Gain confidence from guidance backed by tested experience.
              </p>
            </div>
            <!-- Card 4 -->
            <div class="bg-white rounded-xl p-6 md:p-8 flex flex-col gap-2 shadow-lg">
              <div class=" flex items-center justify-center sm:w-fit sm:h-fit h-10 w-10 mb-2">
                <img src="../../assets/svg/eToESupport.svg" alt="">
              </div>
              <h3 class="font-campton font-bold text-neutral-9 text-lg md:text-xl">End-to-End Support</h3>
              <p class="text-neutral-7 text-sm md:text-base">
                From the first meeting to final execution, we walk with you always, step by step; No detail is
                overlooked.
                Your journey stays supported by our consistent presence.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
    <section v-else
      class=" bg-top bg-no-repeat min-h-screen relative lg:bg-cover bg-[url('/svg/fillConsultationFormBg.svg')] py-10 md:py-16">
      <div class="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 class="font-campton font-bold text-[1.5rem] md:text-[2rem] text-neutral-5 text-center leading-tight">
          Begin Your Journey to Expert Consultation
        </h2>
        <p class="mt-2 md:mt-4 text-neutral-5 text-center text-base md:text-lg max-w-2xl mx-auto">
          Fill in your details today and unlock personalized guidance, seamless support, and exceptional service
          tailored to give you the best experience every step of the way.
        </p>
        <form class="bg-[#F7F7FD] shadow-sm rounded-xl p-6 sm:mt-16 mt-8 md:p-8 space-y-4 max-w-3xl mx-auto">
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
    </section>
  </div>
</template>
