<template>
  <footer class="bg-neutral-9 text-color-primary-0 p-6 md:px-12 md:py-12">
    <!-- Top CTA Section -->
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-neutral-6 pb-12"
    >
      <div>
        <h2 class="text-2xl md:text-3xl font-bold font-campton">
          Start Your Real Estate Journey Today
        </h2>
        <p class="mt-2 text-color-primary-0 font-campton max-w-3xl">
          Your dream property is just a click away. Whether you're looking for a new home, a
          strategic investment, or expert real estate advice, Estatein is here to assist you every
          step of the way. Take the first step towards your real estate goals and explore our
          available properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <B-button size="lg"> Explore Properties </B-button>
    </div>

    <!-- Middle Links -->
    <div class="max-w-7xl mx-auto mt-10 flex flex-wrap gap-8 text-sm font-poppins">
      <!-- Logo + Newsletter -->
      <div class="w-full md:w-[400px]">
        <img src="../../assets/svg/white-logo.svg" alt="" />
        <p class="text-sm text-color-primary-0 my-3">Subscribe To Our Newsletter</p>
        <div class="flex items-center bg-neutral-8 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter Your Email"
            class="w-full px-3 py-2 bg-neutral-8 text-sm text-white outline-none"
          />
          <button class="bg-color-primary-5 px-4 py-2 hover:bg-color-primary-4 transition">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9894 1.22287C24.3644 0.584123 23.4394 0.347873 22.5769 0.597873L2.46435 6.40912C1.55435 6.66162 0.909353 7.38287 0.735603 8.29787C0.558103 9.23037 1.1781 10.4154 1.9881 10.9104L8.27685 14.7504C8.92185 15.1454 9.75435 15.0466 10.2881 14.5116L17.4894 7.31037C17.8519 6.93412 18.4519 6.93412 18.8144 7.31037C19.1769 7.67162 19.1769 8.26037 18.8144 8.63537L11.6006 15.8366C11.0656 16.3716 10.9656 17.2016 11.3594 17.8479L15.2019 24.1604C15.6519 24.9091 16.4269 25.3354 17.2769 25.3354C17.3769 25.3354 17.4894 25.3354 17.5894 25.3216C18.5644 25.1979 19.3394 24.5341 19.6269 23.5966L25.5894 3.63537C25.8519 2.78537 25.6144 1.86037 24.9894 1.22287Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Links -->
      <div class="w-full sm:w-fit">
        <h4 class="font-semibold font-campton mb-3">Home</h4>
        <ul class="space-y-2 text-color-primary-0">
          <li><a href="#">Our Clients</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Location Search</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ’s</a></li>
        </ul>
      </div>

      <div class="w-full sm:w-fit">
        <h4 class="font-semibold font-campton mb-3">About Us</h4>
        <ul class="space-y-2 text-color-primary-0">
          <li><a href="#">Our Journey</a></li>
          <li><a href="#">Our Values</a></li>
          <li><a href="#">Our Achievements</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Our Team</a></li>
        </ul>
      </div>

      <div class="w-full sm:w-fit">
        <h4 class="font-semibold font-campton mb-3">Properties</h4>
        <ul class="space-y-2 text-color-primary-0">
          <li><a href="#">Rent a House</a></li>
          <li><a href="#">Buy a House</a></li>
          <li><a href="#">Shortlet</a></li>
        </ul>
      </div>

      <div class="w-full sm:w-fit">
        <h4 class="font-semibold font-campton mb-3">Products/Design</h4>
        <ul class="space-y-2 text-color-primary-0">
          <li><a href="#">All Categories</a></li>
          <li><a href="#">Deal of The Week</a></li>
          <li><a href="#">Popular Products</a></li>
          <li><a href="#">Interior Design</a></li>
        </ul>
      </div>

      <div class="w-full sm:w-fit">
        <h4 class="font-semibold font-campton mb-3">Contact Us</h4>
        <ul class="space-y-2 text-color-primary-0">
          <li><a href="#">Interior Design Consultation</a></li>
          <li><a href="#">Properties Consultation</a></li>
          <li><a href="#">Our Offices</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="max-w-7xl sm:text-left text-center mx-auto mt-10 flex flex-col-reverse md:flex-row items-center justify-between text-color-primary-0 text-sm gap-3 sm:gap-4 border-t border-neutral-6 pt-6"
    >
      <div class="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
        <p>@2025 Breedgestone. All Rights Reserved.</p>
        <div class="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
          <a href="#" class="hover:text-white">Terms & Conditions</a>
          <a href="#" class="hover:text-white">Privacy Policy</a>
        </div>
      </div>
      <div class="flex gap-4 text-white icons items-center">
        <img src="../../assets/svg/footerSocialIcon/facebook.svg" alt="breedgestone_facebook" />
        <img src="../../assets/svg/footerSocialIcon/in.svg" alt="breedgestone_linkedin" />
        <img src="../../assets/svg/footerSocialIcon/x.svg" alt="breedgestone_twitter" />
        <img src="../../assets/svg/footerSocialIcon/youtube.svg" alt="breedgestone_youtube" />
      </div>
    </div>
  </footer>
</template>

<script setup>
// No JS needed for now
</script>

<style scoped>
/* Custom Fonts */
@font-face {
  font-family: 'Campton';
  src: url('/fonts/Campton-Bold.otf') format('opentype');
  font-weight: bold;
}

@font-face {
  font-family: 'Poppins';
  src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
}

.font-campton {
  font-family: 'Campton', sans-serif;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Map CSS variables into Tailwind */
.text-color-primary-0 {
  color: var(--color-primary-0);
}

.text-color-primary-1 {
  color: var(--color-primary-1);
}

.bg-color-primary-5 {
  background-color: var(--color-primary-5);
}

.bg-neutral-9 {
  background-color: var(--color-neutral-9);
}

.bg-neutral-8 {
  background-color: var(--color-neutral-8);
}

.border-neutral-6 {
  border-color: var(--color-neutral-6);
}

.icons img {
  width: 18px;
}
</style>
