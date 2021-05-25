import { authAPI } from "../api/api"
import { getProfile, getStatus, setProfile, setStatus } from "./profile-reducer";


const SET_USER_DATA = "auth-reducer/SET_USER_DATA";


let initialState = {
    userData: {
        email: null,
        id: null,
        login: null
    },
    isAuth: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, isAuth: action.isAuth, userData: action.userData ? action.userData : { email: null, id: null, login: null } }
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
            if (response.data.resultCode === 0) {
                dispatch(setUserData(false, null));
                dispatch(setProfile(null));
                dispatch(setStatus(null));
            }
        })
}

export const login = (loginData) => dispatch => {
    debugger
    authAPI.login(loginData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(userAuthorizing())
            }
        })
}


export default authReducer;
