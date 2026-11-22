<script setup>
import HomeButton from '@/components/ui/HomeButton.vue'
</script>

<template>
  <div class="relative py-40">
    <div
      aria-hidden="true"
      class="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div class="h-56 bg-gradient-to-br from-primary to-orange-400 blur-[106px] dark:from-blue-700"></div>
      <div class="h-32 bg-gradient-to-r from-yellow-400 to-red-300 blur-[106px] dark:to-indigo-600"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="relative">
        <div class="flex items-center justify-center -space-x-2">
          <img
            loading="lazy"
            width="220"
            height="220"
            src="https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0"
            alt="############"
            class="h-8 w-8 rounded-full object-cover"
            draggable="false"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src="https://q1.qlogo.cn/g?b=qq&nk=3492772281&s=160"
            alt="AkiraNyx"
            class="h-12 w-12 rounded-full object-cover"
            draggable="false"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src="https://q1.qlogo.cn/g?b=qq&nk=2671876934&s=160"
            alt="Pectics"
            class="z-20 h-16 w-16 rounded-full object-cover"
            draggable="false"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src="https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0"
            alt="############"
            class="z-10 h-12 w-12 rounded-full object-cover"
            draggable="false"
          />
          <img
            loading="lazy"
            width="220"
            height="220"
            src="https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0"
            alt="############"
            class="h-8 w-8 rounded-full object-cover"
            draggable="false"
          />
        </div>
        <div class="m-auto space-y-6 md:w-8/12 lg:w-7/12">
          <h1 class="mt-6 text-center text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">即刻加入</h1>
          <p class="text-center text-xl text-gray-600 dark:text-gray-300">
            加入 Peckot Studios 的行列，成为我们所期待的<span class="font-bold">优秀开发者</span>。
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <HomeButton text="加入我们" link="/signup" :primary="true" />
            <HomeButton text="关于我们" link="/about" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
