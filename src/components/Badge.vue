<template>
    <span class="font-poppins badge border bg-primary-0-5 px-2 py-1 rounded-3xl border-primary-5 text-primary-5">
        <slot></slot>
    </span>
</template>
<script>
export default {
    props: {

    }
}
</script>
<style>
.badge {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;


}
</style>