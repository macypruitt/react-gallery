import React, { Component } from 'react';
import axios from 'axios';



class GalleryItem extends Component {
 
    render() {
        
        return (
            <div>
                
                <p>{this.props.id}</p>
                <p>{this.props.title}</p>
                <p>{this.props.path}</p>
                <p>{this.props.description}</p>
                <p>{this.props.likes}</p>
                
            </div>
        )
    }
}

export default GalleryItem;