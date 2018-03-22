// export const updateInput = input => ({
//   type: 'UPDATE_INPUT',
//   input
// });


export const updateInput = function(input, name){
  return {
    type: 'UPDATE_INPUT',
    input,
    name
  };
};
