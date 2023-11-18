import { selectedConstants } from "../constants";

const initialState = {
    project: null,
    board: null,
    sprint: null,
    issue: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case selectedConstants.SELECTED_SPRINT:
        case selectedConstants.SELECTED_PROJECT:
        case selectedConstants.SELECTED_BOARD:
        case selectedConstants.SELECTED_ISSUE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}