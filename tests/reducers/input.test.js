import input from '../../src/reducers/input';

describe('input reducer', () => {
  it('should return the initial state', () => {
    expect(input(undefined, {type: 'REMOVE_BUGS'})).toEqual({
      title: '',
      description: '',
      url: '',
      tags: '',
      name: ''
    })
  })

  it('should handle UPDATE_INPUT', () => {
    expect(input({
      title: '',
      description: '',
      url: '',
      tags: '',
      name: ''
    }, {
      type: 'UPDATE_INPUT',
      input: 'I love to code',
      name: 'title'
    })).toEqual({
      title: 'I love to code',
      description: '',
      url: '',
      tags: '',
      name: 'title'
    })
  })

  it('should handle default switch case', () => {
    expect(input({
      title: 'Hello',
      description: '',
      url: '',
      tags: '',
      name: ''
    }, {
      type: 'NOT_UPDATE_INPUT',
      title: 'I love to code',
      description: '',
      url: '',
      tags: '',
      name: 'title'
    })).toEqual(
      {
        title: 'Hello',
        description: '',
        url: '',
        tags: '',
        name: ''}
    )
  })
})
