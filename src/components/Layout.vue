<template>
  <div class="vh-100 d-flex flex-column">
    <Navbar />
    <Spinner :show="isLoading" />
    <div class="container-fluid content">
      <div class="row" v-show="!isLoading">
        <div class="col">
          <slot></slot>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './Navbar'
import Footer from './Footer'
import Spinner from './Spinner'

export default {
  components: {
    Navbar,
    Footer,
    Spinner
  },
  computed: {
    ...mapState({
      isLoading: state => state.ui.isLoading
    })
  }
}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
}
</style>
