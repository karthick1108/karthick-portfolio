<template>
  <section id="experience" class="py-12">
    <v-container style="max-width: 900px">
      <h2 v-reveal class="text-h4 font-weight-bold mb-6">Work history</h2>

      <v-timeline v-reveal align="start" :side="mobile ? 'end' : undefined">
        <v-timeline-item
          v-for="job in experience"
          :key="job.company"
          :dot-color="job.color"
          size="small"
        >
          <template v-if="!mobile" v-slot:opposite>
            <div class="font-weight-bold" :style="`color: ${job.color}`">
              {{ job.period }}
            </div>
            <div class="text-caption text-medium-emphasis mt-1">
              {{ job.location }}
            </div>
          </template>

          <div class="pb-6 experience-item pa-3 rounded-lg">
            <div v-if="mobile" class="mb-2">
              <div class="font-weight-bold" :style="`color: ${job.color}`">
                {{ job.period }}
              </div>
              <div class="text-caption text-medium-emphasis">
                {{ job.location }}
              </div>
            </div>
            <div class="d-flex align-center ga-2 mb-1">
              <span class="text-h6 font-weight-bold">{{ job.role }}</span>
            </div>
            <div class="text-body-2 mb-2" :style="`color: ${job.color}`">{{ job.company }}</div>
            <p class="text-body-2 text-medium-emphasis mb-3">
              {{ job.description }}
            </p>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="tech in job.technologies"
                :key="tech"
                size="small"
                variant="outlined"
                :color="job.color"
                class="skill-chip"
              >
                {{ tech }}
              </v-chip>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { experience } from '@/data/experience'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<style scoped>
.experience-item {
  margin-left: -12px;
  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}
.experience-item:hover {
  background-color: rgba(var(--v-theme-teal), 0.06);
  transform: translateX(4px);
}
.skill-chip {
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}
.skill-chip:hover {
  transform: translateY(-2px) scale(1.04);
}
</style>
