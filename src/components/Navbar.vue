<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="i"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            @click="onLogout"
            v-if="isUserLoggedIn"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link :to="'/'">
          Online Store
          </router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
            flat
            v-for="link in links"
            :key="i"
            :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
            flat
            @click="onLogout"
            v-if="isUserLoggedIn"
        >
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        sideNav: false
      }
    },

    methods: {
      onLogout () {
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      }
    },

    computed: {

      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn

      },

      links () {
        if (this.isUserLoggedIn) {
          return [
            {
              title: 'Home',
              icon: 'home',
              url: '/'
            },
            {
              title: 'Cart',
              icon: 'shopping_cart',
              url: '/checkout'
            },
            {
              title: 'New Product',
              icon: 'add',
              url: '/new'
            },

            {
              title: 'My Products',
              icon: 'list',
              url: '/list'
            }
          ]
        }

        return [
          {
            title: 'Login',
            icon: 'account_box',
            url: '/login'
          },
          {
            title: 'Register',
            icon: 'face',
            url: '/register'
          }
        ]
      }

    }

  }
</script>

<style>
  .v-toolbar__title a {
    cursor: pointer;
    color: black;
    text-decoration: none !important;
  }
</style>