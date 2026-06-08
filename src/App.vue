<template>
  <v-app :theme="theme">
    <AppNav :theme="theme" @toggle-theme="toggleTheme" />
    <v-main>
      <HeroSection />
      <v-divider />
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

    <ContactSection v-model="contactOpen" />
  </v-app>
</template>

<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import InterestsSection from '@/components/InterestsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

import { ref, provide, watch } from 'vue'

const theme = ref(localStorage.getItem('theme') ?? 'dark')
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
watch(theme, (value) => localStorage.setItem('theme', value))

const contactOpen = ref(false)
provide('openContact', () => {
  contactOpen.value = true
})
</script>
