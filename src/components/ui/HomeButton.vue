<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <a
    :href="link"
    :class="[
      'relative flex h-12 w-2/3 items-center justify-center px-6 sm:w-max',
      'before:absolute before:inset-0 before:rounded-full',

      primary
        ? 'before:bg-primary before:dark:bg-primarydark'
        : 'before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b ' +
          'dark:before:border-gray-700 before:dark:bg-primarydark/10 dark:before:bg-gray-800',

      'before:transition before:duration-300 hover:before:scale-110',
      'active:duration-75 active:before:scale-95',
    ]"
  >
    <span class="relative text-base font-semibold text-white">{{ text }}</span>
  </a>
</template>
