import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css';


class GalleryItem extends Component {
    
    // putLike = (likeId) => {
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


      likeHandler = (id) => {

      }


    render() {
        
        let imgPath = this.props.path;
        
        return (
            // <div className="itemBox" style="width:15rem">
            <div className="card">
                <img src={'..'+ imgPath} alt="photo"/>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.likes}</p>
                <button className="btn btn-primary" onClick={this.likeHandler(this.props.id)} >Lyke</button>
                
            </div>
        )
    }
}

export default GalleryItem;