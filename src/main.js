import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyBU7vV4j_MKruSO2mfgYTiiFvgq2QgwnEY",
  authDomain: "my-address-pj-6725f.firebaseapp.com",
  databaseURL: "https://my-address-pj-6725f.firebaseio.com",
  projectId: "my-address-pj-6725f",
  storageBucket: "my-address-pj-6725f.appspot.com",
  messagingSenderId: "1070387720152",
  appId: "1:1070387720152:web:76145fe2d581e911610cad",
  measurementId: "G-DX59NJBVSF"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
