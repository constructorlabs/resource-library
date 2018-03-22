import { combineReducers } from 'redux';
import input from './input';
import submitBookmark from './submitBookmark';

export default combineReducers({
  input,
  bookmarks: submitBookmark,
});
