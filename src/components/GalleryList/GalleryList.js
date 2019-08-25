import React, { Component } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

class GalleryList extends Component {
    render(){
        let galleryList = this.props.gallery.map((item, index) => {
            return (
                <GalleryItem
                    id={item.id}
                    title={item.title}
                    path={item.path}
                    description={item.description}
                    likes={item.likes}
                />
            )
        });

        return (
        <div className="listBox d-flex">
           {galleryList}

        </div>
        )
        }}

export default GalleryList;