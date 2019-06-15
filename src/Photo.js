class Photo {
    constructor(farmId, serverId, id, secret) {
        this.image = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
    }
}

export default Photo;
