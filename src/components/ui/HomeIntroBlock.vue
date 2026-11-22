<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="flex-1 text-center indent-1">
    <h6 class="text-lg font-semibold text-gray-700 dark:text-white">{{ title }}</h6>
    <p class="mt-2 text-gray-500">
      <template v-for="(content, index) in contents" :key="index">
        {{ content }}
        <template v-if="index < contents.length - 1"><br />&nbsp;</template>
      </template>
    </p>
  </div>
</template>
