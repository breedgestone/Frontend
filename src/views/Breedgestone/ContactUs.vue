<script setup></script>

<template>
    <div class="font-poppins">
        <!-- Contact Section -->
        <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
            <!-- Left: Form -->
            <div>
                <h2 class="font-campton font-bold text-3xl text-neutral-9">Get in touch</h2>
                <p class="mt-2 text-neutral-3">
                    We’d love to hear from you. Please fill out this form.
                </p>

                <form class="mt-8 bg-neutral-1 shadow-sm rounded-lg p-6 space-y-4">
                    <div class="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="*Full Name"
                            class="w-full border border-neutral-3 rounded-lg px-4 py-3" />
                        <select class="w-full border border-neutral-3 rounded-lg px-4 py-3 text-neutral-3">
                            <option>*Reason for Contacting Us</option>
                            <option>General Inquiry</option>
                            <option>Support</option>
                            <option>Partnership</option>
                        </select>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4">
                        <input type="email" placeholder="*Email Address"
                            class="w-full border border-neutral-3 rounded-lg px-4 py-3" />
                        <input type="tel" placeholder="*Phone Number"
                            class="w-full border border-neutral-3 rounded-lg px-4 py-3" />
                    </div>
                    <textarea placeholder="Write your message"
                        class="w-full border border-neutral-3 rounded-lg px-4 py-3 h-32"></textarea>

                    <label class="flex items-center gap-2 text-sm text-neutral-3">
                        <input type="checkbox" class="accent-color-primary-5" />
                        I agree with
                        <a href="#" class="text-color-primary-5 underline">Terms of Use</a>
                        and
                        <a href="#" class="text-color-primary-5 underline">Privacy Policy</a>
                    </label>

                    <button type="submit"
                        class="bg-color-primary-5 hover:bg-color-primary-4 text-white px-6 py-3 rounded-lg w-full">
                        Contact Us
                    </button>
                </form>
            </div>

            <!-- Right: Info -->
            <div>
                <h2 class="font-campton font-bold text-3xl text-neutral-9">
                    We’d love to hear from you
                </h2>
                <p class="mt-2 text-neutral-3">
                    Need something cleared up? Here are our most frequently asked questions.
                </p>

                <div class="mt-8 space-y-8">
                    <!-- Email -->
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-2">
                            <img src="" alt="Email icon" class="w-6 h-6 bg-neutral-7 rounded" />
                        </div>
                        <div>
                            <h3 class="font-campton font-bold text-neutral-9">Email</h3>
                            <p class="text-neutral-3">Our friendly team is here to help.</p>
                            <a href="mailto:hi@agency.com" class="text-color-primary-5">hi@agency.com</a>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-2">
                            <img src="" alt="Phone icon" class="w-6 h-6 bg-neutral-7 rounded" />
                        </div>
                        <div>
                            <h3 class="font-campton font-bold text-neutral-9">Phone</h3>
                            <p class="text-neutral-3">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+15550000000" class="text-color-primary-5">+1 (555) 000-0000</a>
                        </div>
                    </div>

                    <!-- Office -->
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-2">
                            <img src="" alt="Location icon" class="w-6 h-6 bg-neutral-7 rounded" />
                        </div>
                        <div>
                            <h3 class="font-campton font-bold text-neutral-9">Office</h3>
                            <p class="text-neutral-3">Come say hello at our office HQ.</p>
                            <address class="not-italic text-color-primary-5">
                                100 Smith Street <br />
                                Collingwood VIC 3066 AU
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
