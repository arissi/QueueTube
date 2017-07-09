import React, { Component } from "react";
import { connect } from "react-redux";
import QueueListItem from "./queue_list_item";
import { onSelectVideo, deleteVideo } from "../actions/index"


class QueueList extends Component {

    // creates a single QueueListLtem
    renderQueue(queueData, index) {
            const title = queueData.video.snippet.title.length > 50 ? 
                queueData.video.snippet.title.substring(0, 50) + "..." : queueData.video.snippet.title;

        return (
            <QueueListItem 
                onSelectVideo={this.props.onSelectVideo} 
                deleteVideo={this.props.deleteVideo}
                videoData={queueData.video}
                key={index}
                id={index}
                title={title} />
        );
    }

    // a list of matched videos
    render() {
        return (
            <div className="queue-container col-xs-6">
                <ul 
                className="queue-list"
                >
                    {this.props.queue.queue.map(this.renderQueue.bind(this))}
                </ul>
            </div> 
            );
    }
}

function mapStateToProps(state) {
    return { queue: state.queue };
}

export default connect(mapStateToProps, { onSelectVideo, deleteVideo })(QueueList);
