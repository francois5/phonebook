import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Home from '../src/views/Home';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home', () => {
  let wrapper;
  let actions;
  let state;
  let store;
  
  beforeEach(() => {
    actions = {
      apiGetPhoneBookEntries: jest.fn()
    };
    state = {
      loading: false,
      alertMsg: null,
      alertType: null,
      phoneBookEntries: [
        {_id: {$oid: "5e63f096366fcd78d05a9542"}, firstName: "firstname", lastName: "lastname", phoneNumber: "+32 12 3456789"}
      ],
    };
    store = new Vuex.Store({
      actions,
      state
    });
    wrapper = mount(Home, {store, localVue});
  });
  test('should call apiGetPhoneBookEntries', () => {
    expect(actions.apiGetPhoneBookEntries).toHaveBeenCalled();
  });
  test('should render the phoneBookEntries', () => {
    expect(wrapper.find('.entries div:first-of-type').text()).toBe('firstname lastname +32 12 3456789');
  });
});
