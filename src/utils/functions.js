


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


export const getAPITokens = (tokenType) => {

    let userData = JSON.parse(sessionStorage.getItem('token'));
    if (!isEmptyObj(userData) && !isEmptyObj(userData.session)) {
        if (tokenType === "access" && userData.session.access_token !== "") {
            return userData.session.access_token;
        } else if (tokenType === "refresh" && userData.session.refresh_token !== "") {
            return userData.session.refresh_token;
        } else {
            return false;
        }
    }

    return false;

}
