<template>
  <div>
    <Navbar />
    <Spinner :show="isLoading" />
    <div class="container-fluid" v-show="!isLoading">
      <div class="row">
        <div class="col">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './Navbar'
import Spinner from './Spinner'

export default {
  components: {
    Navbar,
    Spinner
  },
  computed: {
    ...mapState({
      isLoading: state => state.ui.isLoading
    })
  }
}
</script>

<style>

</style>
