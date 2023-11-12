import * as Defs from "../configs/definition";
import data from "../testjson"


export const isUndefine = (object) => {
    return typeof object === "undefined" || object === null;
};

export const isEmptyObj = (object) => {
    if (isUndefine(object)) {
        return true;
    } else {
        return Object.keys(object).length === 0 && object.constructor === Object;
    }
};


export const getTestResponse = (url) => {
    let pathParms = url.split("/");
    if (pathParms.length < 2) {
        return {
            isException: true,
            error: "Invalid URL"
        };
    }
    pathParms = pathParms.filter((el) => el !== "");

    if (!isEmptyObj(data[pathParms[0]]) && !isEmptyObj(data[pathParms[0]][pathParms[1]])) {
        return {
            isException: false,
            response: data[pathParms[0]][pathParms[1]]
        };
    } else {
        return {
            isException: true,
            error: "Test data not found"
        };
    }
};


export const getAPITokens = (tokenType) => {

    let userData = JSON.parse(sessionStorage.getItem(Defs.USER_SESSION_KEY));
    if (!isEmptyObj(userData) && !isEmptyObj(userData.session)) {
        if (tokenType == "access" && userData.session.access_token != "") {
            return userData.session.access_token;
        } else if (tokenType == "refresh" && userData.session.refresh_token != "") {
            return userData.session.refresh_token;
        } else {
            return false;
        }
    }

    return false;

}
