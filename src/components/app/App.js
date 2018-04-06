import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
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

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
