import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css';


class GalleryItem extends Component {
 
    render() {
        
        let imgPath = this.props.path;
        console.log (imgPath);
        
        
        return (
            <div className="itemBox">
                
                <p>{this.props.id}</p>
                <p>{this.props.title}</p>
                <img src={'..'+ imgPath} alt="text"/>
                <p>{this.props.description}</p>
                <p>{this.props.likes}</p>
                <button onClick={this.likeHandler} >Lyke</button>
                
            </div>
        )
    }
}

export default GalleryItem;