<template>
    <div>
        <h2 class="font-campton lg:text-3xl xl:text-4xl text-2xl sm:text-left text-center font-bold mb-6">
            Inspection</h2>
        <Tabs :tabs="tabs" :activeTab="activeTab" @update:activeTab="activeTab = $event" />
        <Table class="mt-4"
            :columns="['Agent Name', 'Email', 'Phone Number', 'Date Paid', 'Fee', 'Type', 'Properties']">
            <template name="action"></template>
        </Table>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';
import Table from '@/components/Table.vue';
const tabs = ['Buy', 'Rent', 'Shortlet']
const activeTab = ref('Buy');
</script>