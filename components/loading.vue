<template>
  <div class="loading-overlay" v-if="show">
    <img src="@/assets/image/load/loading.webp" alt="Loading..." />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const show = ref(true)

watch(() => useRoute(), () => {
  // 页面切换时显示loading
  show.value = true
})
onMounted(() => {
  show.value = false;
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1031;
}
</style>
