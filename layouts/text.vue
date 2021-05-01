<template>
  <div class="flex flex-col mx-2">
    <BlogTitle /> <BlogNav />
    <article
      class="mt-3 self-center prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    >
      <Nuxt />
    </article>
    <BlogFooter />
  </div>
</template>
