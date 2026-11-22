<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import Purpose from '@/components/home/HomePurpose.vue'
import Projects from '@/components/home/HomeProjects.vue'
import Hero from '@/components/home/HomeHero.vue'
import Feedback from '@/components/home/HomeFeedback.vue'
import JoinNow from '@/components/home/HomeJoinUs.vue'
import Blogs from '@/components/home/HomeBlogs.vue'
</script>

<template>
  <AppHeader />
  <main class="home-sections">
    <Hero />
    <Projects />
    <Purpose />
    <Feedback />
    <JoinNow />
    <Blogs />
  </main>
  <AppFooter class="home-footer" />
</template>

<style scoped>
@media screen {
  .home-sections > section,
  .home-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    min-height: 100svh;
    padding-block: clamp(1.5rem, 4vh, 3rem);
    scroll-snap-align: start;
  }
}

@media screen and (prefers-reduced-motion: no-preference) {
  :global(html:has(.home-sections)) {
    scroll-snap-type: y proximity;
  }
}
</style>
