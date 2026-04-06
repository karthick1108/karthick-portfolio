<template>
  <section id="education" class="py-16">
    <v-container style="max-width: 900px">
      <h2 class="text-h4 font-weight-bold mb-10">Education</h2>

      <v-row>
        <v-col v-for="edu in education" :key="edu.degree" cols="12" sm="6">
          <v-card variant="outlined" rounded="lg" height="100%">
            <v-card-text class="d-flex ga-4">
              <v-icon :icon="edu.icon" size="32" color="teal" class="mt-1" />
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
