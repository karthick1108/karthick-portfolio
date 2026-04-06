<template>
  <section id="skills" class="py-16">
    <v-container style="max-width: 900px">
      <h2 class="text-h4 font-weight-bold mb-10">Tech stack</h2>
      <v-row>
        <v-col v-for="group in skills" :key="group.category" cols="12" sm="6">
          <v-card variant="outlined" rounded="lg" height="100%">
            <v-card-title class="text-overline text-teal pt-4 px-4">
              {{ group.category }}
            </v-card-title>
            <v-card-text class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="item in group.items"
                :key="item.name"
                variant="elevated"
                color="white"
                size="default"
                rounded="lg"
              >
                <i :class="item.icon" style="font-size: 16px; margin-right: 6px" />
                {{ item.name }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { skills } from '@/data/skills'
</script>
