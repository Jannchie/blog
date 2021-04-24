<template>
  <div class="flex flex-col mx-2">
    <h1 class="mt-3">{{ article.title ? article.title : article.slug }}</h1>
    <p class="mt-0 mb-2 text-xs text-center text-gray-600">
      Last updated: {{ moment(article.updatedAt).fromNow() }}
    </p>
    <article
      class="flex self-center prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    >
      <nuxt-content :document="article" />
    </article>
    <nuxt-link
      class="self-center my-1 py-2 px-3 tracking-widest uppercase"
      to="/"
    >
      Go Home
    </nuxt-link>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.pathMatch, { deep: true }).fetch()
    return { article }
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
