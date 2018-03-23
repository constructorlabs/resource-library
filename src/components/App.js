import React from 'react';
import '../styles/components/App.scss';
import InputContainer from '../containers/InputContainer';
import BookmarkLibraryContainer from '../containers/BookmarkLibraryContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <InputContainer />
        <BookmarkLibraryContainer />
      </div>
    );
  }
}

export default App;
