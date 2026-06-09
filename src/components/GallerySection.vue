<template>
  <section id="gallery" class="gallery section">
    <div class="container">
      <span class="section-label">Gallery</span>
      <h2 class="section-title">Photos</h2>

      <div class="gallery-grid">
        <div
          v-for="(img, i) in images"
          :key="img.alt"
          class="gallery-item"
          :class="`span-${img.span}`"
          @click="openLightbox(i)"
        >
          <img :src="img.url" :alt="img.alt" loading="lazy" />
          <div class="item-glow"></div>
        </div>
      </div>
    </div>

    <Transition name="lb">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="lb-close" @click="closeLightbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button class="lb-arrow lb-prev" @click="lbPrev">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <Transition name="img-fade" mode="out-in">
          <img :key="lightboxIndex" :src="images[lightboxIndex].url" class="lb-img" />
        </Transition>
        <button class="lb-arrow lb-next" @click="lbNext">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
        <p class="lb-counter">{{ (lightboxIndex ?? 0) + 1 }} / {{ images.length }}</p>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import img1 from '../assets/xav-hero-stage.jpg'
import img2 from '../assets/xav-mic-closeup.jpg'
import img3 from '../assets/xav-flower-cardigan.jpg'
import img4 from '../assets/xav-purple-stage.jpg'

interface GalleryImage { url: string; alt: string; span: 1 | 2 }

const images: GalleryImage[] = [
  { url: img1, alt: 'XAV live on stage at Primal Live', span: 2 },
  { url: img2, alt: 'XAV performing close-up with mic', span: 1 },
  { url: img3, alt: 'XAV performing in flower cardigan', span: 1 },
  { url: img4, alt: 'XAV on stage in purple light', span: 2 },
]

const lightboxIndex = ref<number | null>(null)

function openLightbox(i: number) { lightboxIndex.value = i }
function closeLightbox() { lightboxIndex.value = null }
function lbPrev() { if (lightboxIndex.value !== null) lightboxIndex.value = (lightboxIndex.value - 1 + images.length) % images.length }
function lbNext() { if (lightboxIndex.value !== null) lightboxIndex.value = (lightboxIndex.value + 1) % images.length }

function onKey(e: KeyboardEvent) {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lbPrev()
  if (e.key === 'ArrowRight') lbNext()
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.gallery {
  padding: 100px 20px;
  background: var(--surface);
  background-image:
    radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255,60,172,0.10) 0%, transparent 65%),
    radial-gradient(ellipse 50% 40% at 5% 60%, rgba(255,107,53,0.09) 0%, transparent 65%),
    radial-gradient(ellipse 45% 35% at 95% 80%, rgba(255,60,172,0.08) 0%, transparent 65%);
}
.container { max-width: 960px; margin: 0 auto; }

.section-label {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 36px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 240px;
  gap: 10px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  background: var(--surface2);
  /* gradient border on hover via box-shadow */
  transition: box-shadow 0.3s ease;
}
.gallery-item.span-2 { grid-column: span 2; }
.gallery-item:hover {
  box-shadow: 0 0 0 1.5px rgba(255,107,53,0.5), 0 8px 30px rgba(255,60,172,0.15);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: transform 0.5s var(--ease);
  display: block;
}
.gallery-item:hover img { transform: scale(1.05); }

/* Pink-to-orange glow on hover */
.item-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,60,172,0.12));
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.gallery-item:hover .item-glow { opacity: 1; }

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(9,6,8,0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}
.lb-img {
  max-width: 88vw;
  max-height: 86vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 0 60px rgba(255,60,172,0.15), 0 32px 80px rgba(0,0,0,0.7);
}
.lb-close {
  position: absolute;
  top: 18px; right: 18px;
  color: rgba(255,255,255,0.5);
  transition: color 0.15s;
  padding: 8px;
}
.lb-close:hover { color: #ff3cac; }
.lb-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255,255,255,0.45);
  padding: 12px;
  transition: color 0.15s;
}
.lb-prev { left: 12px; }
.lb-next { right: 12px; }
.lb-arrow:hover { color: #ff6b35; }
.lb-counter {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.1em;
}

.lb-enter-active, .lb-leave-active { transition: opacity 0.25s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }
.img-fade-enter-active, .img-fade-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.img-fade-enter-from { opacity: 0; transform: scale(0.97); }
.img-fade-leave-to { opacity: 0; transform: scale(1.03); }

@media (max-width: 768px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
  .gallery-item.span-2 { grid-column: span 2; }
}
@media (max-width: 480px) {
  .gallery-grid { grid-auto-rows: 140px; }
}
</style>
