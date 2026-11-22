<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
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
  <a :href="link" class="p-4 grayscale transition duration-200 hover:scale-105 hover:grayscale-0">
    <img :src="image" class="center mx-auto h-12 w-auto" loading="lazy" :alt="name" />
  </a>
</template>
