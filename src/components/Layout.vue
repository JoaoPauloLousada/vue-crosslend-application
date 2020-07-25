<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>
