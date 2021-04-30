<template>
  <NuxtContent :document="article" />
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
