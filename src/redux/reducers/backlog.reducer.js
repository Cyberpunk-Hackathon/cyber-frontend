import { backlogConstants } from "../constants";

const initialState = {
    backlog: []
 }

 export default function(state = initialState, action) {
    switch (action.type) {
        case backlogConstants.GET_BACKLOG:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
 }