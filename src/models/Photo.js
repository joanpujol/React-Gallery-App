// Photo model with an image property containing the image URL

class Photo {
    constructor(farmId, serverId, id, secret) {
        this.image = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
    }
}

export default Photo;
