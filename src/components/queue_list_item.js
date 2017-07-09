import React from "react";

// list item for each video stored in the queue
export default (props) => {
    console.log("id", props.id);
    return (
        //add to video detail on click
        <li className="queue-item list-group-item">
        <div className="row">
            <p 
             onClick={() => {
                props.onSelectVideo(props.videoData);
                props.deleteVideo(props.id);
            }} 
            className="col-xs-10 queue-item-title">{props.title} </p>
            <p onClick={() => props.deleteVideo(props.id)} className="col-xs-2 queue-item-delete">delete</p>
        </div>
        </li>
    );
}
