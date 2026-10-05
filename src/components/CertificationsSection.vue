<template>
  <section id="certifications" class="py-12">
    <v-container style="max-width: 900px">
      <h2 v-reveal class="text-h4 font-weight-bold mb-6">Certifications</h2>

      <v-row>
        <v-col v-for="cert in certifications" :key="cert.name" cols="12" sm="6">
          <v-card
            v-reveal
            variant="outlined"
            rounded="lg"
            height="100%"
            :href="cert.link"
            target="_blank"
            class="hover-card"
          >
            <v-card-text class="d-flex ga-4">
              <div class="icon-badge mt-1">
                <i
                  v-if="cert.icon.includes('-')"
                  :class="[cert.icon, { 'text-teal': !cert.icon.includes('devicon') }]"
                  style="font-size: 26px; line-height: 1"
                />
                <span v-else style="font-size: 22px; line-height: 1">{{ cert.icon }}</span>
              </div>
              <div class="mt-n1 flex-grow-1">
                <p class="text-body-1 font-weight-bold mb-1 d-flex align-center ga-2">
                  {{ cert.name }}
                  <i class="fa-solid fa-arrow-up-right-from-square cert-link-icon" />
                </p>
                <p class="text-body-2 text-teal mb-1">{{ cert.issuer }}</p>
                <p class="text-caption text-medium-emphasis">{{ cert.year }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { certifications } from '@/data/certifications'
</script>

<style scoped>
.cert-link-icon {
  font-size: 12px;
  color: rgb(var(--v-theme-teal));
  opacity: 0;
  transform: translate(-4px, 2px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.hover-card:hover .cert-link-icon {
  opacity: 1;
  transform: translate(0, 0);
}
</style>

