import axios from "axios";

const API_KEY = "AIzaSyDAH-BL_krVTmutPq3TR6xZhq5LRn-eWe0";
const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${API_KEY}`;

export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const SELECT_VIDEO = "SELECT_VIDEO";

export function fetchVideos(term) {
    var url = `${ROOT_URL}&q=${term}`;
    var request = axios.get(url);

    return {
        type: FETCH_VIDEOS,
        payload: request
    }

}

export function onSelectVideo(video) {
    return {
        type: SELECT_VIDEO,
        payload: video
    };
}