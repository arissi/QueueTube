import { FETCH_VIDEOS } from "../actions/index"

const INITIAL_STATE = [];

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_VIDEOS:
            return [ action.payload.data, ...state ];
    }
}