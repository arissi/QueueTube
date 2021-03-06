import React, { Component } from "react";
import { connect } from "react-redux";
import { onSelectVideo, deleteVideo, archiveVideo } from "../actions/index";
import YouTube from "react-youtube";
import { Link } from 'react-router';

class VideoDetail extends Component {

    // play next video in queue when current ends
    _onEnd(event) {
        const id = this.props.queue.queue[0].id;
        this.props.onSelectVideo(this.props.queue.queue[0].video);
        this.props.deleteVideo(id);
    }

		_onPlay(event) {
			console.log('PLAYING');
			this.props.archiveVideo(this.props.selectedVideo);
		}

    render() {
        if (!this.props.selectedVideo) {
            return <div>Loading...</div>
        }

        console.log(this.props.selectedVideo.id.videoId);
        const videoId = this.props.selectedVideo.id.videoId;
        const opts = {
        height: '390',
        width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div className="video-detail col-xs-6">
                <div className="embed-responsive embed-responsive-16by9">
                    <YouTube
                        videoId={videoId}
                        opts={opts}
                        className= "embed-responsive-item"
                        onEnd={this._onEnd.bind(this)}
												onPlay={this._onPlay.bind(this)}
                    />
                </div>
                <div className="details">
                    <div> {this.props.selectedVideo.snippet.title} </div>
                </div>
                <div className="tabs">
										<Link to="/" className="btn active">
											Queue
										</Link>
										<Link to="/history" className="btn">
											History
										</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ queue }){
    return { 
        queue: queue,
        selectedVideo: queue.selectedVideo
     };
}

export default connect(mapStateToProps, { onSelectVideo, deleteVideo, archiveVideo })(VideoDetail);
