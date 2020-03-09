import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

import AddEntry from '../src/views/AddEntry';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

import Navbar from '../src/components/Navbar.vue';
localVue.component('navbar', Navbar);

describe('Home', () => {
  let wrapper;
  let actions;
  let state;
  let dispatch = jest.fn();
  let store;
  
  beforeEach(() => {
    actions = {
      apiPostPhoneBookEntry: jest.fn()
    };
    state = {
      loading: false,
      alertMsg: null,
      alertType: null
    };
    store = new Vuex.Store({
      actions,
      state
    });
    store.dispatch = jest.fn();
    wrapper = mount(AddEntry, { store, localVue });
  });

  test('should be able to fill inputs and change component data', () => {
    const inputFirstName = wrapper.find('#input-first-name');
    const inputLastName = wrapper.find('#input-last-name');
    const inputPhoneNumber = wrapper.find('#input-phone-number');

    inputFirstName.element.value = 'firstname2';
    inputLastName.element.value = 'lastname2';
    inputPhoneNumber.element.value = '+32 12 3456789';
    
    inputFirstName.trigger('change');
    inputLastName.trigger('change');
    inputPhoneNumber.trigger('change');
    
    expect(wrapper.vm.firstNameInput).toBe('firstname2');
    expect(wrapper.vm.lastNameInput).toBe('lastname2');
    expect(wrapper.vm.phoneNumberInput).toBe('+32 12 3456789');
  });

  test('should call apiPostPhoneBookEntry with the right data when submit is clicked', () => {
    wrapper.vm.firstNameInput = 'test firstname';
    wrapper.vm.lastNameInput = 'test lastname';
    wrapper.vm.phoneNumberInput = '+32 44 444444';
    
    wrapper.find('.submit-btn').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith(
      'apiPostPhoneBookEntry',
      { firstName: 'test firstname', lastName: 'test lastname', phoneNumber: '+32 44 444444' }
    );
  });
});

