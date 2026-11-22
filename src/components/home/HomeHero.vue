<script setup>
import HomeButton from '@/components/ui/HomeButton.vue'
import HomePlatformIcon from '@/components/ui/HomePlatformIcon.vue'
import HomeIntroBlock from '@/components/ui/HomeIntroBlock.vue'

const intros = [
  {
    id: 'creativity',
    title: '多元一体的新奇创意',
    contents: ['学生时代总是充满创意，这里的', '伙伴们有着不同兴趣领域！包括', '设计、编程、艺术创作等方面。'],
  },
  {
    id: 'team-atmosphere',
    title: '轻松自由的团队氛围',
    contents: ['不必拘谨于严肃的团队氛围，在', '这里，朋友般的团队关系才是维', '持团队可发展行进的最大动力！'],
  },
  {
    id: 'tech-sharing',
    title: '持续革新的技术分享',
    contents: ['我们坚信，技术革新是持续的过', '程，不定期的技术分享和发展规', '划将为团队发展进行持续导向！'],
  },
]
</script>

<template>
  <section class="relative">
    <!-- Background illustration start -->
    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-30 dark:opacity-20">
      <div
        class="h-56 bg-gradient-to-br from-orange-300 to-orange-200 blur-[106px] dark:from-blue-700 dark:to-purple-400"
      ></div>
      <div class="h-32 bg-gradient-to-r from-yellow-400 to-rose-200 blur-[106px] dark:to-indigo-600"></div>
    </div>
    <!-- Background illustration end -->

    <div class="mx-auto w-full max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="relative grid gap-[clamp(1.5rem,6svh,4.5rem)] pt-18">
        <div class="mx-auto grid w-full gap-[clamp(1.25rem,4svh,3rem)] text-center xl:w-2/3">
          <h1
            :class="[
              'flex flex-col items-center gap-y-1',
              'text-[clamp(2rem,12vw,3rem)] leading-tight font-bold text-gray-900',
              'sm:flex-row sm:justify-center sm:gap-x-[0.5em] sm:gap-y-0',
              'lg:text-6xl dark:text-white',
            ]"
          >
            <span class="whitespace-nowrap">
              不只是<span
                class="text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent dark:from-primarydark dark:to-secondarydark"
                >专注开发</span
              >
            </span>
            <span class="whitespace-nowrap">
              更是<span
                class="text-gradient bg-gradient-to-tl from-primary to-secondary bg-clip-text text-transparent dark:from-primarydark dark:to-secondarydark"
                >构建梦想</span
              >
            </span>
          </h1>
          <div class="text-lg text-gray-700 dark:text-gray-300">
            <span>一个有着远大白日梦想的学生团队，</span><br class="sm:hidden" />
            <span>一个由计算机爱好者们组建运营的团队，</span><br />
            <span>一个用心雕琢细节与用户体验的团队。</span><br class="sm:hidden" />
            <span>在此打造——<span class="font-bold">更出色的产品与服务</span>。</span>
          </div>
          <div class="flex flex-wrap justify-center gap-x-6 gap-y-4">
            <HomeButton text="关于我们" link="/about" :primary="true" />
            <HomeButton text="查看博客" link="https://blog.peckot.com" />
            <HomeButton text="阅读文档" link="https://docs.peckot.com" />
          </div>
          <div class="hidden justify-between border-y border-gray-100 py-8 sm:flex dark:border-gray-800">
            <HomeIntroBlock v-for="intro in intros" :key="intro.id" :title="intro.title" :contents="intro.contents" />
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4">
          <HomePlatformIcon name="Vercel" image="/platforms/vercel.svg" link="https://vercel.com/home/" />
          <HomePlatformIcon name="GitHub" image="/platforms/github.svg" link="https://github.com" />
          <HomePlatformIcon name="Node.js" image="/platforms/nodejs.svg" link="https://nodejs.org/zh-cn/" />
          <HomePlatformIcon name="Vue.js" image="/platforms/vuejs.svg" link="https://cn.vuejs.org/" />
        </div>
      </div>
    </div>
  </section>
</template>
