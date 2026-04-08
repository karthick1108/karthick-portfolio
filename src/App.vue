<template>
  <v-app :theme="theme">
    <AppNav :theme="theme" @toggle-theme="toggleTheme" />
    <v-main>
      <AboutSection />
      <v-divider />
      <SkillsSection />
      <v-divider />
      <ExperienceSection />
      <v-divider />
      <EducationSection />
      <v-divider />
      <InterestsSection />
    </v-main>

    <v-footer border="t" class="d-flex justify-center py-4">
      <span class="text-caption text-medium-emphasis">
        Designed & built by Karthick Rajasekaran © {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import InterestsSection from '@/components/InterestsSection.vue'

import { ref } from 'vue'

const theme = ref('dark')
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>
