<template>
  <section id="interests" class="py-16">
    <v-container style="max-width: 900px">
      <h2 class="text-h4 font-weight-bold mb-10">Personal interests</h2>

      <v-row>
        <v-col v-for="interest in interests" :key="interest.label" cols="6" sm="3">
          <v-card variant="outlined" rounded="lg" class="text-center pa-4">
            <div style="font-size: 32px" class="mb-2">{{ interest.emoji }}</div>
            <p class="text-body-2 text-medium-emphasis mb-0">{{ interest.label }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const interests = [
  { emoji: '🏏', label: 'Cricket' },
  { emoji: '📺', label: 'Crime & Thriller' },
  { emoji: '🎮', label: 'Call of Duty' },
  { emoji: '☕', label: 'Almond mocha' },
  { emoji: '🍰', label: 'Pastries' },
  { emoji: '🍽️', label: 'Cafe Hopping' },
  { emoji: '🐈', label: 'Cats' },
  { emoji: '🎵', label: 'EDM/Rock/Pop' },
]
</script>
