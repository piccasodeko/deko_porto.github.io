<!-- app.vue -->
<template>
  <div class="portfolio-root">
    <!-- Header Navigation -->
    <header class="site-header">
      <div class="site-brand">
        <a href="#" class="site-title" @click.prevent="activePanel = 'work'">DEKO PORTO</a>
        <div class="site-divider-v"></div>
        <span class="site-tagline">Architecture & Design</span>
      </div>
      <nav class="site-header-nav">
        <a href="#" :class="{ 'nav-active': activePanel === 'work' }" @click.prevent="activePanel = 'work'">Work</a>
        <a href="#" :class="{ 'nav-active': activePanel === 'about' }" @click.prevent="activePanel = 'about'">About</a>
      </nav>
    </header>

    <!-- Main Split Layout -->
    <main class="split-container">
      <!-- Left Side: Interactive Panels -->
      <section class="left-side">
        
        <!-- Work Panel -->
        <div class="panel" :class="{ 'panel-active': activePanel === 'work' }">
          <div class="panel-header">
            <span>Selected Projects</span>
          </div>
          <ul class="project-list" @mouseleave="activeBg = 'default'">
            <li class="project-item" @mouseenter="activeBg = 'project1'">
              <a href="#" class="project-link">
                <span class="project-number">01</span>
                <span class="project-title">Brutalist Spaces</span>
                <span class="project-category">Exterior</span>
              </a>
            </li>
            <li class="project-item" @mouseenter="activeBg = 'project2'">
              <a href="#" class="project-link">
                <span class="project-number">02</span>
                <span class="project-title">Minimalist Mono</span>
                <span class="project-category">Interior</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- About Panel -->
        <div class="panel" :class="{ 'panel-active': activePanel === 'about' }">
          <div class="about-content">
            <span class="about-label">Philosophy</span>
            <h2 class="about-headline">Creating <em>structural</em> balance in design.</h2>
            <p class="about-body">I focus on architectural visualizations that respect raw texturing, geometric clean lines, and environmental light play.</p>
            <div class="about-stats">
              <div class="stat-item"><span class="stat-number">5+</span><span class="stat-label">Years Exp</span></div>
              <div class="stat-item"><span class="stat-number">25+</span><span class="stat-label">Concepts</span></div>
            </div>
          </div>
        </div>

      </section>

      <!-- Divider line -->
      <div class="split-divider"></div>

      <!-- Right Side: Full-Height Interactive Image Canvas -->
      <section class="right-side">
        <div class="canvas-bg" :class="{ 'active-bg': activeBg === 'default' }" style="background-color: #d1cdc8;"></div>
        <div class="canvas-bg" :class="{ 'active-bg': activeBg === 'project1' }" style="background-image: url('https://picsum.photos');"></div>
        <div class="canvas-bg" :class="{ 'active-bg': activeBg === 'project2' }" style="background-image: url('https://picsum.photos');"></div>
      </section>
    </main>

    <!-- Footer System -->
    <footer class="site-footer">
      <span>© 2026 DEKO PORTO</span>
      <div class="footer-links">
        <a href="#">Instagram</a>
        <span class="footer-dot">•</span>
        <a href="#">Email</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activePanel = ref('work')
const activeBg = ref('default')
</script>

<style>
/* Load External Typography Foundations Directly */
@import url('https://googleapis.com');

*, *::before, *::after {
  margin: 0; padding: 0; box-sizing: border-box;
}

:root {
  --paper: #F2F0ED;
  --ink: #1A1A1A;
  --ink-light: #8A8580;
  --accent: #C4553A;
  --transition-panel: 0.55s cubic-bezier(0.23, 1, 0.32, 1);
}

.portfolio-root {
  background-color: var(--paper); color: var(--ink);
  font-family: 'Instrument Sans', sans-serif;
  overflow: hidden; height: 100vh; width: 100vw;
}

.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 3rem;
}
.site-brand { display: flex; align-items: baseline; gap: 1rem; }
.site-title {
  font-family: 'Playfair Display', serif; font-weight: 900; font-size: 1.15rem;
  text-transform: uppercase; color: var(--ink); text-decoration: none;
}
.site-divider-v { width: 1px; height: 14px; background: rgba(26, 26, 26, 0.2); }
.site-tagline { font-family: 'DM Mono', monospace; font-size: 0.62rem; color: var(--ink-light); letter-spacing: 0.14em; text-transform: uppercase;}

.site-header-nav { display: flex; gap: 0.35rem; }
.site-header-nav a {
  font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--ink-light); text-decoration: none; padding: 0.35rem 0.7rem; transition: all 0.3s;
}
.site-header-nav a.nav-active, .site-header-nav a:hover {
  color: var(--paper); background-color: var(--ink);
}

.split-container { display: flex; height: 100vh; width: 100vw; padding-top: 4rem; padding-bottom: 3rem; }
.left-side, .right-side { width: 50vw; height: 100%; position: relative; }
.split-divider { width: 1px; background: rgba(26, 26, 26, 0.1); }

.panel {
  position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center;
  opacity: 0; transform: translateY(20px); transition: opacity var(--transition-panel), transform var(--transition-panel);
  pointer-events: none; padding: 2rem 0;
}
.panel.panel-active { opacity: 1; transform: translateY(0); pointer-events: auto; }

.panel-header { padding: 0 3rem 1.5rem; font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--ink-light); text-transform: uppercase;}
.project-list { list-style: none; border-top: 1px solid rgba(26, 26, 26, 0.12); }
.project-item { border-bottom: 1px solid rgba(26, 26, 26, 0.12); transition: background 0.4s; }
.project-link { display: flex; align-items: baseline; padding: 1.5rem 3rem; text-decoration: none; color: inherit; }
.project-item:hover { background: var(--ink); color: var(--paper); }

.project-number { font-family: 'DM Mono', monospace; font-size: 0.72rem; margin-right: 1.5rem; opacity: 0.5; }
.project-title { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 1.8rem; text-transform: uppercase; }
.project-category { font-family: 'DM Mono', monospace; font-size: 0.65rem; margin-left: auto; opacity: 0.5; text-transform: uppercase; }

.about-content { padding: 2rem 3rem; }
.about-label { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--ink-light); text-transform: uppercase; display: block; margin-bottom: 1rem; }
.about-headline { font-family: 'Playfair Display', serif; font-weight: 800; font-size: 2.4rem; line-height: 1.2; margin-bottom: 1.5rem; }
.about-headline em { color: var(--accent); font-style: italic; }
.about-body { font-size: 0.95rem; line-height: 1.6; color: var(--ink-light); margin-bottom: 2rem; max-width: 450px; }
.about-stats { display: flex; gap: 3rem; border-top: 1px solid rgba(26, 26, 26, 0.1); padding-top: 1.5rem; }
.stat-item { display: flex; flex-direction: column; }
.stat-number { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 800; }
.stat-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--ink-light); text-transform: uppercase; }

.canvas-bg {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  opacity: 0; transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s; transform: scale(1.02);
}
.canvas-bg.active-bg { opacity: 1; transform: scale(1); }

.site-footer {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between; padding: 1rem 3rem;
  font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--ink-light); text-transform: uppercase;
}
.footer-links a { color: var(--ink-light); text-decoration: none; }
.footer-links a:hover { color: var(--ink); }
.footer-dot { margin: 0 0.4rem; }
</style>
