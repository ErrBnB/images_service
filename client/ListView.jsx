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
                  <ListEntry image={image} />
              )}
          </ul>    
        </div>
      )
  }   
};

export default ListView;