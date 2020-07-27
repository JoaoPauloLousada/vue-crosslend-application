<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-0">
    <a class="navbar-brand" href="#">
      <img src="@/assets/images/company.svg" alt="company brand">
    </a>
    <button class="navbar-toggler border-0 text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <MenuIcon />
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav align-items-md-center align-items-start justify-content-md-center ml-auto h-100 pr-lg-5 border-right">
        <li class="nav-item active h-100 d-flex align-items-center px-3 px-lg-0" v-for="item in menu.items" :key="item.id">
          <router-link class="nav-link w-100 h-100 d-flex align-items-center" :to="item.route">{{item.name}}</router-link>
        </li>
      </ul>

      <div class="d-flex text-light h-100 align-items-center">
        <div class="avatar d-none d-lg-block">
          <img src="@/assets/images/avatar.png" class="rounded-circle h-100" alt="user avatar">
        </div>
        <div class="name-area d-flex flex-column justify-content-center p-3 p-lg-0">
          <span class="mb-2 mb-lg-0">{{user | firstName}}</span>
          <span>{{user | lastName}}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

export default {
  components: {
    MenuIcon
  },
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
.name-area {
  @include media-breakpoint-down(md) {
    color: $primary;
  }
}
.nav-link {
  transition: all 350ms;
  &:hover {
    background-color: white;
    color: map-get($map: $theme-colors, $key: primary) !important;
    border-bottom: 1px solid #ccc;
  }
}
.navbar-collapse {
  @include media-breakpoint-down(md) {
    @include defaultShadow();
    background-color: $white;
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 10;
    .navbar-nav {
      border-bottom: 1px solid $gray-700;
      .nav-item {
        width: 100%;
        &:hover {
          background-color: $primary;
          .nav-link {
            color: $white;
          }
        }
        .nav-link {
          color: $primary;
          &:hover {
            background-color: inherit;
            color: $white!important;
            border: none;
          }
        }
      }
    }
  }

  @include media-breakpoint-up(lg) {
    height: 100%;
  }
}
</style>
