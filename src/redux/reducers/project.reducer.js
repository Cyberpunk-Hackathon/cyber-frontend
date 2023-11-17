import { projectConstants } from "../constants";

const initialState = {
    projects: []
 }

 export default function(state = initialState, action) {
    switch (action.type) {
        case projectConstants.GET_PROJECTS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
 }