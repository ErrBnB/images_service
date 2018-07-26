import React from 'react';
import ListEntry from './ListEntry.jsx';

class ListView extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return(
      <div className="list-view">
        <button className="left-arrow">&#10094;</button>
          <ul>
            {this.props.images.map(image =>
                <ListEntry clickImage={this.props.clickImage} image={image} />
            )}
          </ul>   
        <button className="right-arrow">&#10095;</button> 
      </div>
    )
  }   
};

export default ListView;