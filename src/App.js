import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';
import Photo from './Photo';
import Gallery from './Gallery';
import Nav from './Nav';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  state = {
    photos: []
  }

  fetchPhotosAbout = (topic) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=true`)
      .then((response) => {
        let photos = response.data.photos.photo.map((photo) => {
          return new Photo(photo.farm, photo.server, photo.id, photo.secret)
        });
        this.setState(() => {
          return { photos }
        });
      });
  }

  componentDidMount() {
    this.fetchPhotosAbout("cats");
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Route 
            path="/:topic" 
            render= { (props) => (
              <Gallery topic={props.match.params.topic} fetchFunction={this.fetchPhotosAbout} photos={this.state.photos}/>
            )} 
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
