import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

import Home from '../src/views/Home';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

import Navbar from '../src/components/Navbar.vue';
localVue.component('navbar', Navbar);

describe('Home', () => {
  let wrapper;
  let actions;
  let state;
  let store;
  let router;
  const edit = jest.fn();
  const testEntries = [
    {_id: {$oid: "5e63f096366fcd78d05a9541"}, firstName: "firstname", lastName: "lastname", phoneNumber: "+32 12 345678"},
    {_id: {$oid: "5e63f096366fcd78d05a9542"}, firstName: "firstname2", lastName: "lastname2", phoneNumber: "+32 12 3456789"}
  ];
  
  beforeEach(() => {
    actions = {
      apiGetPhoneBookEntries: jest.fn()
    };
    state = {
      loading: false,
      alertMsg: null,
      alertType: null,
      phoneBookEntries: testEntries,
    };
    router = {
      push: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      state,
      router
    });
    wrapper = mount(Home, {store, localVue, methods: {edit}});
  });
  test('should call apiGetPhoneBookEntries when search is clicked', () => {
    wrapper.find('.search-btn').trigger('click');
    expect(actions.apiGetPhoneBookEntries).toHaveBeenCalled();
  });
  test('should render the phoneBookEntries', () => {
    expect(wrapper.findAll('.entries div').at(0).find('.first-name').text()).toBe('firstname');
    expect(wrapper.findAll('.entries div').at(0).find('.last-name').text()).toBe('lastname');
    expect(wrapper.findAll('.entries div').at(0).find('.phone-number').text()).toBe('+32 12 345678');

    expect(wrapper.findAll('.entries div').at(1).find('.first-name').text()).toBe('firstname2');
    expect(wrapper.findAll('.entries div').at(1).find('.last-name').text()).toBe('lastname2');
    expect(wrapper.findAll('.entries div').at(1).find('.phone-number').text()).toBe('+32 12 3456789');
  });
  test('should redirect to edit-entry view when edit is clicked', () => {
    wrapper.findAll('.entries div').at(0).find('.edit-btn').trigger('click');
    expect(edit).toHaveBeenCalledWith(testEntries[0]);
    wrapper.findAll('.entries div').at(1).find('.edit-btn').trigger('click');
    expect(edit).toHaveBeenCalledWith(testEntries[1]);
  });
});
