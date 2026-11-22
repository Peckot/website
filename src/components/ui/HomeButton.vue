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
        ? 'text-white before:bg-primary dark:before:bg-primarydark'
        : 'text-primary before:border before:border-primary/20 before:bg-primary/10 ' +
          'dark:text-white dark:before:border-gray-700 dark:before:bg-gray-800',

      'before:transition before:duration-300 hover:before:scale-110',
      'active:duration-75 active:before:scale-95',
    ]"
  >
    <span class="relative text-base font-semibold">{{ text }}</span>
  </a>
</template>
