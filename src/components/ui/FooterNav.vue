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
})
</script>

<template>
  <li>
    <a :href="link" class="flex items-center space-x-3 transition hover:text-primary hover:dark:text-primarydark">
      <slot />
      <span>{{ text }}</span>
    </a>
  </li>
</template>
