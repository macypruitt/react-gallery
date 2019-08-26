import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css';
import { noConflict } from 'q';


class GalleryItem extends Component {
    
    state= {
      imageVisible: true,
    }

  

    clickToggleDescription = (event) => {
      if(this.state.imageVisible == true){
        this.setState({
          imageVisible: false,
        })
        }
      if(this.state.imageVisible == false){
        this.setState({
            imageVisible: true,
        })
      }
    }




      // likeHandler = (event) => {
        
      //   putLike = (likeId) => {
      //     axios({
      //       method: 'PUT',
      //       url: `/gallery/like/`${likeId},
      //       data: 
      //     })
      //     .then((response) => {
      //       this.setState({
      //         likes: response.data,
      //       });
      //     })
      //     .catch((err) => {
      //       console.log('GET error: ', err);
      //       alert('You Failed!!!');
      //     });
      //   }
        
      // }


    render() {
        
        let imgPath = this.props.path;
        let imageBox = <img src={'..'+ imgPath} alt="photo"/>
        if(this.state.imageVisible == false){
          imageBox=<p>{this.props.description}</p>
       }
      
        
        return (
           
            <div className="card">
                <div className="imageBox" onClick={this.clickToggleDescription}>{imageBox}</div>
                <p>{this.props.title}</p>
                
                <p>{this.props.likes}</p>
                <button className="btn btn-primary"  >Lyke</button>
                
            </div>
        )
    }
}

export default GalleryItem;