<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
