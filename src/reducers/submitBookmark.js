const submitBookmark = (state = [], action) => {
  switch (action.type){
    case 'SUBMIT_BOOKMARK':
      let outputState = [].concat(state);
      outputState.push({
        title: action.title,
        description: action.description,
        url: action.url,
        tags: action.tags
      });
      return outputState;
    default:
      return state;
  }
};

export default submitBookmark;
