import React from 'react';

const GalleryItem = (props) => {
    if(props.areTherePhotos) {
        return (
            <li>
                <img src={props.url} alt={props.alt} onError={(e) => props.handleImageNotFound(e)} />
            </li>
        )
    } else {
        return (
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        )
    }
}

export default GalleryItem;
