<template>
  <header>
    <nav class="absolute z-10 w-full">
      <div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
        <div class="relative flex flex-wrap items-center justify-between gap-6 py-4 md:gap-0">
          <input id="toggle_nav" aria-hidden="true" type="checkbox" name="toggle_nav" class="peer hidden" />
          <div class="relative z-20 flex w-full justify-between md:px-0 bg:w-max">
            <a href="/" aria-label="logo" class="flex items-center space-x-2">
              <div aria-hidden="true" class="flex space-x-1">
                <img class="h-10" src="/logo.svg" alt="Peckot" draggable="false" />
              </div>
              <span class="text-3xl font-bold text-gray-900 dark:text-white">Peckot Studios</span>
            </a>
            <div class="relative flex max-h-10 items-center bg:hidden">
              <label id="hamburger" role="button" for="toggle_nav" aria-label="humburger" class="relative -mr-6 p-6">
                <div
                  id="line"
                  aria-hidden="true"
                  class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
                <div
                  id="line2"
                  aria-hidden="true"
                  class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
              </label>
            </div>
          </div>
          <!-- <div aria-hidden="true"
                        class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70">
          </div> -->
          <div
            :class="[
              // 定位、布局与初始状态
              'invisible absolute top-full right-0 z-20 flex-col flex-wrap justify-end gap-4',
              'origin-top translate-y-1 scale-95 p-6 opacity-0',

              // 边框、背景与动效
              'rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10',
              'transition-all duration-300',

              // 菜单展开状态
              'peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100',

              // 桌面端布局
              'bg:visible bg:relative bg:flex bg:translate-y-0 bg:scale-100',
              'bg:flex-row bg:items-center bg:gap-0 bg:border-none bg:bg-transparent',
              'bg:p-0 bg:opacity-100 bg:shadow-none bg:peer-checked:translate-y-0',

              // 深色模式
              'dark:border-gray-700 dark:bg-gray-800 dark:shadow-none',
            ]"
          >
            <div class="flex-auto text-gray-600 bg:ml-36 bg:w-auto bg:pt-0 bg:pr-4 dark:text-gray-300">
              <ul class="flex flex-col gap-6 font-medium tracking-wide bg:flex-row bg:gap-0 bg:text-sm">
                <li>
                  <a href="/about" :class="getPageClass('about')">
                    <span>关于我们</span>
                  </a>
                </li>
                <li>
                  <a href="https://docs.peckot.com" target="_self" :class="getPageClass()">
                    <span>阅读文档</span>
                  </a>
                </li>
                <li>
                  <a href="https://blog.peckot.com" target="_self" :class="getPageClass()">
                    <span>查看博客</span>
                  </a>
                </li>
                <li>
                  <a href="https://peckot.com/f/joinus/qq" target="_blank" :class="getPageClass()">
                    <span>QQ交流群</span>
                  </a>
                </li>
                <li>
                  <a href="https://peckot.com/f/joinus/bilibili" target="_blank" :class="getPageClass()">
                    <span>哔哩哔哩</span>
                  </a>
                </li>
                <li>
                  <a href="https://peckot.com/f/joinus/github" target="_blank" :class="getPageClass()">
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    isPage(page) {
      return (window.location.pathname.substring(1) || 'home') === page
    },
    getPageClass(page) {
      return {
        'block md:px-4 transition': true,
        'hover:text-primary hover:dark:text-primarydark': this.isPage('home'),
        'text-primary dark:text-primarydark': this.isPage(page),
      }
    },
  },
}
</script>
