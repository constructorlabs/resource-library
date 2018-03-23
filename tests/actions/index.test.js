import * as actions from '../../src/actions';

describe('actions', () => {
  it('should update TITLE input', () => {
    const input = 'I love to code';
    const name = 'title';
    const expectedOutcome = {
      type: 'UPDATE_INPUT',
      input: 'I love to code',
      name: 'title',
    }
    expect(actions.updateInput(input,name)).toEqual(expectedOutcome);
  })
})

describe('actions', () => {
  it('should update DESCRIPTION input', () => {
    const input = 'Attitude to code';
    const name = 'description';
    const expectedOutcome = {
      type: 'UPDATE_INPUT',
      input: 'Attitude to code',
      name: 'description',
    }
    expect(actions.updateInput(input,name)).toEqual(expectedOutcome);
  })
})

describe('actions', () => {
  it('should update URL input', () => {
    const input = 'http://www.google.com';
    const name = 'url';
    const expectedOutcome = {
      type: 'UPDATE_INPUT',
      input: 'http://www.google.com',
      name: 'url',
    }
    expect(actions.updateInput(input,name)).toEqual(expectedOutcome);
  })
})

describe('actions', () => {
  it('should update TAGS input', () => {
    const input = 'code, love, feelings';
    const name = 'tags';
    const expectedOutcome = {
      type: 'UPDATE_INPUT',
      input: 'code, love, feelings',
      name: 'tags',
    }
    expect(actions.updateInput(input,name)).toEqual(expectedOutcome);
  })
})

describe('actions', () => {
  it('should submit bookmark', () => {
    const expectedOutcome = {
      type: 'SUBMIT_BOOKMARK',
      title: 'I love to code',
      description: 'Attitude to code',
      url: 'http://www.google.com',
      tags: 'code, love, feelings'
    }
    expect(actions.submitBookmark(
      'I love to code',
      'Attitude to code',
      'http://www.google.com',
      'code, love, feelings'
    )).toEqual(expectedOutcome);
  })
})
