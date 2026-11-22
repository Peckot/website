<script setup>
const feedbacks = [
  {
    id: 'pectics',
    name: 'Pectics',
    position: '主创 @Peckot Studios',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2671876934&s=640',
    avatarAlt: "Pectics' avatar",
    content: [
      '直到如今我仍然认为 Peckot Studios 的创立是值得的，',
      '尽管这种社团形式的组织与传统团队比起来显得十分随意，',
      '但是作为学生，我们的热情是不易熄灭的。',
      '既然大家由于共同的兴趣爱好而聚集到了一起，',
      '又为何不奋斗一时建设属于自己内心的美好呢？',
    ].join(''),
  },
  {
    id: 'someone-1',
    name: 'Someone',
    position: 'Some position',
    avatar:
      'https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0',
    avatarAlt: "Someone's avatar",
    content: 'Some texts texts texts texts texts texts texts texts.',
  },
  {
    id: 'akira-nyx',
    name: 'Akira Nyx',
    position: '共创 @Peckot Studios',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3492772281&s=640',
    avatarAlt: "Akira Nyx's avatar",
    content:
      '2021年6月27日创立 Peckot Studios。那天，我们踏入了未曾设想的的道路。尽管身隔远方，但是我们就像一滴滴的水珠，其表面张力不断地拉拢着我们，正因如此，才砌起了我们心中那一座热情的圣殿、点燃了希望的冉冉篝火。',
  },
  {
    id: 'someone-2',
    name: 'Someone',
    position: 'Some position',
    avatar:
      'https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0',
    avatarAlt: "Someone's avatar",
    content: 'Some texts texts texts texts texts texts texts texts.',
  },
  {
    id: 'someone-3',
    name: 'Someone',
    position: 'Some position',
    avatar:
      'https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0',
    avatarAlt: "Someone's avatar",
    content: 'Some texts texts texts texts texts texts texts texts.',
  },
  {
    id: 'someone-4',
    name: 'Someone',
    position: 'Some position',
    avatar:
      'https://th.bing.com/th/id/R.07f468b53c25821ba3e6f132d6d25bd8?rik=DErpDe5xln0zkQ&riu=http%3a%2f%2fphotos.tuchong.com%2f280990%2ff%2f3418241.jpg&ehk=VPbVmeTbGYp4eM04ruObNwuRl2Isjytt%2fRaPEoC4Gy4%3d&risl=&pid=ImgRaw&r=0',
    avatarAlt: "Someone's avatar",
    content: 'Some texts texts texts texts texts texts texts texts.',
  },
]
</script>

<template>
  <section class="text-gray-600 dark:text-gray-300">
    <div class="mx-auto w-full max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="mb-20 space-y-4 px-6 md:px-0">
        <h2 class="text-center text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">一些用户和开发者的评价</h2>
      </div>
      <div class="feedback-list space-y-8">
        <div
          v-for="feedback in feedbacks"
          :key="feedback.id"
          class="feedback-card rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
        >
          <div class="flex gap-4">
            <img
              class="h-12 w-12 rounded-full"
              :src="feedback.avatar"
              :alt="feedback.avatarAlt"
              loading="lazy"
              draggable="false"
            />
            <div>
              <h6 class="text-lg font-medium text-gray-700 dark:text-white">{{ feedback.name }}</h6>
              <p class="text-sm text-gray-500 dark:text-gray-300">{{ feedback.position }}</p>
            </div>
          </div>
          <p class="mt-4">{{ feedback.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feedback-list {
  column-gap: 2rem;
}

.feedback-card {
  break-inside: avoid;
}

@media (min-width: 610px) {
  .feedback-list {
    column-count: 2;
  }
}

@media (min-width: 880px) {
  .feedback-list {
    column-count: 3;
  }
}
</style>
