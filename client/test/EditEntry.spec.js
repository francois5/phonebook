import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

import EditEntry from '../src/views/EditEntry';

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
  const testEntries = [
    {_id: {$oid: "5e63f096366fcd78d05a9541"}, firstName: "firstname", lastName: "lastname", phoneNumber: "+32 12 345678"},
    {_id: {$oid: "5e63f096366fcd78d05a9542"}, firstName: "firstname2", lastName: "lastname2", phoneNumber: "+32 12 3456789"}
  ];
  
  beforeEach(() => {
    actions = {
      apiPutPhoneBookEntry: jest.fn()
    };
    state = {
      loading: false,
      alertMsg: null,
      alertType: null,
      phoneBookEntries: testEntries,
    };
    store = new Vuex.Store({
      actions,
      state
    });
    wrapper = mount(EditEntry, {
      store,
      localVue,
      propsData: {id: '5e63f096366fcd78d05a9542'}
    });
  });

  test('inputs data should be set with requested entry data', () => {
    expect(wrapper.vm.firstNameInput).toBe('firstname2');
    expect(wrapper.vm.lastNameInput).toBe('lastname2');
    expect(wrapper.vm.phoneNumberInput).toBe('+32 12 3456789');
  });
  
  test('should call apiPutPhoneBookEntry when submit is clicked', () => {
    wrapper.find('.submit-btn').trigger('click');
    expect(actions.apiPutPhoneBookEntry).toHaveBeenCalled();
  });
});
