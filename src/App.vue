<template>
  <div id="epk">
    <HeroSection />
    <div v-reveal><AboutSection /></div>
    <div v-reveal><MusicPlayer /></div>
    <PressQuote />
    <ShowsSection />
    <div v-reveal><GallerySection /></div>
    <div v-reveal><ContactSection /></div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import PressQuote from './components/PressQuote.vue'
import ShowsSection from './components/ShowsSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
import { vReveal } from './composables/useReveal'
</script>

<style scoped>
#epk {
  display: flex;
  flex-direction: column;
}
</style>
