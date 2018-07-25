import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView.jsx';
import sampledata from './sampledata.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: sampledata.images
    };  
  }  

  render(){
    return(
      <div>
        <ListView images={this.state.images} />
      </div>
    )
  }     
}

ReactDOM.render(<App />, document.getElementById('app'));