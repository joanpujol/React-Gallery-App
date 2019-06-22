// Third party
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

// Flickr API key
import apiKey from './config';

// React Components
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';

// Models
import Photo from './models/Photo';

class App extends Component {
  state = {
    photos: [],
    loading: false
  }

  fetchPhotos = (topic) => {
    this.setState({photos: [], loading: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=true`)
      .then((response) => {
        let photos = response.data.photos.photo.map((photo) => {
          return new Photo(photo.farm, photo.server, photo.id, photo.secret)
        });
        this.setState({photos, topic, loading: false});
      })
  }

  // Sets a placeholder for images not found
  handleImageNotFound = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://cdn.dribbble.com/users/932640/screenshots/2470471/jq.gif';
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => (
              // Default welcome page
              <Redirect to="/hello" />
            ) } />
            <Route
              exact path="/:topic"
              render= { (props) => {
                  return <Gallery fetchPhotos={this.fetchPhotos}
                                  photos={this.state.photos}
                                  loading={this.state.loading}
                                  handleImageNotFound={this.handleImageNotFound}
                                  {...props} />
                }
              }
            />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
