<template>
  <div class="scroll-progress" :style="{ width: scrollProgress + '%' }" />
  <v-app-bar flat density="compact" border="b">
    <v-app-bar-title style="cursor: pointer" @click="scrollTo('home')">
      <span class="font-weight-bold">KR<span class="text-teal">.</span></span>
    </v-app-bar-title>

    <template v-slot:append>
      <!-- Desktop links -->
      <div class="d-none d-md-flex ga-4 pr-4">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="[
            'nav-link',
            active === link.id
              ? theme === 'dark'
                ? 'text-white nav-link--active'
                : 'text-black nav-link--active'
              : 'text-medium-emphasis',
          ]"
          class="text-caption text-uppercase text-decoration-none"
          style="letter-spacing: 0.1em; transition: color 0.2s"
          @click.prevent="() => scrollTo(link.id)"
        >
          {{ link.label }}
        </a>
        <v-divider vertical class="mx-1" />

        <a
          href="https://github.com/karthick1108"
          target="_blank"
          class="text-medium-emphasis text-decoration-none nav-icon"
        >
          <i class="fa-brands fa-github" style="font-size: 18px" />
        </a>
        <a
          href="https://www.linkedin.com/in/karthick-rajasekaran/"
          target="_blank"
          class="text-medium-emphasis text-decoration-none nav-icon"
        >
          <i class="fa-brands fa-linkedin" style="font-size: 18px" />
        </a>
        <v-tooltip text="Download Resume" location="bottom">
          <template v-slot:activator="{ props }">
            <a
              v-bind="props"
              href="/resume.pdf"
              target="_blank"
              class="text-medium-emphasis text-decoration-none nav-icon"
            >
              <i class="fa-solid fa-download" style="font-size: 18px" />
            </a>
          </template>
        </v-tooltip>
        <a
          class="text-medium-emphasis text-decoration-none nav-icon"
          style="cursor: pointer"
          @click="emit('toggleTheme')"
        >
          <i
            :class="theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
            style="font-size: 18px"
          />
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
      <v-divider class="my-2" />

      <v-list-item title="GitHub" href="https://github.com/karthick1108" target="_blank">
        <template v-slot:prepend>
          <i class="fa-brands fa-github mr-3" style="font-size: 18px" />
        </template>
      </v-list-item>
      <v-list-item
        title="LinkedIn"
        href="https://www.linkedin.com/in/karthick-rajasekaran/"
        target="_blank"
      >
        <template v-slot:prepend>
          <i class="fa-brands fa-linkedin mr-3" style="font-size: 18px" />
        </template>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item title="Resume" href="/resume.pdf" target="_blank">
        <template v-slot:prepend>
          <i class="fa-solid fa-download mr-3" style="font-size: 18px" />
        </template>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item
        :title="theme === 'dark' ? 'Light' : 'Dark'"
        @click="
          () => {
            emit('toggleTheme')
            drawer = false
          }
        "
      >
        <template v-slot:prepend>
          <i
            :class="theme === 'dark' ? 'fa-solid fa-sun mr-3' : 'fa-solid fa-moon mr-3'"
            style="font-size: 18px"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const active = ref('home')
const { theme } = defineProps<{ theme: string }>()
const emit = defineEmits<{ toggleTheme: [] }>()

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'interests', label: 'Interests' },
]

const scrollProgress = ref(0)

let scrollLock = false

const scrollTo = (id: string) => {
  active.value = id
  // Pin the clicked link active until the user deliberately scrolls again —
  // this avoids the scroll-spy flickering through intermediate sections (or
  // misreading short trailing sections) while the smooth scroll animates.
  scrollLock = true
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const unlockScrollSpy = () => {
  scrollLock = false
}

const onScroll = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0

  if (scrollLock) return
  // When the page can't scroll any further, pin the last section as active —
  // it may be too short for its top to ever reach the 100px threshold below.
  if (window.scrollY >= maxScroll - 2) {
    active.value = links.at(-1)!.id
    return
  }
  for (const link of [...links].reverse()) {
    const el = document.getElementById(link.id)
    if (el && el.getBoundingClientRect().top <= 100) {
      active.value = link.id
      return
    }
  }
  active.value = 'home'
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll)
  window.addEventListener('wheel', unlockScrollSpy, { passive: true })
  window.addEventListener('touchmove', unlockScrollSpy, { passive: true })
  window.addEventListener('keydown', unlockScrollSpy)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('wheel', unlockScrollSpy)
  window.removeEventListener('touchmove', unlockScrollSpy)
  window.removeEventListener('keydown', unlockScrollSpy)
})
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 2px;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: rgb(var(--v-theme-teal));
  transition:
    width 0.25s ease,
    opacity 0.25s ease;
}
.nav-link:hover::after {
  width: 100%;
  opacity: 0.4;
}
.nav-link--active::after {
  width: 100%;
  opacity: 1;
}
.nav-icon {
  display: inline-flex;
  transition:
    transform 0.2s ease,
    color 0.2s ease;
}
.nav-icon:hover {
  transform: translateY(-2px);
  color: rgb(var(--v-theme-teal));
}
</style>
