import { similiarIssuesConstants } from "../constants";

const initialState = {
    similarIssues: [],
    modalOpen: false
 }

 export default function(state = initialState, action) {
    switch (action.type) {
        case similiarIssuesConstants.GET_SIMILAR_ISSUE:
        case similiarIssuesConstants.MODAL_CLOSE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
 }