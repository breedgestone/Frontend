<script setup></script>

<template>
  <div class="font-poppins">
    <!-- Consultation Plan Section -->
    <section class="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 class="font-campton font-bold text-3xl text-neutral-9">Our Consultation Plan</h2>
      <p class="mt-4 text-neutral-3">Choose the plan that works for you.</p>

      <!-- Plan Toggle -->
      <div class="mt-6 flex justify-center gap-4">
        <button class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-2 rounded-lg">
          ₦50,000.00
        </button>
        <button class="bg-neutral-2 text-neutral-9 px-6 py-2 rounded-lg">Interior Design</button>
      </div>

      <!-- Plan Card -->
      <div class="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div class="bg-white shadow-lg rounded-lg p-6 text-left">
          <ul class="space-y-3 text-neutral-3">
            <li>✔ Virtual Tours</li>
            <li>✔ Consultation Session</li>
            <li>✔ Floor Plan Evaluation</li>
            <li>✔ Personalized Recommendations</li>
            <li>✔ Final Feedback & Planning</li>
          </ul>
        </div>
        <div class="bg-color-primary-5 text-white rounded-lg p-6 text-left">
          <h3 class="font-campton font-bold text-xl">Properties</h3>
          <p class="mt-2 text-neutral-1">Our Endless Possibilities</p>
          <ul class="mt-4 space-y-3">
            <li>✔ Home/Apartment Matching</li>
            <li>✔ Interior/Exterior Evaluation</li>
            <li>✔ Layout Suggestions</li>
            <li>✔ Budget & Cost Estimation</li>
            <li>✔ Timeline & Project Tracking</li>
          </ul>
          <button class="mt-6 bg-white text-color-primary-5 px-6 py-3 rounded-lg font-semibold">
            Start Consultation
          </button>
        </div>
      </div>
    </section>

    <!-- Guidance Section -->
    <section class="bg-neutral-9 py-16">
      <div class="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 class="font-campton font-bold text-3xl">
          Guiding You to Smarter Choices, Every Step of the Way
        </h2>
        <p class="mt-4 text-neutral-2 max-w-2xl mx-auto">
          We simplify the complex, offering tailored guidance that helps you make confident
          decisions and achieve results that meet your goals.
        </p>

        <div class="mt-10 grid md:grid-cols-2 gap-8 text-left">
          <div class="bg-neutral-8 p-6 rounded-lg">
            <h3 class="font-campton font-bold text-xl text-white">Personalised Guidance</h3>
            <p class="mt-2 text-neutral-2">
              We provide tailored advice to help you make informed decisions.
            </p>
          </div>
          <div class="bg-neutral-8 p-6 rounded-lg">
            <h3 class="font-campton font-bold text-xl text-white">Transparent Process</h3>
            <p class="mt-2 text-neutral-2">
              Clear steps and updates at every stage, so you know exactly what to expect.
            </p>
          </div>
          <div class="bg-neutral-8 p-6 rounded-lg">
            <h3 class="font-campton font-bold text-xl text-white">Expert Knowledge</h3>
            <p class="mt-2 text-neutral-2">
              Access decades of expertise from our experienced professionals.
            </p>
          </div>
          <div class="bg-neutral-8 p-6 rounded-lg">
            <h3 class="font-campton font-bold text-xl text-white">End-to-End Support</h3>
            <p class="mt-2 text-neutral-2">
              From start to finish, we’re here to support you at every step of the journey.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation Form Section -->
    <section class="bg-neutral-1 py-16">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="font-campton font-bold text-3xl text-neutral-9">
            Begin Your Journey to Expert Consultation
          </h2>
          <p class="mt-4 text-neutral-3">
            Fill in your details today and unlock personalised guidance, seamless support, and
            exceptional service tailored to give you the best experience every step of the way.
          </p>
        </div>

        <form class="bg-white shadow-lg rounded-lg p-6 space-y-4 text-left">
          <div class="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              class="w-full border border-neutral-3 rounded-lg px-4 py-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="w-full border border-neutral-3 rounded-lg px-4 py-3"
            />
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              class="w-full border border-neutral-3 rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Pick a Date & Time"
              class="w-full border border-neutral-3 rounded-lg px-4 py-3"
            />
          </div>
          <textarea
            placeholder="Write your message"
            class="w-full border border-neutral-3 rounded-lg px-4 py-3 h-28"
          ></textarea>

          <label class="flex items-center gap-2 text-neutral-3 text-sm">
            <input type="checkbox" class="accent-color-primary-5" />
            I agree with the terms and privacy policy.
          </label>

          <button
            type="submit"
            class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-3 rounded-lg w-full"
          >
            Pay ₦50,000
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
