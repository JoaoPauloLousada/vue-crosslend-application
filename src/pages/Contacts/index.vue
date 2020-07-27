<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center font-weight-bold">Contacts Page</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  created () {
    if (!this.user.data) {
      this.getUserData()
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  methods: {
    ...mapActions({
      getUserData: 'getUserData'
    })
  }
}
</script>

<style>

</style>
