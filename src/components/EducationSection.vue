<template>
  <section id="education" class="py-12">
    <v-container style="max-width: 900px">
      <h2 v-reveal class="text-h4 font-weight-bold mb-6">Education</h2>

      <v-row>
        <v-col v-for="edu in education" :key="edu.degree" cols="12" sm="6">
          <v-card v-reveal variant="outlined" rounded="lg" height="100%" class="hover-card">
            <v-card-text class="d-flex ga-4">
              <div class="icon-badge mt-1">
                <i
                  v-if="edu.icon.includes('-')"
                  :class="edu.icon"
                  class="text-teal"
                  style="font-size: 26px; line-height: 1"
                />
                <span v-else style="font-size: 22px; line-height: 1">{{ edu.icon }}</span>
              </div>
              <div>
                <p class="text-body-1 font-weight-bold mb-1 degree-title d-flex align-center ga-1">
                  <span>{{ edu.degree }}</span>
                  <a
                    v-if="edu.verifiedBy"
                    :href="edu.verifiedLink"
                    target="_blank"
                    rel="noopener"
                    class="verified-tick"
                    :aria-label="`Verified by ${edu.verifiedBy}`"
                  >
                    <v-tooltip activator="parent" location="top">
                      Verified by {{ edu.verifiedBy }}
                    </v-tooltip>
                    <i class="fa-solid fa-circle-check text-teal" style="font-size: 15px" />
                  </a>
                </p>
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

<style scoped>
.degree-title {
  font-size: 0.85rem;
}

.degree-title span {
  overflow-wrap: break-word;
}

@media (min-width: 600px) {
  .degree-title span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    max-width: 100%;
  }
}

.verified-tick {
  flex-shrink: 0;
  display: inline-flex;
  cursor: pointer;
}

</style>
