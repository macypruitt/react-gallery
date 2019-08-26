import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css';



class GalleryItem extends Component {
    state= {
      imageVisible: true,
    }

    clickToggleDescription = (event) => {
      if(this.state.imageVisible === true){
        this.setState({
          imageVisible: false,
        })
        }
      if(this.state.imageVisible === false){
        this.setState({
            imageVisible: true,
        })
      }
    }
    //this likeHandler has a mind of its own...
    likeHandler = (id) => {
      axios({
        method: 'PUT',
        url: `/gallery/like/${id}`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log('GET error: ', err);
      });
    }
        
    render() {
        let imgPath = this.props.path;
        let imageBox = <img src={'..'+ imgPath} alt="pix"/>
        ///imageBox toggles between image and description when clicked
        if(this.state.imageVisible === false){
          imageBox = <p>{this.props.description}</p>
    }
      
        return (
          <div className="card">
              <div className="imageBox" onClick={this.clickToggleDescription}>{imageBox}</div>
              <p>{this.props.title}</p>
              <p>Likes: {this.props.likes}</p>
              <button className="btn btn-primary" onClick={this.likeHandler(this.props.id)} >Like</button>
          </div>
        )
    }
}

export default GalleryItem;