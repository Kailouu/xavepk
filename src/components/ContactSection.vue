<template>
  <section id="contact" class="contact section">
    <div class="container">
      <span class="section-label">Contact</span>
      <h2 class="section-title">Get in Touch</h2>
      <p class="contact-intro">For bookings, press inquiries, and collaborations —</p>

      <a href="./xav-press-kit.pdf" download="XAV-Press-Kit.pdf" class="presskit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download Press Kit
      </a>

      <div class="contact-grid">
        <a v-for="link in links" :key="link.label" :href="link.href" class="contact-card" target="_blank" rel="noopener">
          <span class="contact-icon" v-html="link.icon"></span>
          <div>
            <p class="contact-card-label">{{ link.label }}</p>
            <p class="contact-card-value">{{ link.display }}</p>
          </div>
        </a>
      </div>

      <div class="socials">
        <a v-for="s in socials" :key="s.label" :href="s.href" class="social-link" target="_blank" rel="noopener" :title="s.label" v-html="s.icon"></a>
      </div>
    </div>

    <footer class="footer">
      <p>© {{ year }} XAV · All rights reserved · Liverpool, UK</p>
    </footer>
  </section>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const links = [
  {
    label: 'Email',
    display: 'xavvibes19@gmail.com',
    href: 'mailto:xavvibes19@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  },
  {
    label: 'Instagram',
    display: '@xavvibes_',
    href: 'https://instagram.com/xavvibes_',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
  },
  {
    label: 'Based In',
    display: 'Liverpool, UK',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/xavvibes_',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
  },
  {
    label: 'YouTube',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`
  },
  {
    label: 'TikTok',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>`
  },
  {
    label: 'SoundCloud',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.5a2.5 2.5 0 0 0 2.5 2.5h13a4 4 0 0 0 .5-7.97 5.5 5.5 0 0 0-10.6-1.47A2.5 2.5 0 0 0 2 16.5z"/></svg>`
  },
]
</script>

<style scoped>
.contact {
  padding: 100px 20px 0;
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 70% 50% at 0% 30%, rgba(255,107,53,0.12) 0%, transparent 65%),
    radial-gradient(ellipse 60% 50% at 100% 70%, rgba(255,60,172,0.11) 0%, transparent 65%),
    radial-gradient(ellipse 50% 35% at 50% 0%, rgba(255,60,172,0.07) 0%, transparent 60%);
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
  margin-bottom: 12px;
}
.contact-intro { color: var(--muted); font-size: 15px; margin-bottom: 28px; }

.presskit-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 26px;
  border-radius: 26px;
  background: var(--gradient);
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 44px;
  transition: transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(255,60,172,0.25);
}
.presskit-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 30px rgba(255,60,172,0.4);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 44px;
}
.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px;
  background: var(--surface);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}
.contact-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-soft);
  opacity: 0;
  transition: opacity 0.25s;
}
.contact-card:hover {
  border-color: rgba(255,107,53,0.35);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255,60,172,0.1);
}
.contact-card:hover::before { opacity: 1; }

.contact-icon {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
  position: relative;
}
.contact-card-label {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 4px;
  position: relative;
}
.contact-card-value { font-size: 13px; color: var(--text); position: relative; }

.socials { display: flex; gap: 12px; justify-content: center; padding-bottom: 60px; }
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 50%;
  color: var(--muted);
  transition: color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.social-link:hover {
  color: #fff;
  border-color: transparent;
  background: var(--gradient);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255,60,172,0.25);
}

.footer {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 22px 20px;
  text-align: center;
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.05em;
}

@media (max-width: 640px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
