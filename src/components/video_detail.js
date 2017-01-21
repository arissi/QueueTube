import React, { Component } from "react";
import { connect } from "react-redux";

class VideoDetail extends Component {
    render() {
        if (!this.props.selectedVideo) {
            return <div>Loading...</div>
        }

        console.log(this.props.selectedVideo.id.videoId);
        const videoId = this.props.selectedVideo.id.videoId;
        const vidUrl = `https://youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={vidUrl}></iframe>
                </div>
                <div className="details">
                    <div> {this.props.selectedVideo.snippet.title} </div>
                    <div> {this.props.selectedVideo.snippet.description} </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ videos }){
    return { selectedVideo: videos.selectedVideo };
}

export default connect(mapStateToProps)(VideoDetail);