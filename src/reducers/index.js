import { combineReducers } from 'redux';
import VideoReducer from "./reducer_video";
import QueueReducer from "./reducer_queue";

const rootReducer = combineReducers({
  videos: VideoReducer,
  queue: QueueReducer
});

export default rootReducer;
