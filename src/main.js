import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import * as firebase from "firebase";

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyAH0bX9JSb-vqVBFqcihPNWHLIC1dQJD8c",
  authDomain: "sheet-views.firebaseapp.com",
  databaseURL: "https://sheet-views.firebaseio.com",
  projectId: "sheet-views",
  storageBucket: "sheet-views.appspot.com",
  messagingSenderId: "91064575236",
  appId: "1:91064575236:web:1dfe3a2a38630b2c41dc51",
  measurementId: "G-X6VGRLY9HN"
};
new Vue({
  vuetify,
  router,
  store,
  created(){
    firebase.initializeApp(firebaseConfig);
  },
  render: h => h(App)
}).$mount('#app')
