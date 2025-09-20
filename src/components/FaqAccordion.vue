<script>
export default {
    props: {
        faq: Object,
        active: Boolean
    },
    emits: ['toggle'],

}
</script>
<template>
    <div
        :class="['rounded-xl', active ? 'bg-[#F3F0FF]' : 'bg-primary-0', 'shadow sm:p-6 p-3 flex items-center justify-between transition-all']">
        <div class="flex flex-col items-center gap-4 w-full">
            <div class="flex w-full justify-between items-center gap-2">
                <div class="flex sm:flex-row flex-col gap-1">
                    <img v-if="active" src="../assets/svg/activeFaq.svg" alt="" class="w-8 h-8" />
                    <img v-else src="../assets/svg/InactiveFaq.svg" alt="" class="w-5 h-5" />
                    <h4 :class="['font-semibold', 'text-neutral-9', 'mb-1', active ? 'text-lg' : '']">{{ faq.question }}
                    </h4>
                </div>
                <button @click="$emit('toggle')" class="px-4 py-2 flex items-center justify-center rounded-lg"
                    :class="active ? 'bg-primary-5 text-white' : 'bg-[#F1F2F9] text-[#6F6C8F]'">
                    <span v-if="active">−</span>
                    <span v-else>+</span>
                </button>
            </div>
            <p v-if="active" class="text-neutral-4 text-sm mt-2">{{ faq.answer }}</p>
        </div>

    </div>
</template>