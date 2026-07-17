<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6" style="margin-top: -58px">
      <div class="mb-10 space-y-2 text-center">
        <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">近期文章</h2>
        <p class="text-gray-600 italic lg:mx-auto lg:w-6/12 dark:text-gray-300">内容来自 Peckot Blog 博客</p>
      </div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-10">
        <a
          id="blog1_link"
          :class="[
            // 布局与间距
            'group p-6 sm:p-8 lg:col-span-3',

            // 卡片外观
            'rounded-3xl border border-gray-100 bg-white/50 shadow-2xl shadow-gray-600/10',
            'dark:border-gray-700 dark:bg-gray-800 dark:shadow-none',

            // 交互动效
            'duration-200 hover:scale-105',
          ]"
        >
          <div class="relative overflow-hidden rounded-xl">
            <img
              id="blog1_img"
              alt="art cover"
              loading="lazy"
              src="/assets/bg_blog.png"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div class="relative mt-4">
            <h3 id="blog1_title" class="text-2xl font-semibold text-gray-800 dark:text-white">获取中...</h3>
            <p id="blog1_desc" class="mt-4 mb-6 text-gray-600 dark:text-gray-300">获取中...</p>
            <p class="inline-block" href="#">
              <span
                class="font-bold text-secondary group-hover:text-primary dark:text-purple-400 group-hover:dark:text-secondarydark"
                >查看详情</span
              >
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 64"
              fill="currentColor"
              class="mb-1 ml-4 inline h-5 w-5 text-2xl text-primary opacity-0 transition duration-200 group-hover:opacity-100 dark:text-secondarydark"
            >
              <path
                fill-rule="evenodd"
                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
        <a
          id="blog2_link"
          :class="[
            // 布局与间距
            'group p-6 sm:p-8 lg:col-span-3',

            // 卡片外观
            'rounded-3xl border border-gray-100 bg-white/50 shadow-2xl shadow-gray-600/10',
            'dark:border-gray-700 dark:bg-gray-800 dark:shadow-none',

            // 交互动效
            'duration-200 hover:scale-105',
          ]"
        >
          <div class="relative overflow-hidden rounded-xl">
            <img
              id="blog2_img"
              alt="art cover"
              loading="lazy"
              src="/assets/bg_blog.png"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div class="relative mt-4">
            <h3 id="blog2_title" class="text-2xl font-semibold text-gray-800 dark:text-white">获取中...</h3>
            <p id="blog2_desc" class="mt-4 mb-6 text-gray-600 dark:text-gray-300">获取中...</p>
            <p class="inline-block" href="#">
              <span
                class="font-bold text-secondary group-hover:text-primary dark:text-purple-400 group-hover:dark:text-secondarydark"
                >查看详情</span
              >
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 64"
              fill="currentColor"
              class="mb-1 ml-4 inline h-5 w-5 text-2xl text-primary opacity-0 transition duration-200 group-hover:opacity-100 dark:text-secondarydark"
            >
              <path
                fill-rule="evenodd"
                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
        <a
          id="blog3_link"
          :class="[
            // 布局与间距
            'group p-6 sm:p-8 lg:col-span-3',

            // 卡片外观
            'rounded-3xl border border-gray-100 bg-white/50 shadow-2xl shadow-gray-600/10',
            'dark:border-gray-700 dark:bg-gray-800 dark:shadow-none',

            // 交互动效
            'duration-200 hover:scale-105',
          ]"
        >
          <div class="relative overflow-hidden rounded-xl">
            <img
              id="blog3_img"
              alt="art cover"
              loading="lazy"
              src="/assets/bg_blog.png"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div class="relative mt-4">
            <h3 id="blog3_title" class="text-2xl font-semibold text-gray-800 dark:text-white">获取中...</h3>
            <p id="blog3_desc" class="mt-4 mb-6 text-gray-600 dark:text-gray-300">获取中...</p>
            <p class="inline-block" href="#">
              <span
                class="font-bold text-secondary group-hover:text-primary dark:text-purple-400 group-hover:dark:text-secondarydark"
                >查看详情</span
              >
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 64"
              fill="currentColor"
              class="mb-1 ml-4 inline h-5 w-5 text-2xl text-primary opacity-0 transition duration-200 group-hover:opacity-100 dark:text-secondarydark"
            >
              <path
                fill-rule="evenodd"
                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
        <a
          href="https://blog.peckot.com"
          :class="[
            // 布局与间距
            'group flex items-center justify-center p-6 sm:p-8',

            // 卡片外观
            'bg-blog rounded-3xl border border-gray-100 bg-cover',
            'shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:shadow-none',

            // 交互动效
            'duration-200 hover:scale-105',
          ]"
        >
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            更<br v-if="wx(880)" />多<br v-if="wx(880)" />内<br v-if="wx(880)" />容<br v-if="wx(880)" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 64"
              fill="currentColor"
              :class="{ 'mb-1 ml-2 inline': ws(880) }"
              class="h-5 w-5 animate-[pulse_1.5s_ease-in-out_infinite] text-2xl text-secondary md:mt-6 md:ml-0 dark:text-secondarydark"
            >
              <path
                fill-rule="evenodd"
                d="M13 8l20 20a7 7 0 010 10l-20 20a1 1 0 01-5-5l20-20-20-20a1 1 0 015-5"
                clip-rule="evenodd"
              />
            </svg>
          </h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    window.addEventListener('resize', () => {
      this.$forceUpdate()
    })
    axios
      .get('https://blog.peckot.com/index.xml')
      .then((response) => {
        const articles = []
        const items = response.data.match(/<item>((?:.|\r|\n)*?)<\/item>/g)
        for (const item of items) {
          const article = {}
          article.title = item.match(/<title>((?:.|\r|\n)*?)<\/title>/)[1]
          article.link = item.match(/<link>((?:.|\r|\n)*?)<\/link>/)[1]
          article.date = item.match(/<date>((?:.|\r|\n)*?)<\/date>/)[1]
          article.cover = item.match(/<cover>((?:.|\r|\n)*?)<\/cover>/)[1]
          article.desc = item.match(/<description>((?:.|\r|\n)*?)<\/description>/)[1]
          articles.push(article)
        }
        for (let i = 0; i < 3; i++) {
          document.getElementById(`blog${i + 1}_img`).src = articles[i].cover || '/images/bg_blog.png'
          document.getElementById(`blog${i + 1}_title`).innerHTML = articles[i].title || '标题获取失败'
          const desc = articles[i].desc
          document.getElementById(`blog${i + 1}_desc`).innerHTML =
            (() => {
              const max = 25
              if (desc.length > max) {
                return desc.substring(0, max) + '……'
              } else {
                return desc
              }
            })() || '描述获取失败'
          const card = document.getElementById(`blog${i + 1}_link`)
          card.href = articles[i].link
        }
      })
      .catch((err) => {
        console.error(err)
      })
  },
  methods: {
    ws(width) {
      return window.innerWidth < width
    },
    wx(width) {
      return window.innerWidth >= width
    },
  },
}
</script>

<style>
@media (prefers-color-scheme: dark) {
  .bg-blog {
    background-image: linear-gradient(rgba(20, 20, 20, 0.5), rgba(0, 0, 0, 0.5)), url(/images/bg_blog.png);
  }
}

@media (prefers-color-scheme: light) {
  .bg-blog {
    background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), url(/images/bg_blog.png);
  }
}
</style>
