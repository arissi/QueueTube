import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../actions/index";
import _ from "lodash";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };

        this.props.fetchVideos("surfboards");
    }

    // fetch the video after debounce time
    onInputChange(event){
        const videoSearch = _.debounce((term) => { this.props.fetchVideos(term)}, 1000);
        console.log(event.target.value);
        this.setState({ term: event.target.value }); // ES6
        videoSearch(event.target.value);
    }

    // make state always = value of input for immediate response and
    // bind helper function to the correct context
    render() {
        return ( 
            <div className="col-xs-12 search-bar-container">
            <p className="col-xs-2 logo">Queue<strong>Tube</strong></p>
                <div className="col-xs-offset-1 col-xs-8">
                    <input 
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)}
                        placeholder="Search for a video..." />
                </div>
            </div>
        );
    }
}

export default connect(null, { fetchVideos })(SearchBar);