import { getReq } from "../../utils/http"
import { backlogConstants } from "../constants"
import { setSelectedIssue } from "./selected.actions"
import { setSprintData } from "./sprint.actions"

export const getBacklogData = (boardId) => async(dispatch) => {

    let config = {
        url: `/board/${boardId}/backlog`,
        params: {
            maxResults: 999
        }
    }

    let res = await getReq(config)
    if(!res.isException){
        if(res.response.status === 200) {
            dispatch(setBacklogData({
                backlog: res.response.data.items
            }))
        }
        else {
            dispatch(setBacklogData({
                backlog: []
            })) 
        }
    }
    else{
        dispatch(setBacklogData({
            backlog: []
        })) 
    }
}


export const getSprintIssueData = (boardId,sprintId) => async(dispatch) => {

    let config = {
        url: `/board/${boardId}/sprint/${sprintId}/issue`,
        params: {
            maxResults: 999
        }
    }

    let res = await getReq(config)
    if(!res.isException){
        if(res.response.status === 200) {
            dispatch(setBacklogData({
                backlog: res.response.data.items
            }))
        }
        else {
            dispatch(setBacklogData({
                backlog: []
            })) 
        }
    }
    else{
        dispatch(setBacklogData({
            backlog: []
        })) 
    }
}

export const getIssueById = (id) => async(dispatch) => {

    let config = {
        url: `/issue/${id}`
    }

    let res = await getReq(config)
    console.log('issuebyid',res);
    if(!res.isException){
        if(res.response.status === 200) {
            dispatch(setSelectedIssue({
                issue: res.response.data
            }))
        }
        else {
            dispatch(setSelectedIssue({
                issue: res.response.data
            }))
        }
    }
    else {

    }

}

export const setBacklogData = (payload) => (dispatch) => {
    dispatch({
        type: backlogConstants.GET_BACKLOG,
        payload: payload
    })
}