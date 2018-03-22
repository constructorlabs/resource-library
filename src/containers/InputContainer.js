import {connect} from 'react-redux';
import {updateInput} from '../actions';
import Input from '../components/Input';

const getInput = (state) => {
  let inputName = state.name;
  return {[inputName] : state[inputName]};
};

const mapStateToProps = function(state){
  return  getInput(state);
};

const mapDispatchToProps = dispatch => ({
  updateInput: (input, name) =>dispatch(updateInput(input, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
