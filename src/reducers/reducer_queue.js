import { SELECT_VIDEO, QUEUE_VIDEO, DELETE_VIDEO } from "../actions/index";

const INITIAL_STATE = { 
        queue: [{
            id: 0,
            video: {
                "kind": "youtube#searchResult",
                "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/BXIkBqQlOMIMDrFz7pOJpaPBejM\"",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "TMfPJT4XjAI"
                },
                "snippet": {
                    "publishedAt": "2011-07-29T18:53:32.000Z",
                    "channelId": "UCf9wumweDPswxIrex0TaZuw",
                    "title": "Frank Ocean - Novacane",
                    "description": "Music video by Frank Ocean performing Novacane. (C) 2011 The Island Def Jam Music Group.",
                    "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/TMfPJT4XjAI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/TMfPJT4XjAI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/TMfPJT4XjAI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                    },
                    "channelTitle": "FrankOceanVEVO",
                    "liveBroadcastContent": "none"
                }
                }
            }],

            selectedVideo: { 
                        "kind": "youtube#searchResult",
                        "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/IQEhPtwnNIqFxskkznoNm1cENWc\"",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "PmN9rZW0HGo"
                            },
                            "snippet": {
                                "publishedAt": "2011-09-23T07:00:00.000Z",
                                "channelId": "UCf9wumweDPswxIrex0TaZuw",
                                "title": "Frank Ocean - Swim Good",
                                "description": "Music video by Frank Ocean performing Swim Good. (C) 2011 The Island Def Jam Music Group.",
                                "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/PmN9rZW0HGo/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/PmN9rZW0HGo/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/PmN9rZW0HGo/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                                },
                                "channelTitle": "FrankOceanVEVO",
                                "liveBroadcastContent": "none"
                            }
                    }
        };

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case SELECT_VIDEO:
            return { ...state, selectedVideo: action.payload };
        case QUEUE_VIDEO: 
						var videoId = action.payload.id.videoId;
						for(var vid = 0; vid < state.queue.length; vid++){
							if (videoId == state.queue[vid].id) return state;
						}

            return { 
                ...state, 
                queue: [ 
                    ...state.queue, 
                    { 
                        // this can be changed. maybe just pass id and title instead of all data
                        id: videoId,
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
