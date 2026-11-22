<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 py-10 md:px-12 xl:px-6">
      <div :class="['my-8 flex-row-reverse justify-between space-y-6', 'md:flex md:gap-6 md:space-y-0 lg:gap-12']">
        <div class="hidden lg:block lg:w-4/9">
          <img src="/assets/pie.svg" alt="image" loading="lazy" class="w-full" draggable="false" />
        </div>
        <div class="w-full lg:w-5/9">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-sky-500">
            <path
              fill-rule="evenodd"
              d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
              clip-rule="evenodd"
            />
          </svg>
          <h2 class="my-8 text-2xl font-bold text-gray-700 md:text-4xl dark:text-white">我们的组织方式</h2>
          <div class="text-lg text-gray-600 dark:text-gray-300">
            <p class="my-3">
              我们因共同的兴趣与热爱相聚，以项目为纽带自由协作，<br />让每一位成员都能参与讨论、分享想法并发挥所长。
            </p>
            <p class="my-3">
              团队不设繁复的层级与流程，而是在彼此尊重的基础上，<br />明确分工、保持沟通，一起把有趣的想法变成现实。
            </p>
          </div>
          <div class="divide-y divide-gray-100 dark:divide-gray-800">
            <div class="mt-6 flex gap-4 py-4 md:items-center">
              <div class="flex h-12 w-12 gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  class="m-auto h-6 w-6 text-indigo-500 dark:text-indigo-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M416 208c0 97-86 176-192 176-27 0-52-5-75-14l-82 43c-9 5-20 3-28-4-7-7-9-19-4-28l35-67c-24-30-38-66-38-106 0-97 86-176 192-176 106 0 192 79 192 176zm0 368c-94 0-172-62-189-144 120-1 225-87 236-203 83 20 145 89 145 171 0 40-14 76-38 106l35 67c5 9 3 21-4 28-7 8-19 9-28 4l-82-43c-23 9-48 14-75 14z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="w-5/6">
                <h4 class="text-lg font-semibold text-gray-700 dark:text-indigo-300">开放交流</h4>
                <p class="text-gray-500 dark:text-gray-400">平等分享观点，在讨论与协作中共同成长</p>
              </div>
            </div>
            <div class="flex gap-4 py-4 md:items-center">
              <div class="flex h-12 w-12 gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  class="m-auto h-6 w-6 text-teal-600 dark:text-teal-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M560 128c13 0 21 15 13 26l-29 38 0 176c0 80-65 144-144 144l-112 0-46 46c-10 10-27 12-39 5l-97-58c-17-10-15-36 3-43l115-46c-136-41-153-182-138-256 4-18 23-24 39-16l259 144 0-80c0-44 36-80 80-80l96 0zm-96 56c-13 0-24 11-24 24 0 13 11 24 24 24 13 0 24-11 24-24 0-13-11-24-24-24zm-218-130c12-14 33-9 43 7l56 98c-6 14-9 30-9 47l-134-74c10-32 27-58 44-78z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="w-5/6">
                <h4 class="text-lg font-semibold text-gray-700 dark:text-teal-300">自由协作</h4>
                <p class="text-gray-500 dark:text-gray-400">围绕兴趣参与项目，用各自所长推动想法落地</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
