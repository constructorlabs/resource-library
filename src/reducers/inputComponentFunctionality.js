const imputComponentFunctionality = (state = {
  title: '',
  description: '',
  url: '',
  tags: '',
  name: '',
  bookmarks: []
}, action) => {
  switch (action.type){
    case 'UPDATE_INPUT':
      return Object.assign({}, state, {
        [action.name] : action.input,
        name: action.name
      });
    case 'SUBMIT_BOOKMARK':
      return Object.assign({}, state, {
        bookmarks : state.bookmarks.concat({
          title: action.title,
          description: action.description,
          url: action.url,
          tags: action.tags
        }),
        title: '',
        description: '',
        url: '',
        tags: '',
        name: ''
      });
    default:
      return state;
  }
};

export default imputComponentFunctionality;
