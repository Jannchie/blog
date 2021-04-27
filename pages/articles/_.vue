<template>
  <div class="flex flex-col mx-2">
    <h1 class="mt-3 mb-2 font-bold text-3xl sm:text-4xl lg:text-5xl">
      {{ article.title ? article.title : article.slug }}
    </h1>
    <p class="mt-0 mb-2 text-xs text-center text-gray-600">
      上次更新 {{ moment(article.updatedAt).fromNow() }}
    </p>
    <article
      class="self-center prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    >
      <NuxtContent :document="article" />
      <ArticleLicense />
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xs text-gray-600">上一篇</div>
          <NuxtLink v-if="prev" :to="`/articles${prev.path}`">
            {{ prev.title ? prev.title : prev.slug }}
          </NuxtLink>
          <div v-else>没有了</div>
        </div>
        <div class="text-right">
          <div class="text-xs text-gray-600">下一篇</div>
          <NuxtLink v-if="next" :to="`/articles${next.path}`">
            {{ next.title ? next.title : next.slug }}
          </NuxtLink>
          <div v-else>没有了</div>
        </div>
      </div>
    </article>
    <NuxtLink
      class="self-center my-1 py-2 px-3 font-bold tracking-widest uppercase font-serif underline"
      to="/"
    >
      回到首页
    </NuxtLink>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  async asyncData({ $content, params }) {
    const path = params.pathMatch
    const article = await $content(path).fetch()
    const tags = article.tags ? article.tags.replace(/\s/g, '').split(',') : []
    const [prev, next] = await $content('/', { deep: true })
      .only(['title', 'slug', 'path'])
      .sortBy('createdAt', 'asc')
      .surround(article.path)
      .fetch()
    return { article, path, prev, next, tags }
  },
  methods: {
    moment,
  },
}
</script>
<style lang="postcss">
p {
  @apply text-base diagonal-fractions my-1;
}
h1 {
  @apply mt-3 text-2xl font-serif font-bold text-center;
}
h2 {
  @apply mt-3 text-xl font-serif font-bold;
}
h3 {
  @apply mt-3 text-lg font-serif font-bold;
}
.shiki {
  @apply px-3 py-2 rounded-lg my-3;
}
</style>
