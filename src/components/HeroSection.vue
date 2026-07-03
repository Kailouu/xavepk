<template>
  <section class="hero">
    <div class="hero-bg" :style="bgStyle">
      <label class="change-bg-btn" title="Change background">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        Change photo
        <input type="file" accept="image/*" @change="onBgChange" hidden />
      </label>
    </div>

    <div class="hero-content">
      <div class="hero-text">
        <h1 class="artist-name">XAV</h1>
        <p class="artist-genre">Singer · Songwriter · Creative</p>
      </div>

      <nav class="hero-nav">
        <a href="#about">About</a>
        <a href="#music">Music</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>

    <div class="scroll-hint"><span></span></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import defaultBg from '../assets/xav-arms-up.webp'

const bgUrl = ref(defaultBg)

const bgStyle = computed(() => ({ backgroundImage: `url(${bgUrl.value})` }))

function onBgChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) bgUrl.value = URL.createObjectURL(file)
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100svh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9,6,8,0.55) 0%,
    rgba(9,6,8,0.15) 30%,
    rgba(9,6,8,0.35) 65%,
    rgba(9,6,8,0.92) 100%
  );
}

.change-bg-btn {
  position: absolute;
  bottom: 14px;
  right: 14px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(0,0,0,0.45);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  font-size: 11px;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
  letter-spacing: 0.05em;
}
.change-bg-btn:hover { background: rgba(0,0,0,0.7); color: #fff; border-color: rgba(255,255,255,0.25); }

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
  padding: clamp(28px, 6vh, 56px) 24px 0;
}

.hero-text { display: flex; flex-direction: column; gap: 10px; }

.artist-name {
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 300;
  letter-spacing: 0.18em;
  line-height: 1;
  background: linear-gradient(135deg, #ff9f6b 0%, #ff6b35 40%, #ff3cac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(255,60,172,0.35)) drop-shadow(0 2px 12px rgba(0,0,0,0.6));
}

.artist-genre {
  font-size: clamp(0.7rem, 2vw, 0.85rem);
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: 400;
  filter: drop-shadow(0 1px 6px rgba(0,0,0,0.7));
}

.hero-nav {
  display: flex;
  gap: 32px;
  margin-top: 4px;
}
.hero-nav a {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
  transition: color 0.2s ease;
  position: relative;
  padding-bottom: 4px;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}
.hero-nav a::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 1px;
  background: var(--gradient);
  transition: width 0.3s ease;
}
.hero-nav a:hover { color: #fff; }
.hero-nav a:hover::after { width: 100%; }

.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.scroll-hint span {
  display: block;
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, rgba(255,107,53,0.8), rgba(255,60,172,0.3), transparent);
  margin: 0 auto;
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@media (max-width: 600px) {
  .hero-nav { gap: 20px; }
  .scroll-hint { display: none; }
}
</style>
