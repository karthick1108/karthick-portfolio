<template>
  <section id="home" class="hero d-flex align-center">
    <v-container style="max-width: 900px">
      <v-row align="center" class="flex-column-reverse flex-md-row">
        <v-col cols="12" md="8">
          <p v-reveal class="text-overline text-teal mb-2">Software Developer · Brisbane</p>

          <h1 v-reveal class="hero-title font-weight-bold mb-5">
            Hi, I'm Karthick<span class="text-teal">.</span>
          </h1>

          <p
            v-reveal
            class="text-h6 font-weight-regular text-medium-emphasis mb-8"
            style="max-width: 34rem; line-height: 1.6"
          >
            I'm a full stack developer who enjoys the whole journey, from designing clean interfaces
            to building solid APIs and wiring up the cloud behind them.
          </p>

          <div v-reveal class="d-flex flex-wrap ga-3">
            <v-btn color="teal" variant="flat" size="large" @click="scrollTo('experience')">
              View my work
            </v-btn>
            <v-btn variant="outlined" size="large" @click="openContact">Get in touch</v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="text-center mb-8 mb-md-0">
          <v-avatar v-reveal size="260" class="hero-avatar">
            <v-img
              src="https://res.cloudinary.com/dmswxxfu4/image/upload/v1598949476/images/karthick_igr2vq.png"
              alt="Karthick Rajasekaran"
            />
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const openContact = inject('openContact', () => {})

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 48px);
}

.hero-title {
  font-size: clamp(2.25rem, 6vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.hero-avatar {
  box-shadow:
    0 0 0 1px rgba(45, 212, 191, 0.35),
    0 24px 60px rgba(0, 0, 0, 0.45);
}
</style>
