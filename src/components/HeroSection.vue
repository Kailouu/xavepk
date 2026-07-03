<template>
  <section class="hero">
    <div class="hero-bg"></div>

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
import bg from '../assets/xav-street-portrait.webp'
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
  background-image: v-bind('`url(${bg})`');
  background-size: cover;
  /* vertical % crops the top of the portrait so the head sits under the title —
     raise the value to push the image further up, lower it to bring the top back */
  background-position: center 17%;
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
