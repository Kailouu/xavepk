<template>
  <section id="about" class="about section">
    <div class="container">
      <span class="section-label">About</span>
      <h2 class="section-title">XAV</h2>
      <div class="about-grid">
        <div class="about-bio">
          <p class="bio-text">
            I'm a Liverpool-based singer-songwriter and independent artist originally from Hong Kong.
            My music sits in uplifting pop, blended with elements of funk and rap, and at the heart
            of everything I create is storytelling.
          </p>
          <p class="bio-text" style="margin-top: 18px;">
            Each song reflects different chapters of life — from navigating rejection and building
            self-love, to believing in your journey and chasing your dreams.
            Real stories. Real feelings. Real music.
          </p>
          <div class="press-tags">
            <span class="tag">Wirral Wave Radio 2026</span>
            <span class="tag">La Vida Liverpool 2025</span>
            <span class="tag">Liverpool Echo 2025</span>
            <span class="tag">Première Magazine</span>
            <span class="tag">Primal Live</span>
          </div>
        </div>
        <div class="about-stats">
          <div class="stat" v-for="stat in stats" :key="stat.label">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '25.8K', label: 'Monthly Views' },
  { value: '1K+',   label: 'Followers' },
  { value: 'LVP',   label: 'Liverpool, UK' },
  { value: '5+',    label: 'Press Features' },
]
</script>

<style scoped>
.about {
  padding: 100px 20px;
  background: var(--surface);
  /* subtle gradient wash behind the section */
  background-image:
    radial-gradient(ellipse 65% 45% at 100% 0%, rgba(255,60,172,0.11) 0%, transparent 65%),
    radial-gradient(ellipse 55% 45% at 0% 100%, rgba(255,107,53,0.11) 0%, transparent 65%),
    radial-gradient(ellipse 40% 30% at 50% 50%, rgba(255,60,172,0.04) 0%, transparent 70%);
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
  margin-bottom: 48px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 60px;
  align-items: start;
}

.bio-text {
  font-size: 1rem;
  line-height: 1.85;
  color: rgba(240,234,237,0.68);
}

.press-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}
.tag {
  font-size: 11px;
  letter-spacing: 0.08em;
  padding: 5px 12px;
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 20px;
  color: var(--muted);
  transition: all 0.2s;
}
.tag:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(255,107,53,0.06);
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 16px;
  background: var(--surface2);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}
.stat::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-soft);
  opacity: 0;
  transition: opacity 0.3s;
}
.stat:hover { border-color: rgba(255,107,53,0.3); box-shadow: 0 4px 20px rgba(255,60,172,0.08); }
.stat:hover::before { opacity: 1; }

.stat-value {
  font-size: 1.5rem;
  font-weight: 300;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  position: relative;
}
.stat-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  position: relative;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>
