<template>
  <nav class="footer container-fluid text-white bg-primary py-2 py-md-0">
    <div class="row h-100">
      <div class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end pr-md-0">
        <span><a href="#" class="text-white">Copyrights</a></span>
        <span class="px-2">|</span>
        <span><a href="#" class="text-white">All rights reserved</a></span>
        <span class="d-none d-md-inline px-2">|</span>
      </div>
      <div class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start pl-md-0">
        <span><a href="#" class="text-white">Imprint</a></span>
        <span class="px-2">|</span>
        <span><a href="#" class="text-white">Terms of use</a></span>
        <span class="px-2">|</span>
        <span><a href="#" class="text-white">Privacy policy</a></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  height: auto;
  font-size: .75rem;
  @include media-breakpoint-up(md) {
    height: 2.5rem;
  }
}
</style>
