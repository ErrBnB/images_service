import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView.jsx';
import ImagePopUp from './ImagePopUp.jsx';
import sampledata from './sampledata.js';
import $ from 'jQuery'; 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: sampledata.images,
      currentImage: ''
    };  
    this.clickImage = this.clickImage.bind(this);
  }  

  componentDidMount(){
    const contextScope = this;
    $.get("http://localhost:3000/images")
      .done((data) => {
        contextScope.setState({
          images: data,
          currentImage: data[0].url
        })
      });
  }

  clickImage(e){
    this.setState ({
      currentImage: e.target.src
    })
  }
  
  render(){
    return(
      <div>
        <img className="main-page-view" src={this.state.currentImage} />
        <ListView clickImage={this.clickImage} images={this.state.images} />
      </div>
    )
  }     
}

ReactDOM.render(<App />, document.getElementById('app'));