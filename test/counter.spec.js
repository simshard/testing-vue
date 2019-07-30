import {mount} from '@vue/test-utils';
import Counter from '../src/components/counter.vue';
import expect from 'expect';




describe('Counter',()=>{
   let wrapper;
   beforeEach(() => {
           wrapper = mount(Counter);
          // console.log(wrapper);
       });

  it ('defaults to a count of zero',()=>{
    let wrapper=mount(Counter);
    expect(wrapper.vm.count).toBe(0);
  });


    it ('increments the count when the increment button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.increment').trigger('click');

        expect(wrapper.vm.count).toBe(1);
    });

    it ('decrements the count when the decrement button is clicked', () => {
         wrapper.setData({ count: 5 });

        wrapper.find('.decrement').trigger('click');

        expect(wrapper.vm.count).toBe(4);
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);

        wrapper.find('button').trigger('click');

        expect(wrapper.find('.count').html()).toContain(1);
    });

    it ('never goes below 0', () => {
       //expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true);
       expect(wrapper.find('.decrement').isVisible()).toBe(false);
       wrapper.setData({ count: 1 });

    //   expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false);
        expect(wrapper.find('.decrement').isVisible()).toBe(true);

   });

});
