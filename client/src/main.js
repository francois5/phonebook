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
    phoneBookEntries: [],
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
    apiGetPhoneBookEntries({ commit }, data) {
      const that = this;
      that.commit('startLoading');
      axios.get(API_ROOT+'phone-book-entries.php?'+new URLSearchParams(data).toString())
        .then(function(res) {
          that.state.phoneBookEntries = res.data;
          that.commit('stopLoading');
          that.dispatch('alert', { msg: 'Success', type: 'success' });
        })
        .catch(function (err) {
          console.log(err);
          that.commit('stopLoading');
          that.dispatch('alert', { msg: 'Error', type: 'danger' });
        });
    },
    apiPostPhoneBookEntries({ commit }, data) {
      const that = this;
      that.commit('startLoading');
      axios.post(API_ROOT+'phone-book-entries.php', data, {headers: {"Content-Type": "application/json"}})
        .then(function(res) {
          that.commit('stopLoading');
          that.dispatch('alert', { msg: 'Success', type: 'success' });
        })
        .catch(function (err) {
          console.log(err);
          that.commit('stopLoading');
          that.dispatch('alert', { msg: 'Error', type: 'danger' });
        });
    },
    apiPutPhoneBookEntries({ commit }, data) {
      const that = this;
      that.commit('startLoading');
      axios.put(API_ROOT+'phone-book-entries.php', data, {headers: {"Content-Type": "application/json"}})
        .then(function(res) {
          that.commit('stopLoading');
          that.dispatch('alert', { msg: 'Success', type: 'success' });
        })
        .catch(function (err) {
          console.log(err);
          that.commit('stopLoading');
          that.dispatch('alert', { msg: 'Error', type: 'danger' });
        });
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
