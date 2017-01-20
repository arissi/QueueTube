import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    // update the state and fetch the video
    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value }); // ES6
        this.props.fetchVideos(event.target.value);
    }

    // make state always = value of input for immediate response and
    // bind helper function to the correct context
    render() {
        return ( 
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                    placeholder="Search for a video..." />
            </div>
        );
    }
}

export default connect(null, { fetchVideos })(SearchBar);