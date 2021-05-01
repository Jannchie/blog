<template>
  <div class="flex min-h-screen flex-col">
    <BlogTitle /> <BlogNav />
    <article
      class="flex-grow mt-3 self-center prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    >
      <Nuxt />
    </article>
    <BlogFooter />
  </div>
</template>
