<template>
    <div
        class="flex flex-wrap gap-4 bg-primary-0-5/50 px-4 py-2 rounded-lg w-fit focus:border-primary-0-5/50 focus:ring-primary-0-5/50">
        <button v-for="tab in tabs" :key="tab" @click="$emit('update:activeTab', tab)" :class="[
            'sm:px-5 px-3 py-2 rounded-[6px] font-medium transition',
            activeTab === tab
                ? 'bg-primary-0 text-neutral-5 border-primary-3 shadow-lg shadow-primary-0-5 border-2'
                : 'text-neutral-7 hover:bg-primary-0-5',
        ]">
            {{ tab }}
        </button>
    </div>
</template>

<script setup>
defineProps({
    tabs: {
        type: Array,
        required: true,
    },
    activeTab: {
        type: String,
        required: true,
    },
})
</script>