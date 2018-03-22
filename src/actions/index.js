//----ACTIONS

export const updateInput = function(input, name){
  return {
    type: 'UPDATE_INPUT',
    input,
    name
  };
};

export const submitBookmark = function(title, description, url, tags){
  console.log('in actions ', title, description, url, tags);
  return{
    type: 'SUBMIT_BOOKMARK',
    title,
    description,
    url,
    tags
  };
};
