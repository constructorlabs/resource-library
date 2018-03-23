import React from 'react';
import PropTypes from 'prop-types';


class Input extends React.Component{

  render(){
    return (
      <div>
        <form
          className='bookmark-input-form'
          onSubmit={(event) => {
            event.preventDefault();
            return this.props.submitBookmark(
              this.props.title,
              this.props.description,
              this.props.url,
              this.props.tags
            );
          }}>
          <label>
            Title
            <input
              type='text'
              id='title'
              name='title'
              value={this.props.title}
              onChange={(event) => {
                event.preventDefault();
                return this.props.updateInput(event.target.value, event.target.name);
              }}
            />
          </label>
          <br />
          <label>
            Description
            <textarea
              id='description'
              name='description'
              value={this.props.description}
              onChange={(event) => {
                event.preventDefault();
                return this.props.updateInput(event.target.value, event.target.name);
              }} />
          </label>
          <br />
          <label>
            URL
            <input
              type='url'
              id='url'
              name='url'
              value={this.props.url}
              onChange={(event) => {
                event.preventDefault();
                return this.props.updateInput(event.target.value, event.target.name);
              }}/>
          </label>
          <br />
          <label>
            Tags (comma separated)
            <input
              type='text'
              id='tags'
              name='tags'
              value={this.props.tags}
              onChange={(event) => {
                event.preventDefault();
                return this.props.updateInput(event.target.value, event.target.name);
              }}/>
          </label>
          <br />
          <button
            className='submit-btn'
            type='submit'
            >Save to bookmarks</button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  tags: PropTypes.string,
  updateInput : PropTypes.func,
  submitBookmark: PropTypes.func
};

export default Input;
