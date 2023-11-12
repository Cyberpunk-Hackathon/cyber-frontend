import axios from "axios";
import {
    getTestResponse,
    isEmptyObj,
    getAPITokens
} from "./functions";

let IS_TEST = JSON.parse(process.env.REACT_APP_IS_TEST);
let axioDefaults = {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: JSON.parse(process.env.REACT_APP_REQUEST_TIMEOUT),
    headers: {
        'Content-Type': 'application/json',
        "X-Requested-With": "XMLHttpRequest",
    }
};

let axiosReq = async (config) => {

    let currentTime = new Date().getTime();
    sessionStorage.setItem("API_LAST_ACCESS_TIME", currentTime);

    if (IS_TEST) {
        return getTestResponse(config.url);
    }

    try {

        // Add Authorization Header
        let access_token = getAPITokens("access");
        if (access_token) {
            axioDefaults.headers["Authorization"] = "Bearer " + access_token;
        }

        let newConfigs = {
            ...axioDefaults,
            headers: {
                ...axioDefaults.headers
            },
            ...config
        };

        let resp = await axios(newConfigs);
        return {
            isException: false,
            response: resp
        };
    } catch (err) {
        return {
            isException: true,
            error: err
        };
    }

};

export const postReq = async (config) => {
    let newConfig = {
        ...config,
        method: "post"
    };
    return await axiosReq(newConfig);
};

export const putReq = async (config) => {
    let newConfig = {
        ...config,
        method: "put"
    };
    return await axiosReq(newConfig);
};

export const getReq = async (config) => {
    let newConfig = {
        ...config,
        method: "get"
    };
    return await axiosReq(newConfig);
};

export const deleteReq = async (config) => {
    let newConfig = {
        ...config,
        method: "delete"
    };
    return await axiosReq(newConfig);
};

export const getImageReq = async (config) => {
    let newConfig = {
        ...config,
        method: "get",
        responseType: "stream"
    };
    return await axiosReq(newConfig);
};