<template>
  <v-fade-transition>
    <v-btn
      v-show="visible"
      icon
      color="teal"
      class="back-to-top"
      aria-label="Back to top"
      @click="toTop"
    >
      <i class="fa-solid fa-arrow-up" />
    </v-btn>
  </v-fade-transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const onScroll = () => {
  visible.value = window.scrollY > 600
}
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 100;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.back-to-top:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 20px -6px rgba(var(--v-theme-teal), 0.6);
}
</style>
