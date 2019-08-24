import React, { Component } from 'react';
import axios from 'axios';

class GalleryList extends Component {
    render(){
        let galleryList = this.props.gallery.map((item, index) => {
            return (
                <p key={index}>{item.title}</p>
                <p key={index}>{item.description}</p>
            )
        });


        return (
        <div>
           {galleryList}

        </div>
        )
        }}

export default GalleryList;