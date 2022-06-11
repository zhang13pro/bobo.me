<template>
  <iframe
    :src="url"
    scrolling="no"
    frameborder="no"
    :allowfullscreen="true"
    :width="width"
    :height="height"
    sandbox="allow-same-origin allow-scripts"
  />
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
    default: "100%",
  },
  height: {
    type: String,
    default: "500",
  },
});

const url = ref(
  `//player.bilibili.com/player.html?bvid=${props.id}&high_quality=1&danmaku=0`
);
</script>
