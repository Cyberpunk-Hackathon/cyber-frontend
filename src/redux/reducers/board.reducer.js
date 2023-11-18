import { boardConstants } from "../constants";

const initialState = {
    boards: []
 }

 export default function(state = initialState, action) {
    switch (action.type) {
        case boardConstants.GET_BOARDS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
 }