import { SELECT_VIDEO, QUEUE_VIDEO, DELETE_VIDEO } from "../actions/index";

const INITIAL_STATE = { queue: [],  selectedVideo: null };

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case SELECT_VIDEO:
            return { ...state, selectedVideo: action.payload };
        case QUEUE_VIDEO: 
            console.log("Queue Video Action", action.payload);
            return { 
                ...state, 
                queue: [ 
                    ...state.queue, 
                    { 
                        id: action.payload.id.videoId,
                        video: action.payload 
                    }]
            };
        case DELETE_VIDEO: 
            console.log("Delete Video Action", action.payload);
            return { 
                queue: state.queue.splice(action.payload, 1),
                ...state
            }
        default:
            return state;
    }
}