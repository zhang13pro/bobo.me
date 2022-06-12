<template>
  <figure v-for="url in urls">
    <img :src="url" :alt="alt" />
    <figcaption>{{ alt }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps({
  alt: {
    type: String,
    required: true,
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
figcaption {
  text-align: center;
}
</style>
