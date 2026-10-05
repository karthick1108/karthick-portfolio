<template>
  <section id="skills" class="py-12">
    <v-container style="max-width: 900px">
      <h2 v-reveal class="text-h4 font-weight-bold mb-6">Tech stack</h2>
      <v-row>
        <v-col v-for="group in skills" :key="group.category" cols="12" sm="6">
          <v-card v-reveal variant="outlined" rounded="lg" height="100%" class="hover-card">
            <v-card-title class="text-overline text-teal pt-4 px-4">
              {{ group.category }}
            </v-card-title>
            <v-card-text class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="item in group.items"
                :key="item.name"
                variant="outlined"
                size="default"
                rounded="lg"
                class="skill-chip"
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

<style scoped>
.skill-chip {
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}
.skill-chip:hover {
  transform: translateY(-2px) scale(1.04);
  border-color: rgb(var(--v-theme-teal));
  background-color: rgba(var(--v-theme-teal), 0.12);
}
</style>
