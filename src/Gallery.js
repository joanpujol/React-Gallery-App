import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
    const { topic, photos, fetchFunction } = props;

    fetchFunction(topic);

    let galleryItems = photos.map((photo, index) => {
        return <GalleryItem url={photo.image} alt={"alt"} key={index} />
    });

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
               {galleryItems} 
            </ul>
        </div>
    );
}

export default Gallery;
