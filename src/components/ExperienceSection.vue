<template>
  <section id="experience" class="py-16">
    <v-container style="max-width: 900px">
      <h2 class="text-h4 font-weight-bold mb-10">Work history</h2>

      <v-timeline align="start">
        <v-timeline-item
          v-for="job in experience"
          :key="job.company"
          :dot-color="job.color"
          size="small"
        >
          <template v-slot:opposite>
            <div class="font-weight-bold" :style="`color: ${job.color}`">
              {{ job.period }}
            </div>
            <div class="text-caption text-medium-emphasis mt-1">
              {{ job.location }}
            </div>
          </template>

          <div class="pb-6">
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
</script>
