import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import EditEntry from '../views/EditEntry';
import AddEntry from '../views/AddEntry';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/edit-entry/:id',
      name: 'EditEntry',
      component: EditEntry,
      props: true
    },
    {
      path: '/add-entry/',
      name: 'AddEntry',
      component: AddEntry
    }
  ]
});
