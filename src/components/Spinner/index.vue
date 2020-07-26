<template>
  <div class="w-100 mt-5 pt-5" :class="{'d-none': !show}">
    <div class="spinner-border d-block mx-auto" style="width: 3rem; height: 3rem;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
