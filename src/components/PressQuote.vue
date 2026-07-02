<template>
  <section class="press-quote">
    <div class="container" v-reveal>
      <svg class="quote-mark" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
      <blockquote>
        Xav is a dream to work with, her energy is infectious.
      </blockquote>
      <cite>— PremPR</cite>
    </div>
  </section>
</template>

<script setup lang="ts">
import { vReveal } from '../composables/useReveal'
</script>

<style scoped>
.press-quote {
  padding: 90px 20px;
  background: var(--surface);
  background-image:
    radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,107,53,0.08) 0%, transparent 65%),
    radial-gradient(ellipse 45% 50% at 80% 20%, rgba(255,60,172,0.08) 0%, transparent 65%);
  text-align: center;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.quote-mark {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* fallback for the svg fill */
  color: #ff6b35;
  opacity: 0.9;
}

blockquote {
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 300;
  line-height: 1.4;
  color: #fff;
  letter-spacing: -0.01em;
}

cite {
  font-style: normal;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
