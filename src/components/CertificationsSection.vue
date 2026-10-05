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
          >
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
                  v-if="cert.icon.includes('-')"
                  :class="[cert.icon, { 'text-teal': !cert.icon.includes('devicon') }]"
                  style="font-size: 32px; line-height: 1"
                />
                <span v-else style="font-size: 26px; line-height: 1">{{ cert.icon }}</span>
              </div>
              <div class="mt-n1">
                <p class="text-body-1 font-weight-bold mb-1">{{ cert.name }}</p>
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
