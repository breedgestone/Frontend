<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">{{ column }}</th>
                    <th v-if="$slots.action"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                    <td v-for="column in columns" :key="column.key">{{ row[column.key] }}</td>
                    <td v-if="$slots.action">
                        <slot name="action" :row="row" :rowIndex="rowIndex"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Table',
    props: {
        data: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
    },
});
</script>

<style scoped>
.table-container {
    width: 100%;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 12px;
    text-align: left;
    /* border: 1px solid var(--color-neutral-1); */
}

th {
    background-color: #F4F6F9;
    color: var(--color-neutral-10);
    font-family: "Campton";
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0%;

}

th:first-child {
    border-top-left-radius: 10px;
}

th:last-child {
    border-top-right-radius: 10px;
}

tbody tr:nth-child(even) {
    background-color: var(--color-neutral-0-5);
}
</style>