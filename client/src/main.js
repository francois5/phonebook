import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App';
import router from './router';

const API_ROOT = 'http://localhost/api/';

Vue.use(Vuex);
Vue.use(BootstrapVue);

import Navbar from './components/Navbar.vue';
Vue.component('navbar', Navbar);

const store = new Vuex.Store({
  state: {
    loading: true,
    alertMsg: null,
    alertType: null,
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    hideAlert(state) {
      state.alertMsg = null;
      state.alertType = null;
    },
  },
  actions: {
    alert({ commit }, data) {
      this.state.alertMsg = data.msg;
      this.state.alertType = data.type;
      const that = this;
      const time = (data.time ? data.time : 2250);
      setTimeout(function() {
        that.commit('hideAlert');
      }, time);
    },
  }
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
