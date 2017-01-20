import React, { Component } from 'react';
import SearchBar from "./search_bar";
import VideoList from "./video_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}
