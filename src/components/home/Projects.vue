<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="md:w-2/3 lg:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-secondary">
          <path
            fill-rule="evenodd"
            d="M9 4.5a.8.8 0 01.7.5l.8 2.8a3.8 3.8 0 002.6 2.6l2.8.8a.8.8 0 010 1.4l-2.8.8a3.8 3.8 0 00-2.6 2.6l-.8 2.8a.8.8 0 01-1.4 0l-.8-2.8a3.8 3.8 0 00-2.6-2.6l-2.8-.8a.8.8 0 010-1.4l2.8-.8a3.8 3.8 0 002.6-2.5l.8-2.8a.8.8 0 01.7-.6zm9-3a.8.8 0 01.7.6l.3 1c.2.9 1 1.7 1.9 1.9l1 .3a.8.8 0 010 1.5l-1 .3c-.9.2-1.7 1-1.9 1.9l-.3 1a.8.8 0 01-1.5 0l-.3-1a2.6 2.6 0 00-1.9-1.9l-1-.3a.8.8 0 010-1.5l1-.3a2.6 2.6 0 001.9-1.9l.3-1a.8.8 0 01.8-.6zm-1.5 13.5a.8.8 0 01.7.5l.4 1.2c.1.4.5.8.9.9l1.2.4a.8.8 0 010 1.4l-1.2.4c-.4.1-.8.5-.9.9l-.4 1.2a.8.8 0 01-1.4 0l-.4-1.2a1.5 1.5 0 00-.9-.9l-1.2-.4a.8.8 0 010-1.4l1.2-.4c.4-.1.8-.5.9-.9l.4-1.2a.8.8 0 01.7-.5z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 class="my-8 text-2xl font-bold text-gray-700 md:text-4xl dark:text-white">我们的在营项目</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">由 Peckot Studios 开发或维护的相关作品或产品</p>
      </div>
      <div
        :class="[
          'mt-20 grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4',
          'divide-x divide-y divide-gray-100 rounded-3xl border border-gray-100',
          'lg:divide-y-0 dark:divide-gray-700 dark:border-gray-700',
          'text-gray-600',
        ]"
      >
        <div
          v-for="project in projects" :key="project.name"
          class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800"
        >
          <div
            :style="{ '--project-image': `url(${project.image})` }"
            class="bg-project relative space-y-10 bg-cover p-8 py-12 transition"
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
            <div class="space-y-2">
              <h5 class="text-2xl font-semibold text-gray-800 transition group-hover:text-secondary dark:text-white group-hover:dark:text-secondarydark">
                {{ project.name }}
              </h5>
              <p class="text-gray-700 transition group-hover:text-primary dark:text-gray-300 group-hover:dark:text-[#cc52dd]">
                {{ project.description }}
              </p>
            </div>
            <a
              :href="project.link"
              class="flex items-center justify-between text-gray-800 group-hover:text-secondary dark:text-white group-hover:dark:text-secondarydark"
            >
              <span class="text-sm">查看详情</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// storage for above mentioned projects
const projects = [
  {
    icon: "/assets/burning_furnace.gif",
    name: "UNI-verse",
    description: "一个基于 Minecraft: Java Edition、由 Peckot Studios 长期运营的中型多人游戏服务器。",
    image: "/assets/bg_peckotmc.png",
    link: "https://uni-ver.se/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4341/4341134.png",
    name: "项目II",
    description: "[项目简介]",
    image: "/assets/project2.png",
    link: "#",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4341/4341160.png",
    name: "项目III",
    description: "[项目简介]",
    image: "/assets/project3.png",
    link: "#",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4341/4341025.png",
    name: "项目N",
    description: "[项目简介]",
    image: "/assets/project4.png",
    link: "#",
  },
];

export default {
  data() {
    return {
      projects,
    };
  },
};
</script>

<style>
.bg-project {
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(
      rgba(255,255,255,.6),
      rgba(255,255,255,.5)
    ),
    var(--project-image);
}

@media (prefers-color-scheme: dark) {
  .bg-project {
    background-image:
      linear-gradient(
        rgba(20,20,20,.5),
        rgba(0,0,0,.5)
      ),
      var(--project-image);
  }
}
</style>
