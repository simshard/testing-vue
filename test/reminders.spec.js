import {mount} from '@vue/test-utils';
import expect from 'expect';
 import Reminders from '../src/components/Reminders.vue';

 describe ('Reminders', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = mount(Reminders);
     });

     it ('hides the reminders list if there are none', () => {
        expect(wrapper.contains('ul')).toBe(false);
    });

    it ('can add reminders', () => {
       addReminder('remember the thing');
       expect(remindersList()).toContain('remember the thing');
    });

    it ('can remove any reminder', () => {
        addReminder('remember the thing');
        addReminder('Finish this');
        let deleteButton = wrapper.find('ul > li:first-child .remove');
        deleteButton.trigger('click');
        expect(remindersList()).not.toContain('remember the thing');
        expect(remindersList()).toContain('Finish this');
    });

    function addReminder(body) {
        let newReminder = wrapper.find('.new-reminder');
        newReminder.element.value = body;
        newReminder.trigger('input');
        wrapper.find('button').trigger('click');
    }
    function remindersList() {
        return wrapper.find('ul').text();
    }
});
