<script setup>
const projects = [
  {
    id: 'uni-verse',
    icon: '/assets/burning_furnace.gif',
    name: 'UNI-verse',
    description: '一个基于 Minecraft: Java Edition、由 Peckot Studios 长期运营的中型多人游戏服务器。',
    image: '/assets/bg_peckotmc.png',
    link: 'https://uni-ver.se/',
    available: true,
  },
  {
    id: 'project-2',
    icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341235.png',
    name: '敬请期待',
    description: '敬请期待',
    available: false,
  },
  {
    id: 'project-3',
    icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341260.png',
    name: '敬请期待',
    description: '敬请期待',
    available: false,
  },
  {
    id: 'project-n',
    icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341035.png',
    name: '敬请期待',
    description: '敬请期待',
    available: false,
  },
]
</script>

<template>
  <section>
    <div class="mx-auto w-full max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="md:w-2/3 lg:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-secondary">
          <path
            fill-rule="evenodd"
            d="M9 4.5a.8.8 0 01.7.5l.8 2.8a3.8 3.8 0 002.6 2.6l2.8.8a.8.8 0 010 1.4l-2.8.8a3.8 3.8 0 00-2.6 2.6l-.8 2.8a.8.8 0 01-1.4 0l-.8-2.8a3.8 3.8 0 00-2.6-2.6l-2.8-.8a.8.8 0 010-1.4l2.8-.8a3.8 3.8 0 002.6-2.5l.8-2.8a.8.8 0 01.7-.6zm9-3a.8.8 0 01.7.6l.3 1c.2.9 1 1.7 1.9 1.9l1 .3a.8.8 0 010 1.5l-1 .3c-.9.2-1.7 1-1.9 1.9l-.3 1a.8.8 0 01-1.5 0l-.3-1a2.6 2.6 0 00-1.9-1.9l-1-.3a.8.8 0 010-1.5l1-.3a2.6 2.6 0 001.9-1.9l.3-1a.8.8 0 01.8-.6zm-1.5 13.5a.8.8 0 01.7.5l.4 1.2c.1.4.5.8.9.9l1.2.4a.8.8 0 010 1.4l-1.2.4c-.4.1-.8.5-.9.9l-.4 1.2a.8.8 0 01-1.4 0l-.4-1.2a1.5 1.5 0 00-.9-.9l-1.2-.4a.8.8 0 010-1.4l1.2-.4c.4-.1.8-.5.9-.9l.4-1.2a.8.8 0 01.7-.5z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 class="my-4 text-2xl font-bold text-gray-900 md:my-8 md:text-4xl dark:text-white">我们的在营项目</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">由 Peckot Studios 开发或维护的相关作品或产品</p>
      </div>
      <div
        :class="[
          'mt-10 grid gap-px overflow-hidden sm:grid-cols-2 md:mt-20 lg:grid-cols-4',
          'rounded-3xl border border-gray-100 bg-gray-100',
          'dark:border-gray-700 dark:bg-gray-700',
          'text-gray-600',
        ]"
      >
        <component
          :is="project.available ? 'a' : 'article'"
          v-for="project in projects"
          :key="project.id"
          :href="project.available ? project.link : undefined"
          :class="[
            'relative flex bg-white transition dark:bg-gray-800',
            project.available && [
              'group hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10',
              'focus-visible:z-[1] focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
              'focus-visible:outline-secondary dark:focus-visible:outline-secondarydark',
            ],
          ]"
        >
          <div
            :style="project.image ? { '--project-image': `url(${project.image})` } : undefined"
            :class="[
              'relative flex w-full flex-1 flex-col bg-cover p-8 py-12 transition',
              { 'bg-project': project.image },
            ]"
          >
            <img
              :src="project.icon"
              :alt="project.name"
              class="w-12"
              width="512"
              height="512"
              loading="lazy"
              draggable="false"
            />
            <div class="mt-10 space-y-2">
              <h5
                class="text-2xl font-semibold text-gray-800 transition group-hover:text-secondary dark:text-white group-hover:dark:text-secondarydark"
              >
                {{ project.name }}
              </h5>
              <p
                class="text-gray-700 transition group-hover:text-primary dark:text-gray-300 group-hover:dark:text-[#cc52dd]"
              >
                {{ project.description }}
              </p>
            </div>
            <div
              v-if="project.available"
              class="mt-auto flex items-center justify-between pt-10 text-gray-800 group-hover:text-secondary dark:text-white group-hover:dark:text-secondarydark"
            >
              <span class="text-sm">查看详情</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 text-2xl opacity-100 transition duration-300 sm:-translate-x-4 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-x-0 sm:group-focus-visible:opacity-100"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span v-else class="mt-auto flex items-center pt-10 text-sm text-gray-500 dark:text-gray-400"
              >敬请期待</span
            >
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-project {
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), var(--project-image);
}

@media (prefers-color-scheme: dark) {
  .bg-project {
    background-image: linear-gradient(rgba(20, 20, 20, 0.5), rgba(0, 0, 0, 0.5)), var(--project-image);
  }
}
</style>
