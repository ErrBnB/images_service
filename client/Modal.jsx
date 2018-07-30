import React from 'react';
import ListView from './ListView.jsx';

class Modal extends React.Component {
  render() {
    return (
      <div id="photo-modal">
        <div id="modal-image">
          <button id="close-photo-modal" onClick={this.props.clickViewPhotoBtn}>Close</button>
          <img src={this.props.currentImage} width="100%" height="100%" />
        </div>
      </div>
    )
  }
}

export default Modal;
