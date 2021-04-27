<template>
  <div class="flex justify-center text-center uppercase items-center">
    <svg width="50px" height="2px">
      <rect width="50px" height="2px" color="#333"></rect>
    </svg>
    <NavItem class="nav-item" title="主页" sub-title="Home" to="/" />
    <svg width="10px" height="10px">
      <rect width="10px" height="10px" color="#333"></rect>
    </svg>
    <NavItem class="nav-item" title="关于" sub-title="About" to="/about" />
    <svg width="10px" height="10px">
      <rect width="10px" height="10px" color="#333"></rect>
    </svg>
    <NavItem class="nav-item" title="鸣谢" sub-title="Thanks" to="/thanks" />
    <svg width="50px" height="2px">
      <rect width="50px" height="2px" color="#333"></rect>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.nav-item {
  @apply my-2 mx-3 w-16 hover:mx-6 transform duration-300;
}
</style>
