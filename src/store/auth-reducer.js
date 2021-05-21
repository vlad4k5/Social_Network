import { authAPI } from "../api/api"
import { getProfile, getStatus } from "./profile-reducer";


const SET_USER_DATA = "auth-reducer/SET_USER_DATA";


let initialState = {
    userData: null,
    isAuth: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            debugger
            return { ...state, isAuth: action.isAuth, userData: action.userData }
        }

        default: return state
    }
}


const setUserData = (isAuth, userData) => ({ type: SET_USER_DATA, isAuth, userData });

export const userAuthorizing = () => dispatch => {
    authAPI.isUserAuthorized()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(true, response.data.data));
                dispatch(getProfile(response.data.data.id));
                dispatch(getStatus(response.data.data.id));
            } else {
                dispatch(setUserData(false, null));
            }
        })
}
export const logout = () => dispatch => {
    debugger
    authAPI.logout()
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                dispatch(setUserData(false, null));
            }
        })
}


export default authReducer;
