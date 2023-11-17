import { selectedConstants, sprintConstants } from "../constants";

const initialState = {
    sprints: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case sprintConstants.GET_SPRINTS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}