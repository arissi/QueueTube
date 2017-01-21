import React from "react";

// list item for each found video
export default (props) => {
    return (
        <li onClick={() => props.onSelectVideo(props.videoData)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={props.imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{props.title}</div>
                </div>
            </div>
        </li>
    );
}