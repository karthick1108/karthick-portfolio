<template>
  <v-dialog v-model="dialog" max-width="500" persistent>
    <v-card rounded="lg">
      <v-card-title class="pt-5 px-6">Get in touch</v-card-title>
      <v-card-subtitle class="px-6 pb-2">I'll get back to you as soon as possible.</v-card-subtitle>

      <v-card-text class="px-6">
        <v-form ref="formRef">
          <v-text-field
            v-model="form.name"
            label="Name *"
            variant="outlined"
            density="compact"
            class="mb-3"
            :rules="[(v) => !!v || 'Please enter your name']"
          />
          <v-text-field
            v-model="form.email"
            label="Email *"
            variant="outlined"
            density="compact"
            class="mb-3"
            :rules="[
              (v) => !!v || 'Please enter your email',
              (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
            ]"
          />
          <v-textarea
            v-model="form.message"
            label="Message *"
            variant="outlined"
            density="compact"
            rows="4"
            :rules="[(v) => !!v || 'Please enter your message']"
          />
        </v-form>
      </v-card-text>

      <v-alert
        v-if="error"
        type="error"
        variant="tonal"
        density="compact"
        class="mx-6 mb-2"
        text="Something went wrong. Please try again."
      />

      <v-card-actions class="px-6 pb-5">
        <v-spacer />
        <v-btn variant="text" @click="cancel">Cancel</v-btn>
        <v-btn color="teal" variant="flat" :loading="sending" @click="submit">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="thankYou" max-width="400">
    <v-card rounded="lg">
      <v-card-text class="text-center pa-8">
        <v-icon icon="fa-solid fa-circle-check" color="teal" size="48" class="mb-4" />
        <p class="text-h6 font-weight-bold mb-2">Thank you!</p>
        <p class="text-body-2 text-medium-emphasis">
          Your message has been sent. I'll get back to you soon.
        </p>
      </v-card-text>
      <v-card-actions class="pb-5">
        <v-spacer />
        <v-btn color="teal" variant="flat" @click="thankYou = false">Okay</v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = defineModel<boolean>({ required: true })

const formRef = ref()
const thankYou = ref(false)
const sending = ref(false)
const error = ref(false)

const form = ref({ name: '', email: '', message: '' })

const cancel = () => {
  dialog.value = false
  form.value = { name: '', email: '', message: '' }
  formRef.value?.resetValidation()
}

const submit = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  sending.value = true
  error.value = false
  try {
    const res = await fetch('https://formspree.io/f/xnjooljy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (res.ok) {
      dialog.value = false
      thankYou.value = true
      form.value = { name: '', email: '', message: '' }
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>
