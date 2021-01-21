import { mount } from '@vue/test-utils';
import BaseNotification from '@/components/BaseNotification.vue';

describe('BaseNotification.vue', () => {
  it('renders when props.showNotification is passed as true', () => {
    const showNotification = true;
    const wrapper = mount(BaseNotification, {
      propsData: { showNotification },
    });
    expect(wrapper.classes()).toContain('notification--open');
  });
});
