import React, { useEffect } from 'react';
import GalleryItem from './GalleryItem';


const Gallery = (props) => {
    const { fetchPhotos, photos, match, loading, handleImageNotFound } = props;

    let galleryItems = photos.map((photo, index) => {
        return <GalleryItem url={photo.image}
                            alt={`${match.params.topic} image`}
                            handleImageNotFound={handleImageNotFound}
                            key={index} />
    });

    // I use the useEffect hook to fetch the images
    useEffect(() => {
        fetchPhotos(match.params.topic);
    }, [match.params.topic, fetchPhotos]);

    return (
        <div className="photo-container">
            <h2>{match.params.topic}</h2>
            <ul>
                { (() => {
                    // Conditionally displays a loading message, the image gallery with the photos
                    // or a message indicating that no images were found
                    if(loading) {
                        return <h1>Loading images...</h1>
                    } else if (!loading && photos.length > 0) {
                        return galleryItems;
                    }  else {
                        return <h1>Images not found!</h1>
                    }
                })() }
            </ul>
        </div>
    );
}

export default Gallery;
