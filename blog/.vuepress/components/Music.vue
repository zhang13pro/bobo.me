<template>
  <iframe frameborder="no" :width="width" :height="height" :src="url" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "330",
  },
  height: {
    type: String,
    default: "86",
  },
});

const url = ref(
  `//music.163.com/outchain/player?type=2&id=${props.id}&auto=1&height=66`
);
</script>
