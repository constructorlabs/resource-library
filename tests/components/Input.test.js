import React from 'react';
import Input from '../../src/components/Input';
import {shallow} from 'enzyme';

describe('Input component', () => {
  it('should update state.bookmarks accordingly', () => {
    const mockSubmitBookmark = jest.fn();

    const wrapper = shallow(<Input
      submitBookmark={mockSubmitBookmark}
      title='I love to code'
      description='Attitude to code'
      url='http://www.google.com'
      tags='code, love, feelings'
    />); // makes shallow copy
    const fakeEvent = {preventDefault: jest.fn()}
    const simulateSubmit = wrapper.find('.bookmark-input-form').simulate('submit', fakeEvent);
    expect(mockSubmitBookmark.mock.calls).toEqual([ [
      'I love to code',
      'Attitude to code',
      'http://www.google.com',
      'code, love, feelings'
    ] ]);
  })
})
