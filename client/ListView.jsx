import React from 'react';
import ListEntry from './ListEntry.jsx';

class ListView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="list-view">
          <ul>
            {this.props.images.map(image =>
                <ListEntry clickImage={this.props.clickImage} image={image} key={image.id} />
            )}
          </ul>   
      </div>
    )
  }   
};

export default ListView;