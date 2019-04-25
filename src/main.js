import Vue from 'vue'
import './plugins/vuetify'
import BuyDialogComponent from './components/BuyDialog.vue'
import App from './App.vue'
import router from './router/index.js'
import * as fb from 'firebase/app'
import store from './store'

Vue.component('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  created () {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBb8qvjg-0_au6NJY8JLZUwHSR2HjNoe9Y",
      authDomain: "online-store-c3113.firebaseapp.com",
      databaseURL: "https://online-store-c3113.firebaseio.com",
      projectId: "online-store-c3113",
      storageBucket: "online-store-c3113.appspot.com",
      messagingSenderId: "712317793482"
    };
    fb.initializeApp(config);

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchProducts')
  }
}).$mount('#app');
