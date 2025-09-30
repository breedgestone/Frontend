<template>
  <div class="flex items-center h-screen  w-full font-poppins">
    <div :class="[!passwordScreen ? `bg-[url('/svg/loginBg.svg')]` : `bg-[url('/svg/loginPassword.svg')]`]"
      class="lg:w-3/4 md:w-1/2 h-full md:flex hidden   bg-center bg-no-repeat relative lg:bg-cover ">
    </div>
    <div
      class="lg:w-1/4 sm:min-w-[500px] overflow-y-auto p-4 min-w-full md:w-1/2 h-full w-full sm:p-8 bg-primary-0 flex flex-col justify-between">

      <div class="flex-1">
        <img src="../../assets/svg/logo.svg" alt="">
        <h2 class="text-xl mt-12 font-campton text-neutral-5 sm:text-2xl xl:text-3xl font-bold leading-tight">Welcome to
          Breedgestone</h2>
        <p class="mt-4 text-neutral-4 font-poppins  max-w-xl">Type your e-mail or phone number to log in or
          create a Breedgestone account.</p>
        <input v-if="!passwordScreen" v-model="email" type="text" placeholder="*Enter Email or Phone Number"
          class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5 my-8"
          required />
        <input v-else v-model="password" type="password" placeholder="*Password"
          class="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 bg-primary-0 text-neutral-9 placeholder-neutral-4 focus:outline-primary-5 my-8"
          required />
        <div class="w-full flex justify-end items-center mb-2">
          <router-link class="text-neutral-4" to="/forgot-password">Forgot Password</router-link>
        </div>

        <B-button @click="continueToPassword" class="w-full">Continue</B-button>
        <p class="my-8 text-neutral-4">By continuing you agree to Breedgestone’s <router-link to="">Terms and
            Condition</router-link></p>
        <div v-if="!passwordScreen" class=" border-[0.5px] w-full border-[#A0A0A0] mb-8"></div>
        <div class="flex flex-col items-center gap-4" v-if="!passwordScreen">
          <button class="bg-[#1877F2] flex items-center gap-2 justify-center p-2 rounded-sm text-white w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_319_110480)">
                <rect width="24" height="24" fill="#1877F2" />
                <path
                  d="M23.5 12.0699C23.5 5.7186 18.3513 0.56988 12 0.56988C5.64872 0.56988 0.5 5.7186 0.5 12.0699C0.5 17.8099 4.70538 22.5674 10.2031 23.4302V15.3941H7.2832V12.0699H10.2031V9.53629C10.2031 6.6541 11.92 5.06207 14.5468 5.06207C15.805 5.06207 17.1211 5.28668 17.1211 5.28668V8.11675H15.671C14.2424 8.11675 13.7969 9.00322 13.7969 9.91266V12.0699H16.9863L16.4765 15.3941H13.7969V23.4302C19.2946 22.5674 23.5 17.8099 23.5 12.0699Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_319_110480">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            Sign In with Facebook
          </button>
          <button class="border-[#A0A0A0] flex items-center gap-2 justify-center p-2 rounded-sm border w-full">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" transform="translate(0.5)" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M23.54 12.2615C23.54 11.446 23.4668 10.6619 23.3309 9.90918H12.5V14.3576H18.6891C18.4225 15.7951 17.6123 17.013 16.3943 17.8285V20.714H20.1109C22.2855 18.7119 23.54 15.7637 23.54 12.2615Z"
                fill="#4285F4" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.4995 23.5001C15.6045 23.5001 18.2077 22.4703 20.1104 20.7139L16.3938 17.8285C15.364 18.5185 14.0467 18.9262 12.4995 18.9262C9.50425 18.9262 6.96902 16.9032 6.0647 14.1851H2.22266V17.1646C4.11493 20.923 8.00402 23.5001 12.4995 23.5001Z"
                fill="#34A853" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.06523 14.185C5.83523 13.495 5.70455 12.7579 5.70455 12C5.70455 11.242 5.83523 10.505 6.06523 9.81499V6.83545H2.22318C1.44432 8.38795 1 10.1443 1 12C1 13.8557 1.44432 15.612 2.22318 17.1645L6.06523 14.185Z"
                fill="#FBBC05" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.4995 5.07386C14.1879 5.07386 15.7038 5.65409 16.8956 6.79364L20.194 3.49523C18.2024 1.63955 15.5992 0.5 12.4995 0.5C8.00402 0.5 4.11493 3.07705 2.22266 6.83545L6.0647 9.815C6.96902 7.09682 9.50425 5.07386 12.4995 5.07386Z"
                fill="#EA4335" />
            </svg>


            Sign In with Google </button>
          <p class="mt-8">For further support, you may visit the Help Center or Contact our customer service team.</p>
        </div>
      </div>
      <!-- footer -->
      <div class="flex relative bottom-0  items-center left-0 w-full  justify-between  mt-8">
        <img class="w-[100px] h-[21px]" src="../../assets/svg/logo.svg" alt="">
        <p class="text-lg  font-campton text-neutral-5 font-bold leading-tight">
          ©Breedgestone 2025</p>
      </div>
    </div>
  </div>
  <Dialog :show="showModal" @closeModal="showModal = false">
    <template #body>
      <img class="mb-4" src="../../assets/svg/verified.svg" alt="">

      <p class="text-xl  font-campton text-neutral-5 sm:text-2xl xl:text-3xl font-bold leading-tight">
        Congratulations</p>
      <p class="mt-2 text-neutral-4">You’re In. Have a good time👍</p>
    </template>
    <template #footer>
      <B-button @click="showModal = false, router.push('/user-dashboard')" class="w-full">Okay</B-button>
    </template>
  </Dialog>
</template>
<script setup>
import { ref } from 'vue';
import Dialog from '@/components/Dialog.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const passwordScreen = ref(false)
const email = ref('');
const password = ref('');
const showModal = ref(false);
const continueToPassword = () => {
  if (email.value.length && passwordScreen.value === false) {
    passwordScreen.value = true
  } else {
    if (password.value) {
      // login user
      showModal.value = true
    }
  }
}
</script>
