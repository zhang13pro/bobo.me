<template>
  <div v-for="url in urls">
    <img :src="url" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  alt: {
    type: String,
    required: false,
  },
  urls: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
img {
  display: inline-block;
}
</style>
