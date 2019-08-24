import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state= {
    gallery: [],
  }

  componentDidMount(){
    console.log('a mounted to nothing');
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
    .then((response) => {
      console.log('GET gallery: ', response);
      this.setState({
        gallery: response.data,
      });
    })
    .catch((err) => {
      console.log('GET error: ', err);
      alert('You can do it!!!');
    });
  }





  render() {

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery}/>
      
      </div>
    );
  }
}

export default App;
