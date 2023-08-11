
const {
    ADD_PEER_STREAM,
    REMOVE_PEER_STREAM,
    ADD_PEER_NAME,
    ADD_ALL_PEERS,
} = require("./peerActions");


const initialState = {};


const ADD_PEER_STREAM = "ADD_PEER_STREAM";
const REMOVE_PEER_STREAM = "REMOVE_PEER_STREAM";
const ADD_PEER_NAME = "ADD_PEER_NAME";
const ADD_ALL_PEERS = "ADD_ALL_PEERS";


const peersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PEER_STREAM:
            return {
                ...state,
                [action.payload.peerId]: {
                    ...state[action.payload.peerId],
                    stream: action.payload.stream,
                },
            };
        case ADD_PEER_NAME:
            return {
                ...state,
                [action.payload.peerId]: {
                    ...state[action.payload.peerId],
                    userName: action.payload.userName,
                },
            };
        case REMOVE_PEER_STREAM:
            return {
                ...state,
                [action.payload.peerId]: {
                    ...state[action.payload.peerId],
                    stream: undefined,
                },
            };
        case ADD_ALL_PEERS:
            return { ...state, ...action.payload.peers };
        default:
            return { ...state };
    }
};

export default peersReducer;
