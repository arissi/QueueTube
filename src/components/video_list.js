import React, { Component } from "react";
import { connect } from "react-redux";
import VideoListItem from "./video_list_item";
import { onSelectVideo } from "../actions/index"


class VideoList extends Component {

    // creates a single VideoListLtem
    renderVideo(videoData) {
            const title = videoData.snippet.title;
            const channel = videoData.snippet.channelTitle;
            const description = videoData.snippet.description.substring(0, 50) + "...";
            const imageUrl = videoData.snippet.thumbnails.default.url;
            const tag = videoData.etag;

        return (
            <VideoListItem 
                onSelectVideo={this.props.onSelectVideo} 
                videoData={videoData}
                key={tag}
                title={title} 
                channel={channel}
                description={description}
                imageUrl={imageUrl} />
        );
    }

    // a list of matched videos
    render() {
        return (
            <ul className="col-xs-4 list-group">
                {this.props.videos.videos.map(this.renderVideo.bind(this))}
            </ul>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps, { onSelectVideo })(VideoList);