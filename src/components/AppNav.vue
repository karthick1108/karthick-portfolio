<template>
  <v-app-bar flat density="compact" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08)">
    <v-app-bar-title style="cursor: pointer" @click="scrollTo('about')">
      <span class="font-weight-bold">KR<span class="text-teal">.</span></span>
    </v-app-bar-title>

    <template v-slot:append>
      <!-- Desktop links -->
      <div class="d-none d-md-flex ga-4 pr-4">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="active === link.id ? 'text-white' : 'text-medium-emphasis'"
          class="text-caption text-uppercase text-decoration-none"
          style="letter-spacing: 0.1em; transition: color 0.2s"
          @click.prevent="() => scrollTo(link.id)"
        >
          {{ link.label }}
        </a>
        <a
          class="text-caption text-uppercase text-decoration-none text-medium-emphasis"
          style="letter-spacing: 0.1em; transition: color 0.2s; cursor: pointer"
          @click="contactOpen = true"
        >
          Contact
        </a>
      </div>

      <!-- Mobile hamburger -->
      <v-btn icon class="d-md-none mr-2" @click="drawer = !drawer">
        <i :class="drawer ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.id"
        :title="link.label"
        @click="
          () => {
            scrollTo(link.id)
            drawer = false
          }
        "
      />
      <v-list-item
        title="Contact"
        @click="
          () => {
            contactOpen = true
            drawer = false
          }
        "
      />
    </v-list>
  </v-navigation-drawer>

  <ContactSection v-model="contactOpen" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ContactSection from '@/components/ContactSection.vue'

const contactOpen = ref(false)
const drawer = ref(false)
const active = ref('about')

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
]

const scrollTo = (id: string) => {
  active.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const onScroll = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
  if (isAtBottom) {
    active.value = 'education'
    return
  }
  for (const link of [...links].reverse()) {
    const el = document.getElementById(link.id)
    if (el && el.getBoundingClientRect().top <= 100) {
      active.value = link.id
      return
    }
  }
  active.value = 'about'
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
