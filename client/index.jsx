import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx';
import $ from 'jQuery'; 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: null,
      currentImage: '',
      photoModalOpen: false,
      shareModalOpen: false
    };  
    this.clickImage = this.clickImage.bind(this);
    this.clickViewPhotoBtn = this.clickViewPhotoBtn.bind(this);
    this.clickShareBtn = this.clickShareBtn.bind(this);
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
  
  clickViewPhotoBtn(){
    this.setState ({
      photoModalOpen: !this.state.photoModalOpen
    })
  }

  clickShareBtn(){
    this.setState ({
      shareModalOpen: !this.state.shareModalOpen
    })
  }

  render(){

    if(this.state.images === null) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <img className="main-page-view" src={this.state.currentImage} />
        <button id="share-btn" onClick={this.clickShareBtn}>Share</button>
        <button id="save-btn">Save</button>
        <React.Fragment>
        <button id="view-photos" onClick={this.clickViewPhotoBtn}>View Photos</button>
        {this.state.photoModalOpen && <Modal currentImage={this.state.currentImage} clickViewPhotoBtn={this.clickViewPhotoBtn} images={this.state.images} />}
        </React.Fragment>
      </div>
    )
  }     
}

ReactDOM.render(<App />, document.getElementById('app'));