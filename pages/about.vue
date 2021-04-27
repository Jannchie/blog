<template>
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <NuxtContent :document="article" />
  </article>
</template>

<script>
export default {
  layout: 'text',
  async asyncData({ $content }) {
    const article = await $content(`/README`).fetch()
    return { article }
  },
}
</script>
