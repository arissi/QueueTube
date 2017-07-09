import { combineReducers } from 'redux';
import VideoReducer from "./reducer_video";
import QueueReducer from "./reducer_queue";
import HistoryReducer from "./reducer_history";

const rootReducer = combineReducers({
  videos: VideoReducer,
  queue: QueueReducer,
	history: HistoryReducer
});

export default rootReducer;
