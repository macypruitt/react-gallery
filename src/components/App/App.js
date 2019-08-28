import React, { Component } from 'react';
import axios from 'axios';
import './bootstrap.min.css'
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {
  state= {
    gallery: [],
  }

  componentDidMount(){
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
    });
  }

  putGallery = (event) => {
    const id = event.target.dataset.id;
    console.log(id)
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    })
    .then((response) => {
      console.log(response);
      this.getGallery();
    })
    .catch((err) => {
      console.log('GET error: ', err);
    });
  }
  
  render() {
    return (
        <div className="container ">
          <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of my life</h1>
          </header>
          <br/>
          <GalleryList gallery={this.state.gallery} putGallery={this.putGallery}/>
        </div>
      </div>
      
    );
  }
}

export default App;
