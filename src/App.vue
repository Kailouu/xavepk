<template>
  <div id="epk">
    <HeroSection />
    <AboutSection />
    <MusicPlayer />
    <GallerySection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style scoped>
#epk {
  display: flex;
  flex-direction: column;
}
</style>
