import React, { Component } from 'react';
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail"

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}
