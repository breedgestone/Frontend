<template>
    <component :is="tag" :class="buttonClasses" :disabled="disabled" :type="type" v-bind="$attrs" @click="handleClick">
        <!-- Left Icon -->
        <span v-if="$slots.leftIcon || leftIcon" class="button-icon-left">
            <slot name="leftIcon">
                <component :is="leftIcon" v-if="leftIcon" />
            </slot>
        </span>

        <!-- Button Text -->
        <span v-if="$slots.default || text" class="button-text">
            <slot>{{ text }}</slot>
        </span>

        <!-- Right Icon -->
        <span v-if="$slots.rightIcon || rightIcon" class="button-icon-right">
            <slot name="rightIcon">
                <component :is="rightIcon" v-if="rightIcon" />
            </slot>
        </span>

        <!-- Icon Only (when no text/slots) -->
        <span v-if="!$slots.default && !text && (iconOnly || $slots.icon)" class="button-icon-only">
            <slot name="icon">
                <component :is="iconOnly" v-if="iconOnly" />
            </slot>
        </span>
    </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    // Variants
    variant: {
        type: String,
        default: 'solid',
        validator: (value) => ['solid', 'outline', 'ghost'].includes(value)
    },

    // Colors
    color: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'accent1', 'accent2', 'neutral'].includes(value)
    },

    // Sizes
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },

    // States
    disabled: {
        type: Boolean,
        default: false
    },

    // Content
    text: {
        type: String,
        default: ''
    },

    // Icons
    leftIcon: {
        type: [String, Object],
        default: null
    },

    rightIcon: {
        type: [String, Object],
        default: null
    },

    iconOnly: {
        type: [String, Object],
        default: null
    },

    // HTML attributes
    type: {
        type: String,
        default: 'button'
    },

    tag: {
        type: String,
        default: 'button'
    }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
    if (!props.disabled) {
        emit('click', event)
    }
}

const buttonClasses = computed(() => {
    const classes = ['btn']

    // Base classes
    classes.push('btn-base')

    // Variant classes
    classes.push(`btn-${props.variant}`)

    // Color classes
    classes.push(`btn-${props.color}`)

    // Size classes
    classes.push(`btn-${props.size}`)

    // State classes
    if (props.disabled) {
        classes.push('btn-disabled')
    }

    // Icon only class
    if (!props.text && !props.$slots?.default && (props.iconOnly || props.$slots?.icon)) {
        classes.push('btn-icon-only')
    }

    return classes.join(' ')
})
</script>

<style scoped>
/* Base Button Styles */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    white-space: nowrap;
}

.btn:focus {
    outline: 2px solid var(--color-primary-3);
    outline-offset: 2px;
}

/* Size Variations */
.btn-xs {
    padding: 4px 8px;
    font-size: 12px;
    line-height: 16px;
    gap: 4px;
}

.btn-xs.btn-icon-only {
    padding: 4px;
    width: 24px;
    height: 24px;
}

.btn-sm {
    padding: 6px 12px;
    font-size: 14px;
    line-height: 20px;
    gap: 6px;
}

.btn-sm.btn-icon-only {
    padding: 6px;
    width: 32px;
    height: 32px;
}

.btn-md {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 20px;
    gap: 8px;
}

.btn-md.btn-icon-only {
    padding: 8px;
    width: 36px;
    height: 36px;
}

.btn-lg {
    padding: 10px 20px;
    font-size: 16px;
    line-height: 24px;
    gap: 8px;
}

.btn-lg.btn-icon-only {
    padding: 10px;
    width: 44px;
    height: 44px;
}

.btn-xl {
    padding: 12px 24px;
    font-size: 18px;
    line-height: 28px;
    gap: 10px;
}

.btn-xl.btn-icon-only {
    padding: 12px;
    width: 52px;
    height: 52px;
}

/* Primary Color Variants */
.btn-solid.btn-primary {
    background-color: var(--color-primary-5);
    color: white;
}

.btn-solid.btn-primary:hover:not(.btn-disabled) {
    background-color: var(--color-primary-6);
}

.btn-solid.btn-primary:active:not(.btn-disabled) {
    background-color: var(--color-primary-7);
}

.btn-outline.btn-primary {
    background-color: transparent;
    border: 1px solid var(--color-primary-5);
    color: var(--color-primary-5);
}

.btn-outline.btn-primary:hover:not(.btn-disabled) {
    background-color: var(--color-primary-5);
    color: white;
}

.btn-ghost.btn-primary {
    background-color: transparent;
    color: var(--color-primary-5);
}

.btn-ghost.btn-primary:hover:not(.btn-disabled) {
    background-color: var(--color-primary-0-5);
}

/* Secondary Color Variants */
.btn-solid.btn-secondary {
    background-color: var(--color-secondary-5);
    color: var(--color-neutral-8);
}

.btn-solid.btn-secondary:hover:not(.btn-disabled) {
    background-color: var(--color-secondary-6);
}

.btn-outline.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-secondary-5);
    color: var(--color-secondary-6);
}

.btn-outline.btn-secondary:hover:not(.btn-disabled) {
    background-color: var(--color-secondary-5);
    color: var(--color-neutral-8);
}

.btn-ghost.btn-secondary {
    background-color: transparent;
    color: var(--color-secondary-6);
}

.btn-ghost.btn-secondary:hover:not(.btn-disabled) {
    background-color: var(--color-secondary-0-5);
}

/* Accent1 Color Variants */
.btn-solid.btn-accent1 {
    background-color: var(--color-accent1-5);
    color: white;
}

.btn-solid.btn-accent1:hover:not(.btn-disabled) {
    background-color: var(--color-accent1-6);
}

.btn-outline.btn-accent1 {
    background-color: transparent;
    border: 1px solid var(--color-accent1-5);
    color: var(--color-accent1-5);
}

.btn-outline.btn-accent1:hover:not(.btn-disabled) {
    background-color: var(--color-accent1-5);
    color: white;
}

.btn-ghost.btn-accent1 {
    background-color: transparent;
    color: var(--color-accent1-5);
}

.btn-ghost.btn-accent1:hover:not(.btn-disabled) {
    background-color: var(--color-accent1-0-5);
}

/* Accent2 Color Variants */
.btn-solid.btn-accent2 {
    background-color: var(--color-accent2-5);
    color: var(--color-neutral-8);
}

.btn-solid.btn-accent2:hover:not(.btn-disabled) {
    background-color: var(--color-accent2-6);
}

.btn-outline.btn-accent2 {
    background-color: transparent;
    border: 1px solid var(--color-accent2-5);
    color: var(--color-accent2-6);
}

.btn-outline.btn-accent2:hover:not(.btn-disabled) {
    background-color: var(--color-accent2-5);
    color: var(--color-neutral-8);
}

.btn-ghost.btn-accent2 {
    background-color: transparent;
    color: var(--color-accent2-6);
}

.btn-ghost.btn-accent2:hover:not(.btn-disabled) {
    background-color: var(--color-accent2-0-5);
}

/* Neutral Color Variants */
.btn-solid.btn-neutral {
    background-color: var(--color-neutral-5);
    color: white;
}

.btn-solid.btn-neutral:hover:not(.btn-disabled) {
    background-color: var(--color-neutral-6);
}

.btn-outline.btn-neutral {
    background-color: transparent;
    border: 1px solid var(--color-neutral-5);
    color: var(--color-neutral-5);
}

.btn-outline.btn-neutral:hover:not(.btn-disabled) {
    background-color: var(--color-neutral-5);
    color: white;
}

.btn-ghost.btn-neutral {
    background-color: transparent;
    color: var(--color-neutral-5);
}

.btn-ghost.btn-neutral:hover:not(.btn-disabled) {
    background-color: var(--color-neutral-0-5);
}

/* Disabled State */
.btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}

/* Icon Styling */
.button-icon-left,
.button-icon-right,
.button-icon-only {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.button-icon-left svg,
.button-icon-right svg,
.button-icon-only svg {
    width: 1em;
    height: 1em;
}

.btn-xs .button-icon-left svg,
.btn-xs .button-icon-right svg,
.btn-xs .button-icon-only svg {
    width: 12px;
    height: 12px;
}

.btn-sm .button-icon-left svg,
.btn-sm .button-icon-right svg,
.btn-sm .button-icon-only svg {
    width: 14px;
    height: 14px;
}

.btn-md .button-icon-left svg,
.btn-md .button-icon-right svg,
.btn-md .button-icon-only svg {
    width: 16px;
    height: 16px;
}

.btn-lg .button-icon-left svg,
.btn-lg .button-icon-right svg,
.btn-lg .button-icon-only svg {
    width: 18px;
    height: 18px;
}

.btn-xl .button-icon-left svg,
.btn-xl .button-icon-right svg,
.btn-xl .button-icon-only svg {
    width: 20px;
    height: 20px;
}
</style>