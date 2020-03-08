import { mount } from '@vue/test-utils';
import Vuex from 'vuex';

import Home from '../src/views/Home';

describe('Home', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(Home);
  });
  test('should render the content', () => {
    expect(wrapper.find('#home p').text()).toBe('Home');
  });
});
