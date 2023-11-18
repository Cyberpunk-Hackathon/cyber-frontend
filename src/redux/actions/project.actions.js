import { getReq } from "../../utils/http"
import { projectConstants } from "../constants";

export const getProjectData = () => async(dispatch) => {

    console.log('getProjectData');

    let config = {
        url: '/project'
    }

    let res = await getReq(config)
   
    if(!res.isException){
        if(res.response.status === 200){
            dispatch(setProjectData({
                projects: res.response.data.items
            }))
        }
        else {
            dispatch(setProjectData({
                projects: []
            }))
        }
    }
    else{
        dispatch(setProjectData({
            projects: []
        }))
    }
}

export const setProjectData = (payload) => (dispatch) => {
    dispatch({
        type: projectConstants.GET_PROJECTS,
        payload: payload
    })
}