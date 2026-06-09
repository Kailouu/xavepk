<template>
  <section id="music" class="music section">
    <div class="container">
      <span class="section-label">Music</span>
      <h2 class="section-title">Tracks</h2>

      <div class="spotify-wrapper">
        <iframe
          src="https://open.spotify.com/embed/artist/1MRabfh5oRLHRAw8NyzO36?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowfullscreen
        ></iframe>
      </div>

      <div class="spotify-cta">
        <a
          href="https://open.spotify.com/artist/1MRabfh5oRLHRAw8NyzO36"
          target="_blank"
          rel="noopener"
          class="spotify-link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          Open on Spotify
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.music {
  padding: 100px 20px;
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 70% 55% at 15% 50%, rgba(255,107,53,0.11) 0%, transparent 65%),
    radial-gradient(ellipse 60% 50% at 85% 20%, rgba(255,60,172,0.10) 0%, transparent 65%),
    radial-gradient(ellipse 40% 40% at 50% 100%, rgba(255,107,53,0.07) 0%, transparent 70%);
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
  margin-bottom: 32px;
}

.spotify-wrapper {
  border-radius: 14px;
  overflow: hidden;
  /* gradient border */
  padding: 1px;
  background: var(--gradient);
  box-shadow: 0 8px 40px rgba(255,60,172,0.15), 0 4px 20px rgba(255,107,53,0.1);
}

.spotify-wrapper iframe {
  display: block;
  border-radius: 13px;
}

.spotify-cta {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.spotify-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border: 1px solid rgba(30,215,96,0.3);
  border-radius: 20px;
  font-size: 13px;
  color: #1ed760;
  transition: background 0.2s, border-color 0.2s;
  letter-spacing: 0.03em;
}
.spotify-link:hover {
  background: rgba(30,215,96,0.08);
  border-color: rgba(30,215,96,0.6);
}
</style>
