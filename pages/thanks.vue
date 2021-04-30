<template>
  <div>
    <h2>谢辞</h2>
    <p>该博客使用了以下优秀的技术。对下列项目的公开和提供深表感谢。</p>
    <li>Vue.js 视图框架使得快速开发可复用的 Web 项目成为可能。</li>
    <li>
      Nuxt.js 做了一系列基础设施工作，让我能够专注业务的同时贯彻最佳实践。
    </li>
    <li>Tailwindcss 使我不必在诡异的 CSS 调试中迷茫太久。</li>
    <li>Font awesome 提供了美观的小图标。</li>
    还要感谢饼饼在生活上对我的帮助和鼓励。 最后还有你的支持。
  </div>
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
