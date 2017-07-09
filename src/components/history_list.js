import React, { Component } from "react";
import { connect } from "react-redux";
import QueueListItem from "./queue_list_item";
import { onQueueVideo, deleteArchive } from "../actions/index"


class HistoryList extends Component {

    // creates a single QueueListLtem
    renderHistory(historyData, index) {
            const title = historyData.video.snippet.title.length > 50 ? 
                historyData.video.snippet.title.substring(0, 50) + "..." : historyData.video.snippet.title;

        return (
            <QueueListItem 
                onSelectVideo={this.props.onQueueVideo} 
                deleteVideo={this.props.deleteArchive}
                videoData={historyData.video}
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
                className="list-group queue-list"
                >
                    {this.props.history.history.map(this.renderHistory.bind(this))}
                </ul>
            </div> 
            );
    }
}

function mapStateToProps(state) {
    return { history: state.history };
}

export default connect(mapStateToProps, { onQueueVideo, deleteArchive })(HistoryList);
