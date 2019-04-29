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
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
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
