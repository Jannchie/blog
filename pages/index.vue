<template>
  <div class="container">
    <div>
      <Logo />
      <div>
        <div class="font-xs tracking-widest font-serif text-gray-400">
          Not all who wander are lost
        </div>
        <h1
          class="mt-0 text-3xl text-gray-800 tracking-widest font-bold font-serif"
        >
          Jannchie's Blog
        </h1>
      </div>
      <div>
        <div class="mt-6 mb-4">
          <div class="text-sm text-gray-800 font-serif">Recent Articles</div>
          <div class="text-3xl font-serif text-gray-800">最近文章</div>
        </div>
        <nuxt-link
          v-for="article in articles"
          :key="article.title"
          :to="`articles${article.path}`"
        >
          <div class="mb-3 text-gray-800">
            <div class="text-xl font-medium font-serif tracking-wider">
              {{ article.title ? article.title : article.slug }}
            </div>
            <div
              class="text-xs text-gray-600 tracking-widest divide-x divide-gray-400"
            >
              <span>
                {{ moment(article.updatedAt).format('YYYY-MM-DD HH:mm:ss') }}
              </span>
              <span class="px-2">
                {{ moment(article.updatedAt).fromNow() }}
              </span>
            </div>
          </div>
        </nuxt-link>
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
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  methods: {
    moment,
  },
})
</script>
<style lang="postcss" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
