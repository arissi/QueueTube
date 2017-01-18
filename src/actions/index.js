export const FETCH_VIDEO = "FETCH_VIDEO";

export function fetchVideo(video) {
    var request = "video";

    return {
        type: FETCH_VIDEO,
        payload: request
    }

}