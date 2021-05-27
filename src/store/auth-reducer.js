import { authAPI } from "../api/api"
import { getProfile, getStatus, setProfile, setStatus } from "./profile-reducer";


const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const SET_CAPTCHA = "auth-reducer/SET_CAPTCHA";
const SET_ERROR_MESSAGE = "auth-reducer/SET_ERROR_MESSAGE";


let initialState = {
    userData: {
        email: null,
        id: null,
        login: null
    },
    isAuth: null,
    captcha: null,
    errorMessage: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, isAuth: action.isAuth, userData: action.userData ? action.userData : { email: null, id: null, login: null } }
        }
        case SET_CAPTCHA: {
            return { ...state, captcha: action.captcha }
        }
        case SET_ERROR_MESSAGE: {
            debugger
            return { ...state, errorMessage: action.errorMessage }
        }
        default: return state
    }
}


const setUserData = (isAuth, userData) => ({ type: SET_USER_DATA, isAuth, userData });
const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });
const setErrorMessage = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage });


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
                dispatch(userAuthorizing());
                dispatch(setErrorMessage(null));
            } else if (response.data.resultCode = 10) {
                dispatch(setErrorMessage(response.data.messages[0]))
                authAPI.getCaptcha()
                    .then(res => {
                        debugger
                        dispatch(setCaptcha(res.data.url))
                    })
            }
        })
}


export default authReducer;