import React from 'react';
import ListView from './ListView.jsx';

class ImagePopUp extends React.Component {
  constructor(props){
    super(props);
  }  

  render(){
    return(
      <div className="pop-up-images">
        <ListView clickImage={this.props.clickImage} images={this.props.images} />
      </div>
    )
  }
};

export default ImagePopUp;  