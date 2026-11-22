<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import Purpose from '@/components/home/HomePurpose.vue'
import Projects from '@/components/home/HomeProjects.vue'
import Hero from '@/components/home/HomeHero.vue'
import Feedback from '../components/home/Feedback.vue'
import JoinNow from '@/components/home/HomeJoinUs.vue'
import Blogs from '../components/home/Blogs.vue'
</script>

<template>
  <AppHeader />
  <main class="mb-40 space-y-40">
    <Hero />
    <Projects />
    <Purpose />
    <Feedback />
    <JoinNow />
    <Blogs />
  </main>
  <AppFooter />
</template>
