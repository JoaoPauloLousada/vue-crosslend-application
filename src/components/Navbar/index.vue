<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-0">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse h-100 pr-5 border-right" id="navbarSupportedContent">
      <ul class="navbar-nav align-items-center ml-auto h-100">
        <li class="nav-item active h-100 d-flex align-items-center" v-for="item in menu.items" :key="item.id">
          <router-link class="nav-link w-100 h-100 d-flex align-items-center" :to="item.route">{{item.name}}</router-link>
        </li>
      </ul>
    </div>

    <div class="d-none d-md-flex text-light h-100 align-items-center">
      <div class="avatar">
        <img src="@/assets/images/avatar.png" class="rounded-circle h-100" alt="user avatar">
      </div>
      <div class="d-flex flex-column justify-content-center">
        <span>{{user | firstName}}</span>
        <span>{{user | lastName}}</span>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      menu: state => state.ui.menu,
      user: state => state.user.data
    })
  },
  filters: {
    firstName: function (user) {
      if (!user) return ''
      if (!user.profile) return ''
      return user.profile.firstName || ''
    },
    lastName: function (user) {
      if (!user) return ''
      if (!user.profile) return ''
      return user.profile.lastName || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $navbar-height;
  font-size: .75rem;
}
.avatar {
  margin-right: 1.25rem;
  padding-left: 1.875rem;
  height: 36px;
}
.nav-link {
  transition: all 350ms;
  &:hover {
    background-color: white;
    color: map-get($map: $theme-colors, $key: primary) !important;
    border-bottom: 1px solid #ccc;
  }
}
</style>
