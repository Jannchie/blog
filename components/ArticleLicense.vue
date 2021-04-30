<template>
  <div class="my-4 flex justify-center border-gray-400 border-t border-b">
    <div class="mr-2">
      <i class="fas fa-balance-scale"></i>
    </div>
    <div>
      <b v-if="!xs">
        Creative Commons Attribution Share Alike 4.0 International
      </b>
      <b v-else> CC BY-SA 4.0</b>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    xs() {
      if (process.client) {
        return window.innerWidth < 600
      }
      return false
    },
  },
}
</script>
