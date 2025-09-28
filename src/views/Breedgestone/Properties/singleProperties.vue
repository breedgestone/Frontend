<template>
    <main class="font-poppins">
        <!-- Hero Section with Image Gallery -->
        <section class="bg-[#F9F9F9]">
            <div class="max-w-7xl mx-auto md:px-12 px-4 py-8">
                <!-- Breadcrumb -->
                <div class="flex flex-col sm:gap-8 gap-4">
                    <div>
                        <button @click="router.go(-1)
                            " class="flex items-center gap-2 text-xs sm:text-xl ">
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.613099 6.78973C0.425627 6.97726 0.320312 7.23156 0.320312 7.49673C0.320312 7.76189 0.425628 8.0162 0.613099 8.20373L6.2701 13.8607C6.36235 13.9562 6.47269 14.0324 6.59469 14.0848C6.7167 14.1372 6.84792 14.1648 6.9807 14.166C7.11348 14.1671 7.24516 14.1418 7.36805 14.0915C7.49095 14.0413 7.6026 13.967 7.69649 13.8731C7.79039 13.7792 7.86464 13.6676 7.91492 13.5447C7.9652 13.4218 7.9905 13.2901 7.98935 13.1573C7.9882 13.0245 7.96061 12.8933 7.9082 12.7713C7.85579 12.6493 7.77961 12.539 7.6841 12.4467L3.7341 8.49673L16.9771 8.49673C17.2423 8.49673 17.4967 8.39137 17.6842 8.20383C17.8717 8.0163 17.9771 7.76194 17.9771 7.49673C17.9771 7.23151 17.8717 6.97716 17.6842 6.78962C17.4967 6.60208 17.2423 6.49673 16.9771 6.49673L3.7341 6.49673L7.6841 2.54673C7.86626 2.35812 7.96705 2.10552 7.96477 1.84333C7.96249 1.58113 7.85732 1.33032 7.67192 1.14491C7.48651 0.959501 7.2357 0.854331 6.9735 0.852052C6.7113 0.849774 6.4587 0.950568 6.2701 1.13273L0.613099 6.78973Z"
                                    fill="#333333" />
                            </svg>
                            Go back
                        </button>
                    </div>
                    <div class="flex w-full items-center justify-between">
                        <h1 class="text-sm sm:text-xl  lg:text-3xl font-bold font-campton text-neutral-6">
                            {{ property.title }}
                        </h1>
                        <p class="text-sm sm:text-xl  lg:text-3xl font-bold font-campton text-primary-5">
                            ₦{{ formatPrice(property.price) }}
                            <span class="text-sm text-neutral-4 font-normal" v-if="property.type === 'Rent'">
                                /month
                            </span>
                        </p>
                    </div>
                    <div class="flex w-full sm:items-center gap-4 justify-between sm:flex-row flex-col-reverse">

                        <Tabs :tabs="videosOrPhotos" :activeTab="activeTabForvideosOrPhotos"
                            @update:activeTab="activeTabForvideosOrPhotos = $event" />
                        <div class="flex items-center gap-3">
                            <div role="button" class="email flex items-center gap-1">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 4L10 9L2 4V2L10 7L18 2M18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
                                        fill="url(#paint0_linear_319_97207)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_319_97207" x1="0" y1="8" x2="20" y2="8"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C899EB" />
                                            <stop offset="1" stop-color="#7600CD" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h4 class="font-capton font-bold text-neutral-5 sm:text-[16px] text-sm">
                                    Email
                                </h4>
                            </div>
                            <div role="button" class="border-x px-2 border-neutral-5/30 flex items-center gap-1">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_319_130511)">
                                        <path
                                            d="M0.967941 9.08119C0.967514 10.6261 1.3712 12.1347 2.1388 13.4643L0.894531 18.0074L5.54374 16.7883C6.82966 17.4883 8.27042 17.8552 9.73453 17.8553H9.73838C14.5717 17.8553 18.5061 13.9223 18.5082 9.0881C18.5091 6.7456 17.5977 4.54287 15.9417 2.88566C14.2861 1.22859 12.0842 0.315522 9.73802 0.314453C4.90415 0.314453 0.970008 4.24724 0.968013 9.08119"
                                            fill="url(#paint0_linear_319_130511)" />
                                        <path
                                            d="M0.658292 9.07923C0.657793 10.6798 1.07595 12.2423 1.87091 13.6195L0.582031 18.3254L5.39795 17.0627C6.72489 17.7862 8.21889 18.1676 9.73912 18.1682H9.74304C14.7497 18.1682 18.8255 14.0937 18.8276 9.0865C18.8285 6.65983 17.8843 4.37792 16.1692 2.66134C14.4539 0.944966 12.1732 -0.000955318 9.74304 -0.00195312C4.73547 -0.00195312 0.660288 4.07195 0.658292 9.07923ZM3.52635 13.3823L3.34653 13.0969C2.59062 11.895 2.19164 10.506 2.19221 9.0798C2.19377 4.91788 5.5809 1.53182 9.74589 1.53182C11.7629 1.53267 13.6584 2.31895 15.0842 3.74553C16.5098 5.17225 17.2943 7.06879 17.2938 9.08593C17.2919 13.2479 13.9047 16.6343 9.74304 16.6343H9.74005C8.38495 16.6336 7.05595 16.2697 5.89692 15.582L5.6211 15.4184L2.76324 16.1677L3.52635 13.3823Z"
                                            fill="url(#paint1_linear_319_130511)" />
                                        <path
                                            d="M7.47056 5.27835C7.3005 4.9004 7.12154 4.89277 6.95982 4.88614C6.8274 4.88044 6.67602 4.88087 6.52478 4.88087C6.3734 4.88087 6.12744 4.93781 5.91954 5.16481C5.71143 5.39203 5.125 5.94111 5.125 7.05787C5.125 8.17463 5.93843 9.25397 6.05182 9.40557C6.16536 9.55688 7.62215 11.922 9.92937 12.8318C11.8469 13.5879 12.2371 13.4376 12.6532 13.3996C13.0695 13.3619 13.9963 12.8507 14.1854 12.3207C14.3746 11.7907 14.3746 11.3364 14.3179 11.2415C14.2611 11.1469 14.1098 11.0901 13.8828 10.9766C13.6558 10.8631 12.5397 10.3139 12.3317 10.2382C12.1235 10.1625 11.9722 10.1247 11.8209 10.352C11.6695 10.5789 11.2348 11.0901 11.1023 11.2415C10.9699 11.3932 10.8374 11.4121 10.6105 11.2985C10.3834 11.1847 9.65234 10.9453 8.78503 10.172C8.11022 9.57035 7.65465 8.82734 7.52223 8.60005C7.38981 8.37312 7.50805 8.25011 7.62187 8.137C7.72386 8.03529 7.84894 7.87194 7.96255 7.73944C8.07573 7.60688 8.1135 7.5123 8.18919 7.36092C8.26496 7.20939 8.22704 7.07683 8.17038 6.96329C8.1135 6.84975 7.6724 5.72715 7.47056 5.27835Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_319_130511" x1="881.577" y1="1769.6"
                                            x2="881.577" y2="0.314453" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1FAF38" />
                                            <stop offset="1" stop-color="#60D669" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_319_130511" x1="912.863" y1="1832.73"
                                            x2="912.863" y2="-0.00195312" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F9F9F9" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                        <clipPath id="clip0_319_130511">
                                            <rect width="18.2456" height="18.3882" fill="white"
                                                transform="translate(0.582031)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h4 class="font-capton font-bold text-neutral-5 sm:text-[16px] text-sm">
                                    Whatsapp
                                </h4>
                            </div>
                            <div role="button" class=" flex items-center gap-1">
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.910156 0.347656H16.1148V11.7512H8.90592L6.61191 14.0452L4.3179 11.7512H0.910156V0.347656ZM6.61191 6.04941C6.61191 5.79738 6.51179 5.55567 6.33358 5.37745C6.15536 5.19924 5.91365 5.09912 5.66162 5.09912C5.40958 5.09912 5.16787 5.19924 4.98966 5.37745C4.81145 5.55567 4.71133 5.79738 4.71133 6.04941C4.71133 6.30144 4.81145 6.54315 4.98966 6.72137C5.16787 6.89958 5.40958 6.9997 5.66162 6.9997C5.91365 6.9997 6.15536 6.89958 6.33358 6.72137C6.51179 6.54315 6.61191 6.30144 6.61191 6.04941ZM9.46279 6.04941C9.46279 5.79738 9.36267 5.55567 9.18445 5.37745C9.00624 5.19924 8.76453 5.09912 8.5125 5.09912C8.26046 5.09912 8.01875 5.19924 7.84054 5.37745C7.66232 5.55567 7.5622 5.79738 7.5622 6.04941C7.5622 6.30144 7.66232 6.54315 7.84054 6.72137C8.01875 6.89958 8.26046 6.9997 8.5125 6.9997C8.76453 6.9997 9.00624 6.89958 9.18445 6.72137C9.36267 6.54315 9.46279 6.30144 9.46279 6.04941ZM12.3137 6.04941C12.3137 5.79738 12.2135 5.55567 12.0353 5.37745C11.8571 5.19924 11.6154 5.09912 11.3634 5.09912C11.1113 5.09912 10.8696 5.19924 10.6914 5.37745C10.5132 5.55567 10.4131 5.79738 10.4131 6.04941C10.4131 6.30144 10.5132 6.54315 10.6914 6.72137C10.8696 6.89958 11.1113 6.9997 11.3634 6.9997C11.6154 6.9997 11.8571 6.89958 12.0353 6.72137C12.2135 6.54315 12.3137 6.30144 12.3137 6.04941Z"
                                        fill="url(#paint0_linear_319_130519)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_319_130519" x1="0.910156" y1="7.19641"
                                            x2="16.1148" y2="7.19641" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C899EB" />
                                            <stop offset="1" stop-color="#7600CD" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <h4 class="font-capton font-bold text-neutral-5 sm:text-[16px] text-sm">
                                    In-App Chat
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- Property Images -->
                <div class="flex sm:flex-col flex-col-reverse gap-4 my-8 bg-white md:p-12 p-4 rounded-xl">
                    <div class="flex gap-4 overflow-x-auto sm:py-2 py-1">
                        <img v-for="(image, index) in property.images.slice(0, 4)" :key="index" :src="image"
                            :alt="`${property.title} - Image ${index + 1}`"
                            class="sm:w-36 w-19 sm:h-24 h-12 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                            :class="{ 'ring-2 ring-primary-5': activeImage === image }" @click="activeImage = image" />
                        <img v-for="(image, index) in property.images.slice(0, 4)" :key="index" :src="image"
                            :alt="`${property.title} - Image ${index + 1}`"
                            class="sm:w-36 w-19 sm:h-24 h-12 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                            :class="{ 'ring-2 ring-primary-5': activeImage === image }" @click="activeImage = image" />
                        <img v-for="(image, index) in property.images.slice(0, 4)" :key="index" :src="image"
                            :alt="`${property.title} - Image ${index + 1}`"
                            class="sm:w-36 w-19 sm:h-24 h-12 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                            :class="{ 'ring-2 ring-primary-5': activeImage === image }" @click="activeImage = image" />
                    </div>
                    <!-- Main Image -->
                    <div class="relative">
                        <img :src="activeImage" :alt="property.title"
                            class="w-full h-70 lg:h-[500px] object-cover rounded-lg shadow-lg cursor-pointer" />

                    </div>

                    <!-- Thumbnail Grid -->

                </div>
            </div>
        </section>
        <section class="py-16">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <div class="sm:flex-row flex-wrap flex flex-col items-start gap-4">
                    <div class="bg-[#F7F7FD] p-4 rounded-xl max-w-3xl">
                        <h2 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6 mb-8">
                            Description
                        </h2>
                        <p class="text-sm">{{ property.description }}</p>
                        <div
                            class="border-t py-3 w-full my-2 border-[#C0C0C0] flex flex-wrap gap-2 justify-between xl:text-sm text-xs text-neutral-6 mt-3">
                            <div class="flex gap-2 flex-row items-center">
                                <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]"
                                    src="../../../assets/svg/purpleCar.svg" alt="">
                                <span>{{ property.beds }} Bedrooms</span>
                            </div>
                            <div class="flex gap-2 flex-row border-x px-3 items-center">
                                <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]"
                                    src="../../../assets/svg/sink.svg" alt="" />
                                <span>{{ property.baths }} Bathrooms</span>
                            </div>
                            <div class="flex gap-2 flex-row items-center">
                                <img class="xl:w-[28px] xl:h-[28px] w-[21px] h-[21px]"
                                    src="../../../assets/svg/area.svg" alt="" />
                                <span>{{ property.size }} Square Feet</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#F7F7FD] p-4 rounded-xl max-w-3xl">
                        <h2 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6 mb-8">
                            Key Features and Amenities
                        </h2>
                        <div class="flex flex-col gap-4">

                            <div class="gradient flex items-center gap-2 p-3" v-for="item in property.amenities">
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.6152 0.0949517C11.9165 0.262894 12.0643 0.614627 11.9736 0.947364L9.98195 8.25003H17.25C17.5487 8.25003 17.8189 8.42721 17.9379 8.70111C18.0569 8.97502 18.0021 9.29344 17.7983 9.51176L7.29831 20.7618C7.06298 21.0139 6.68604 21.073 6.38481 20.9051C6.08357 20.7372 5.9357 20.3854 6.02644 20.0527L8.01808 12.75H0.750016C0.451369 12.75 0.181182 12.5728 0.062156 12.2989C-0.0568695 12.025 -0.00204775 11.7066 0.201725 11.4883L10.7017 0.238287C10.937 -0.0138462 11.314 -0.0729909 11.6152 0.0949517Z"
                                        fill="#7600CD" />
                                </svg>

                                <p>{{ item }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-16">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <div class="md:flex-row flex-wrap lg:flex-nowrap flex flex-col justify-between items-start gap-4">
                    <div class=" p-4 rounded-xl max-w-lg xl:max-w-xl ">
                        <img src="../../../assets/svg/three-yellow-stars-white-bg.svg" alt="three-yellow-stars">
                        <div class="flex flex-col gap-3">

                            <h2 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6 mb-8">
                                Book an Inspection
                            </h2>
                            <p>Interested in this property? Fill out the form below, and our real estate experts will
                                get
                                back to you with more details, including scheduling a viewing and answering any
                                questions
                                you may have.</p>
                            <h3 class="text-sm lg:text-xl font-bold font-campton text-neutral-6">INSPECTION FEE
                            </h3>
                            <div class="flex items-center gap-3">
                                <span class="text-xs lg:text-lg font-bold text-neutral-6">₦15,000</span>
                                <Badge>Non-Refundable Inspection Fee</Badge>
                            </div>
                        </div>
                    </div>
                    <form class="bg-[#F7F7FD] max-w-2xl shadow-sm rounded-xl p-6 md:p-8 space-y-4 ">
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
                            <B-button class="flex-1 max-w-[250px]" type="submit"> Book an appointment
                            </B-button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Similar Properties -->
        <section class="bg-white py-12">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <h2 class="text-2xl lg:text-3xl font-bold font-campton text-neutral-6 mb-8">
                    Recommended for you
                </h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 font-poppins">
                    <PropertyCard v-for="similarProperty in similarProperties" :key="similarProperty.id"
                        :property="similarProperty" @click="goToProperty(similarProperty.id)" />
                </div>
            </div>
        </section>
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto md:px-12 px-4">
                <p class="font-semibold text-center text-neutral-9 uppercase mb-2 tracking-wide">
                    GET ALL THE ANSWERS TO YOUR QUESTIONS
                </p>
                <h2 class="font-campton text-center lg:text-3xl xl:text-4xl text-2xl font-bold mb-8">
                    Frequently Asked Questions
                </h2>
                <div
                    class="w-full flex flex-col xl:flex-row xl:gap-12 gap-6 items-center xl:items-start justify-center">
                    <!-- FAQ List -->
                    <div class="w-full xl:w-1/2 flex flex-col gap-4">
                        <FaqAccordion v-for="(faq, i) in faqs.slice(0, Math.ceil(faqs.length / 2))" :key="faq.question"
                            :faq="faq" :active="activeFaq === i" @toggle="activeFaq = activeFaq === i ? null : i" />
                    </div>
                    <div class="w-full xl:w-1/2 flex flex-col gap-4">
                        <FaqAccordion v-for="(faq, i) in faqs.slice(Math.ceil(faqs.length / 2))" :key="faq.question"
                            :faq="faq" :active="activeFaq === i + Math.ceil(faqs.length / 2)"
                            @toggle="activeFaq = activeFaq === i + Math.ceil(faqs.length / 2) ? null : i + Math.ceil(faqs.length / 2)" />
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PropertyCard from '@/components/PropertyCard.vue'
import StarRating from '@/components/StarRating.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'
import { dummy } from '../../dummy'
import Tabs from '@/components/Tabs.vue'
import Badge from '@/components/Badge.vue'

const route = useRoute()
const router = useRouter()

// Reactive data
const activeImage = ref('')
const isWishlisted = ref(false)
const videosOrPhotos = ref(['videos', 'photos'])
const activeTabForvideosOrPhotos = ref('videos');
// Mock property data - in real app, fetch by route.params.id
const property = ref({
    id: route.params.id || 1,
    title: '6 Bedroom Detached Duplex',
    location: 'Abuja, Nigeria',
    price: 85000000,
    type: 'Buy',
    category: 'Luxury',
    beds: 6,
    baths: 4,
    sqft: 3500,
    amenities: ["Spacious rooftop lounge with panoramic city views", "Gourmet kitchen with high-end appliances ", "Luxurious infinity pool surrounded by tropical landscaping", "Elegant outdoor dining area with a built-in barbecue grill", "Private home theater equipped with the latest technology"],
    description: 'This magnificent 6-bedroom detached duplex represents the pinnacle of luxury living in Abuja. Featuring a stunning rooftop terrace with panoramic city views, this property combines contemporary design with premium finishes throughout.',
    images: [
        '/svg/house2.svg',
        '/svg/house2.svg',
        '/svg/house2.svg',
        '/svg/house2.svg',
        '/svg/house2.svg'
    ],
    listedDate: new Date('2024-01-15')
})

// Mock agent data
const agent = ref({
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    rating: 4.8,
    reviews: 127,
    phone: '+234 812 345 6789',
    email: 'sarah@realestate.com'
})

// Amenities list
const amenities = ref([
    'Air Conditioning',
    'Swimming Pool',
    'Gym/Fitness Center',
    'Security System',
    'Parking Garage',
    'Garden/Landscaping',
    'Modern Kitchen',
    'Walk-in Closets',
    'Balcony/Terrace',
    'High-speed Internet',
    'Backup Generator',
    'CCTV Surveillance'
])

// Computed properties
const similarProperties = computed(() => {
    return dummy.filter(p =>
        p.type === property.value.type &&
        p.id !== property.value.id
    ).slice(0, 4)
})
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
// Methods
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG').format(price)
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
}



const contactAgent = () => {
    // Implement contact functionality
    alert('Contact agent functionality - integrate with your contact system')
}

const scheduleViewing = () => {
    // Implement scheduling functionality
    alert('Schedule viewing functionality - integrate with your booking system')
}

const toggleWishlist = () => {
    isWishlisted.value = !isWishlisted.value
}

const goToProperty = (id) => {
    router.push({ name: 'property-single', params: { id } })
}

// Lifecycle
onMounted(() => {
    // Set first image as active
    if (property.value.images.length > 0) {
        activeImage.value = property.value.images[0]
    }

    // In real app, fetch property data here
    // fetchProperty(route.params.id)
})
</script>

<style scoped>
.gradient {
    background: linear-gradient(90deg, #B8B8DB -20.53%, #F7F7FD 100%);

}
</style>