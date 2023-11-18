import { getReq } from "../../utils/http"
import { sprintConstants } from "../constants"
import { setBacklogData } from "./backlog.actions"

export const getSprintData = (boardId) => async(dispatch) => {

    let config = {
        url: `/board/${boardId}/sprint`,
        params: {
            state: 'future'
        }
    }

    let res = await getReq(config)
    if(!res.isException){
        if(res.response.status === 200) {
            dispatch(setSprintData({
                sprints: [
                    {
                    id: -1,
                    name: "Backlog"
                  },
                  ...res.response.data.items]
            }))
        }
        else {
            dispatch(setSprintData({
                sprints: []
            })) 
        }
    }
    else{
        dispatch(setSprintData({
            sprints: []
        })) 
    }
}

export const setSprintData = (payload) => (dispatch) => {
    dispatch({
        type: sprintConstants.GET_SPRINTS,
        payload: payload
    })
}