import React, { Component } from "react";
import { connect } from "react-redux";
import VideoListItem from "./video_list_item";
import { onQueueVideo } from "../actions/index"


class VideoList extends Component {

    // creates a single VideoListLtem
    renderVideo(videoData) {
            const title = videoData.snippet.title;
            const channel = videoData.snippet.channelTitle;
            const description = videoData.snippet.description.length > 50 ? videoData.snippet.description.substring(0, 50) + "..." : videoData.snippet.description;
            const imageUrl = videoData.snippet.thumbnails.default.url;
            const tag = videoData.etag;

        return (
            <VideoListItem 
                onQueueVideo={this.props.onQueueVideo} 
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
            <ul className="video-list col-xs-6 list-group">
                {this.props.videos.videos.map(this.renderVideo.bind(this))}
            </ul>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps, { onQueueVideo })(VideoList);