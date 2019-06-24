import React, { useEffect } from 'react';
import GalleryItem from './GalleryItem';


const Gallery = (props) => {
    const { fetchPhotos, photos, match, loading, handleImageNotFound } = props;

    // Checks if there are photos for this topic
    const areTherePhotos = photos.length > 0;

    // Sets galleryItems with a default value
    let galleryItems = <GalleryItem areTherePhotos={areTherePhotos} />

    // If there are results (images) generates a list of galleryItems with them
    if(areTherePhotos) {
        galleryItems = photos.map((photo, index) => {
            return <GalleryItem url={photo.image}
                                alt={`${match.params.topic} image`}
                                handleImageNotFound={handleImageNotFound}
                                areTherePhotos={areTherePhotos}
                                key={index} />
        });
    }

    // I use the useEffect hook to fetch the images
    useEffect(() => {
        fetchPhotos(match.params.topic);
    }, [match.params.topic, fetchPhotos]);

    return (
        <div className="photo-container">
            <h2>{match.params.topic}</h2>
            <ul>
                {loading ? <h1>Loading images...</h1> : galleryItems}
            </ul>
        </div>
    );
}

export default Gallery;
