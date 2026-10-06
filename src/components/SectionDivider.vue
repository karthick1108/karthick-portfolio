<template>
  <div class="section-divider" aria-hidden="true" />
</template>

<style scoped>
/* Subtle fade-in/fade-out line instead of a hard border, used between
   sections so the page feels like one continuous flow rather than stacked
   blocks. */
.section-divider {
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(var(--v-theme-teal), 0.35) 50%,
    transparent 100%
  );
}
</style>
