import React, { Component } from "react";
import { connect } from "react-redux";
import VideoListItem from "./video_list_item";


class VideoList extends Component {
    renderVideo(videoData) {
            const title = videoData.snippet.title;
            const imageUrl = videoData.snippet.thumbnails.default.url;

        return (
            <VideoListItem title={title} imageUrl={imageUrl} />
        );

    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.videos.map(this.renderVideo)}
            </ul>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps)(VideoList);