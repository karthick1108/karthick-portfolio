<template>
  <v-app>
    <AppNav />
    <v-main>
      <AboutSection />
      <v-divider />
      <SkillsSection />
      <v-divider />
      <ExperienceSection />
      <v-divider />
      <EducationSection />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
</script>
