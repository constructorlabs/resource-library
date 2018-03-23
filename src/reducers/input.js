const input = (state = {
  title: '',
  description: '',
  url: '',
  tags: '',
  name: ''
}, action) => {
  console.log(action);
  switch (action.type){
    case 'UPDATE_INPUT':
      return Object.assign({}, state, {
        [action.name] : action.input,
        name: action.name
      });
    default:
      return state;
  }
};

export default input;
