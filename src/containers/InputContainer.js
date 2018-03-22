import {connect} from 'react-redux';
import {updateInput, submitBookmark} from '../actions';
import Input from '../components/Input';

const getInput = (state) => {
  return state.input;
};

const mapStateToProps = function(state){
  return getInput(state);
};

// const clearInput = function(state){
//   state.name = '',
//   state.description = '',
//   state.url = '',
//   state.tags = ''
// }

const mapDispatchToProps = dispatch => ({
  updateInput: (input, name) =>dispatch(updateInput(input, name)),
  submitBookmark: (title, description, url, tags) => dispatch(submitBookmark(title, description, url, tags))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
