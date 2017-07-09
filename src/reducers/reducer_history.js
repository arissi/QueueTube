import { ARCHIVE_VIDEO, DELETE_ARCHIVE } from "../actions/index";

const INITIAL_STATE = { history: [] };

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case ARCHIVE_VIDEO: 
						var videoId = action.payload.id.videoId;
						for(var vid = 0; vid < state.history.length; vid++){
							if (videoId == state.history[vid].id) return state;
						}

            return { 
                ...state, 
                history: [ 
                    ...state.history, 
                    { 
                        // this can be changed. maybe just pass id and title instead of all data
                        id: videoId,
                        video: action.payload 
                    }]
            };
        case DELETE_ARCHIVE:
            return { 
                history: state.history.splice(action.payload, 1),
                ...state
            }
        default:
            return state;
    }
}
