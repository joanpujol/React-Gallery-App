import React from 'react';

const GalleryItem = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.alt} onError={(e) => props.handleImageNotFound(e)} />
        </li>
    );
}

export default GalleryItem;
