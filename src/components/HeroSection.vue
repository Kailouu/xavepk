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
      <div class="artist-avatar" @click="triggerAvatarUpload">
        <img :src="avatarUrl" alt="XAV" />
        <div class="avatar-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
          </svg>
        </div>
        <input ref="avatarInput" type="file" accept="image/*" @change="onAvatarChange" hidden />
      </div>

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
import defaultBg from '../assets/xav-hero-stage.jpg'
import defaultAvatar from '../assets/xav-mic-closeup.jpg'

const bgUrl = ref(defaultBg)
const avatarUrl = ref(defaultAvatar)
const avatarInput = ref<HTMLInputElement>()

const bgStyle = computed(() => ({ backgroundImage: `url(${bgUrl.value})` }))

function onBgChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) bgUrl.value = URL.createObjectURL(file)
}

function triggerAvatarUpload() { avatarInput.value?.click() }

function onAvatarChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) avatarUrl.value = URL.createObjectURL(file)
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
  justify-content: center;
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
    rgba(9,6,8,0.1) 0%,
    rgba(9,6,8,0.45) 50%,
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
  gap: 22px;
  text-align: center;
  padding: 0 24px;
}

.artist-avatar {
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
  /* gradient ring */
  padding: 2px;
  background: var(--gradient);
  box-shadow: 0 0 0 3px rgba(255,107,53,0.12), 0 0 32px rgba(255,60,172,0.2), 0 8px 32px rgba(0,0,0,0.4);
}
.artist-avatar:hover { transform: scale(1.04); box-shadow: 0 0 0 3px rgba(255,107,53,0.25), 0 0 40px rgba(255,60,172,0.35), 0 8px 32px rgba(0,0,0,0.4); }

.artist-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
  display: block;
}
.avatar-overlay {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: rgba(0,0,0,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.artist-avatar:hover .avatar-overlay { opacity: 1; }

.hero-text { display: flex; flex-direction: column; gap: 12px; }

.artist-name {
  font-size: clamp(3.5rem, 12vw, 8rem);
  font-weight: 300;
  letter-spacing: 0.18em;
  line-height: 1;
  /* gradient text */
  background: linear-gradient(135deg, #ff9f6b 0%, #ff6b35 40%, #ff3cac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(255,60,172,0.3));
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
}

.hero-nav {
  display: flex;
  gap: 32px;
  margin-top: 10px;
}
.hero-nav a {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  transition: color 0.2s ease;
  position: relative;
  padding-bottom: 4px;
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
