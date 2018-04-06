import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from '../search-bar/SearchBar';
import VideoList from '../video-list/VideoList';
import VideoDetail from '../video-detail/VideoDetail';
import './app.css';

const API_KEY = 'AIzaSyBGC8P3FA40zy94S217tbCR3uvXRCDFb_g';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    console.log('video search');
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="app">
        <SearchBar onSearchTermChange={_.debounce(this.videoSearch.bind(this), 500)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
