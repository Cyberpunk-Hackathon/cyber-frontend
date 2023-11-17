import { getReq } from "../../utils/http"
import { boardConstants } from "../constants"

export const getBoardData = (projectId) => async(dispatch) => {

    let config = {
        url: '/board',
        params: {
            projectId: projectId
        }
    }

    let res = await getReq(config)
    if(!res.isException){
        if(res.response.status === 200) {
            dispatch(setBoardData({
                boards: res.response.data.items
            }))
        }
        else {
            dispatch(setBoardData({
                boards: []
            }))
        }
    }
    else {
        dispatch(setBoardData({
            boards: []
        }))
    }
}

export const setBoardData = (payload) => (dispatch) => {
    dispatch({
        type: boardConstants.GET_BOARDS,
        payload: payload
    })
}