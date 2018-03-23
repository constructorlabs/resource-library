import {connect} from 'react-redux';
import {submitBookmark} from '../actions';
import BookmarkLibrary from '../components/BookmarkLibrary';

const getBookmarks = (state) => {
  console.log(state);
  return {bookmarks: state.bookmarks};
};

const mapStateToProps = function(state){
  return getBookmarks(state);
};

export default connect(
  mapStateToProps
)(BookmarkLibrary);
