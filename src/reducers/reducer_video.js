import { FETCH_VIDEOS } from "../actions/index"

// videos contains all the matched videos
const INITIAL_STATE = { videos: [] };

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_VIDEOS:
            console.log(action.payload.data.items);
            return { ...state, videos: action.payload.data.items };
        default:
            return state;
    }
}