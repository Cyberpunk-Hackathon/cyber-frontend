import { selectedConstants } from "../constants"

export const setSelectedProject = (payload) => (dispatch) => {
    dispatch({
        type: selectedConstants.SELECTED_PROJECT,
        payload: payload
    })
}

export const setSelectedSprint = (payload) => (dispatch) => {
    dispatch({
        type: selectedConstants.SELECTED_SPRINT,
        payload: payload
    })
}

export const setSelectedBoard = (payload) => (dispatch) => {
    dispatch({
        type: selectedConstants.SELECTED_BOARD,
        payload: payload
    })
}

export const setSelectedIssue = (payload) => (dispatch) => {
    dispatch({
        type: selectedConstants.SELECTED_ISSUE,
        payload:payload
    })
}