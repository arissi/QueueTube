import React from "react";

// list item for each found video
export default (props) => {
    return (
        <li onClick={() => props.onQueueVideo(props.videoData)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={props.imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading video-title">{props.title}</div>
                    <p className="video-author">{props.channel}</p>
                    <p className="video-description">{props.description}</p>
                </div>
            </div>
        </li>
    );
}