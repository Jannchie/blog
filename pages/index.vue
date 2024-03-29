<template>
  <div class="container">
    <div>
      <Logo />
      <div>
        <div class="mt-6 mb-4">
          <div class="text-sm text-gray-400 font-serif">Recent Articles</div>
          <div class="text-3xl font-serif font-bold text-gray-800">
            最近文章
          </div>
        </div>
        <div v-for="article in articles" :key="article.title">
          <div class="mb-3 text-gray-800">
            <span
              v-for="path in getPathList(article.path)"
              :key="path"
              class="text-sm tracking-wider text-gray-400 path-item"
            >
              {{ getPathName(path) }}
            </span>
            <span
              v-if="getPathList(article.path).length == 0"
              class="text-sm tracking-wider text-gray-400 path-item"
            >
              未分类
            </span>
            <NuxtLink :to="`articles${article.path}`">
              <div class="text-2xl font-serif hover:underline">
                {{ article.title ? article.title : article.slug }}
              </div>
            </NuxtLink>
            <div
              class="text-sm text-gray-400 tracking-widest divide-x divide-gray-400"
            >
              <span>
                {{ moment(article.updatedAt).format('YYYY-MM-DD HH:mm:ss') }}
              </span>
              <span class="px-2">
                {{ moment(article.updatedAt).fromNow() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('/', { deep: true })
      .where({ slug: { $ne: 'README' } })
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'toc',
        'dir',
        'excerpt',
        'path',
        'updatedAt',
        'createdAt',
      ])
      .sortBy('updatedAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  methods: {
    moment,
    getPathList(path: string) {
      const res = path.split('/')
      res.shift()
      res.pop()
      return res
    },
    getPathName(path: string) {
      switch (path) {
        case 'short-report':
          return '小总结'
        case 'computer-vision':
          return '计算机视觉'
        case 'master-carreer-design':
          return '职业生涯设计'
        case 'research':
          return '研究'
        case 'developer':
          return '开发者'
        case 'draft':
          return '草稿'
      }
      return path
    },
  },
})
</script>
<style lang="postcss" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
.path-item:not(:first-child)::before {
  content: '>';
}
</style>
