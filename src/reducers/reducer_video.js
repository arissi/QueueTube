import { FETCH_VIDEOS, SELECT_VIDEO } from "../actions/index"

// videos contains all the matched videos
const INITIAL_STATE = { videos: [], selectedVideo: null };

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_VIDEOS:
            console.log(action.payload.data.items);
            return { ...state, videos: action.payload.data.items };
        case SELECT_VIDEO:
            return { ...state, selectedVideo: action.payload };
        default:
            return state;
    }
}