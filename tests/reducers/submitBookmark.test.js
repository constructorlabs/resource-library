import submitBookmark from '../../src/reducers/submitBookmark';

describe('submitBookmark reducer', () => {
  it('should return the initial state', () => {
    expect(submitBookmark(undefined, {type: 'REMOVE_BUGS'})).toEqual([])
  })

  it('should handle SUBMIT_BOOKMARK', () => {
    expect(submitBookmark([], {
      type: 'SUBMIT_BOOKMARK',
      title: 'I love to code',
      description: 'Attitude to code',
      url: 'http://www.google.com',
      tags: 'code, love, feelings'
    })).toEqual([
      {
        title: 'I love to code',
        description: 'Attitude to code',
        url: 'http://www.google.com',
        tags: 'code, love, feelings'
      }
    ])
  })

  it('should handle default switch case', () => {
    expect(submitBookmark([], {
      type: 'NOT_SUBMIT_BOOKMARK',
      title: 'I love to code',
      description: 'Attitude to code',
      url: 'http://www.google.com',
      tags: 'code, love, feelings'
    })).toEqual([]);
  })

})
