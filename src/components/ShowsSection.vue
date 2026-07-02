<template>
  <section id="shows" class="shows section">
    <div class="container">
      <span class="section-label" v-reveal>Live</span>
      <h2 class="section-title" v-reveal>Shows</h2>

      <ul class="show-list" v-reveal:children>
        <li v-for="show in shows" :key="show.venue + show.date" class="show-item">
          <span class="show-date">{{ show.date }}</span>
          <div class="show-info">
            <span class="show-venue">{{ show.venue }}</span>
            <span class="show-city">{{ show.city }}</span>
          </div>
          <a v-if="show.ticketUrl" :href="show.ticketUrl" target="_blank" rel="noopener" class="show-cta">Tickets</a>
          <span v-else class="show-past">{{ show.note ?? 'Played' }}</span>
        </li>
      </ul>

      <p class="booking-note" v-reveal>
        Want XAV at your venue or event?
        <a href="mailto:xavvibes19@gmail.com">Get in touch →</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { vReveal } from '../composables/useReveal'

interface Show {
  date: string
  venue: string
  city: string
  ticketUrl?: string   // set for upcoming shows to display a Tickets button
  note?: string        // label for past shows, defaults to "Played"
}

// Edit this list to keep shows current — newest/upcoming first.
const shows: Show[] = [
  { date: '2026', venue: 'Primal Live', city: 'Liverpool, UK' },
  { date: '2026', venue: 'The Shipping Forecast', city: 'Liverpool, UK' },
  { date: '2026', venue: 'DFYNE MCR', city: 'Manchester, UK', note: 'Appearance' },
  { date: '2026', venue: 'Wirral Wave Radio', city: 'Wirral, UK', note: 'Radio' },
]
</script>

<style scoped>
.shows {
  padding: 100px 20px;
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 60% 50% at 90% 10%, rgba(255,60,172,0.09) 0%, transparent 65%),
    radial-gradient(ellipse 55% 45% at 10% 90%, rgba(255,107,53,0.09) 0%, transparent 65%);
}
.container { max-width: 760px; margin: 0 auto; }

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

.show-list {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.show-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 8px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: background 0.2s, padding-left 0.2s;
}
.show-item:hover {
  background: rgba(255,107,53,0.03);
  padding-left: 16px;
}

.show-date {
  font-size: 13px;
  color: var(--muted);
  min-width: 52px;
  letter-spacing: 0.08em;
}

.show-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.show-venue { font-size: 15px; color: #fff; font-weight: 400; }
.show-city { font-size: 12px; color: var(--muted); letter-spacing: 0.05em; }

.show-cta {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 8px 18px;
  border-radius: 20px;
  background: var(--gradient);
  color: #fff;
  transition: transform 0.15s, box-shadow 0.2s;
}
.show-cta:hover { transform: scale(1.04); box-shadow: 0 4px 16px rgba(255,60,172,0.3); }

.show-past {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 6px 14px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
}

.booking-note {
  margin-top: 32px;
  font-size: 14px;
  color: var(--muted);
}
.booking-note a {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
  margin-left: 6px;
}
</style>
