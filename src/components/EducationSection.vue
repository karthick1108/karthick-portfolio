<template>
  <section id="education" class="py-12">
    <v-container style="max-width: 900px">
      <h2 v-reveal class="text-h4 font-weight-bold mb-6">Education</h2>

      <v-row>
        <v-col v-for="edu in education" :key="edu.degree" cols="12" sm="6">
          <v-card v-reveal variant="outlined" rounded="lg" height="100%">
            <v-card-text class="d-flex ga-4">
              <div
                class="mt-1"
                style="
                  width: 32px;
                  height: 32px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                "
              >
                <i
                  v-if="edu.icon.includes('-')"
                  :class="edu.icon"
                  class="text-teal"
                  style="font-size: 32px; line-height: 1"
                />
                <span v-else style="font-size: 26px; line-height: 1">{{ edu.icon }}</span>
              </div>
              <div>
                <p class="text-body-1 font-weight-bold mb-1">{{ edu.degree }}</p>
                <p class="text-body-2 text-teal mb-1">{{ edu.school }} · {{ edu.location }}</p>
                <p class="text-caption text-medium-emphasis">{{ edu.years }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { education } from '@/data/education'
</script>
