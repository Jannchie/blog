<template>
  <NuxtLink :to="to">
    <div class="group">
      <div class="text-sm">{{ subTitle }}</div>
      <div class="text-xl">{{ title }}</div>
      <div
        class="w-0 h-0.5 group-hover:w-full bg-black transform self-center duration-300"
      ></div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    to: { type: String, default: '' },
  },
}
</script>
