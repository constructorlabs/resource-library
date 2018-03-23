import inputComponentFunctionality from '../../src/reducers/inputComponentFunctionality';

describe('inputComponentFunctionality reducer', () => {
  it('should return the initial state', () => {
    expect(inputComponentFunctionality(undefined, {type: 'REMOVE_BUGS'})).toEqual(
      {
        title: '',
        description: '',
        url: '',
        tags: '',
        name: '',
        bookmarks: []
      }
    )
  });

  it('should handle SUBMIT_BOOKMARK', () => {
    const preState = {
      title: 'I love to code',
      description: 'Attitude to code',
      url: 'http://www.google.com',
      tags: 'code, love, feelings',
      bookmarks: []
    };

    const action = {
      type: 'SUBMIT_BOOKMARK',
      title: 'I love to code',
      description: 'Attitude to code',
      url: 'http://www.google.com',
      tags: 'code, love, feelings'
    };

    const desiredOutput = {
      bookmarks: [
        {
          title: 'I love to code',
          description: 'Attitude to code',
          url: 'http://www.google.com',
          tags: 'code, love, feelings'
        }
      ],
      title: '',
      description: '',
      url: '',
      tags: '',
      name: '',
    }

    expect(inputComponentFunctionality(preState, action)).toEqual(desiredOutput);
  })

  it('should handle UPDATE_INPUT', () => {
    const preState = {
      title: '',
      description: '',
      url: '',
      tags: '',
      name: '',
      bookmarks: []
    }

    const incomingAction = {
      type: 'UPDATE_INPUT',
      input: 'I love to code',
      name: 'title'
    };

    const desiredOutput = {
      title: 'I love to code',
      description: '',
      url: '',
      tags: '',
      name: 'title',
      bookmarks: []
    }
  })


  it('should handle default switch case', () => {
    const preState = {
      title: 'I love to code',
      description: 'Attitude to code',
      url: 'http://www.google.com',
      tags: 'code, love, feelings',
      bookmarks: []
    };

    const desiredOutput = {
      title: 'I love to code',
      description: 'Attitude to code',
      url: 'http://www.google.com',
      tags: 'code, love, feelings',
      bookmarks: []
    }

    expect(inputComponentFunctionality(preState, {
      type: 'SOME_OTHER_TYPE'
    })).toEqual(desiredOutput);
  })



})
