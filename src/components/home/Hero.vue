<template>
  <div class="relative">
    <!-- Background illustration start -->
    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
      <div
        class="h-56 bg-gradient-to-br from-primary to-orange-400 blur-[106px] dark:from-blue-700 dark:to-purple-400"
      ></div>
      <div
        class="dark:from-primarydark-400 h-32 bg-gradient-to-r from-yellow-400 to-red-300 blur-[106px] dark:to-indigo-600"
      ></div>
    </div>
    <!-- Background illustration end -->

    <div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="relative pt-32 bg:pt-48">
        <div class="mx-auto text-center xl:w-2/3">
          <h1
            :class="[
              'flex flex-col items-center gap-y-1',
              'text-5xl leading-tight font-bold text-gray-900',
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
          <div class="mt-12 text-lg text-gray-700 dark:text-gray-300">
            <span>一个有着远大白日梦想的学生团队，</span><br class="sm:hidden" />
            <span>一个由计算机爱好者们组建运营的团队，</span><br />
            <span>一个用心雕琢细节与用户体验的团队。</span><br class="sm:hidden" />
            <span>在此打造——<span class="font-bold">更出色的产品与服务</span>。</span>
          </div>
          <div class="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4">
            <a
              href="/about"
              :class="[
                'relative flex h-12 w-2/3 items-center justify-center px-6 sm:w-max',

                'before:absolute before:inset-0 before:rounded-full before:bg-primary',
                'before:dark:bg-primarydark',

                'before:transition before:duration-300 hover:before:scale-110',
                'active:duration-75 active:before:scale-95',
              ]"
            >
              <span class="relative text-base font-semibold text-white">关于我们</span>
            </a>
            <a
              href="https://blog.peckot.com"
              :class="[
                'relative flex h-12 w-2/3 items-center justify-center px-6 sm:w-max',

                'before:absolute before:inset-0 before:rounded-full before:border',
                'before:border-transparent before:bg-primary/10 before:bg-gradient-to-b',
                'dark:before:border-gray-700 before:dark:bg-primarydark/10 dark:before:bg-gray-800',

                'before:transition before:duration-300 hover:before:scale-110',
                'active:duration-75 active:before:scale-95',
              ]"
            >
              <span class="relative text-base font-semibold text-primary dark:text-white">查看博客</span>
            </a>
            <a
              href="https://docs.peckot.com"
              :class="[
                'relative flex h-12 w-2/3 items-center justify-center px-6 sm:w-max',

                'before:absolute before:inset-0 before:rounded-full before:border',
                'before:border-transparent before:bg-primary/10 before:bg-gradient-to-b',
                'dark:before:border-gray-700 before:dark:bg-primarydark/10 dark:before:bg-gray-800',

                'before:transition before:duration-300 hover:before:scale-110',
                'active:duration-75 active:before:scale-95',
              ]"
            >
              <span class="relative text-base font-semibold text-primary dark:text-white">阅读文档</span>
            </a>
          </div>
          <div class="mt-18 hidden justify-between border-y border-gray-100 py-8 sm:flex dark:border-gray-800">
            <div class="flex-1 text-center indent-1">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">多元一体的新奇创意</h6>
              <p class="mt-2 text-gray-500">
                学生时代总是充满创意，这里的<br />&nbsp;伙伴们有着不同兴趣领域！包括<br />&nbsp;设计、编程、艺术创作等方面。
              </p>
            </div>
            <div class="flex-1 text-center indent-1">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">轻松自由的团队氛围</h6>
              <p class="mt-2 text-gray-500">
                不必拘谨于严肃的团队氛围，在<br />&nbsp;这里，朋友般的团队关系才是维<br />&nbsp;持团队可发展行进的最大动力！
              </p>
            </div>
            <div class="flex-1 text-center indent-1">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">持续革新的技术分享</h6>
              <p class="mt-2 text-gray-500">
                我们坚信，技术革新是持续的过<br />&nbsp;程，不定期的技术分享和发展规<br />&nbsp;划将为团队发展进行持续导向！
              </p>
            </div>
          </div>
        </div>
        <div class="mt-18 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4">
          <a
            href="https://vercel.com/home/"
            class="p-4 grayscale transition duration-200 hover:scale-105 hover:grayscale-0"
          >
            <img src="/supporters/vercel.svg" class="center mx-auto h-12 w-auto" loading="lazy" alt="Vercel" />
          </a>
          <a href="https://github.com/" class="p-4 grayscale transition duration-200 hover:scale-105 hover:grayscale-0">
            <img src="/supporters/github.svg" class="center mx-auto h-12 w-auto" loading="lazy" alt="GitHub" />
          </a>
          <a
            href="https://nodejs.org/zh-cn/"
            class="p-4 grayscale transition duration-200 hover:scale-105 hover:grayscale-0"
          >
            <img src="/supporters/nodejs.svg" class="center mx-auto h-12 w-auto" loading="lazy" alt="Node.js" />
          </a>
          <a
            href="https://cn.vuejs.org/"
            class="p-4 grayscale transition duration-200 hover:scale-105 hover:grayscale-0"
          >
            <img src="/supporters/vuejs.svg" class="center mx-auto h-12 w-auto" loading="lazy" alt="Vue.js" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
