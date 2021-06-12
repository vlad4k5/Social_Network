import { authAPI } from "../api/api"
import { getProfile, getStatus, setProfile, setStatus } from "./profile-reducer";


const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const SET_CAPTCHA = "auth-reducer/SET_CAPTCHA";
const SET_ERROR_MESSAGE = "auth-reducer/SET_ERROR_MESSAGE";

type UserDataType = {
    email: string | null
    id: number | null
    login: string | null
}


let initialState = {
    userData: {
        email: null as string | null,
        id: null as number | null,
        login: null as string | null
    } as UserDataType,
    isAuth: null as boolean | null,
    captcha: null as string | null,
    errorMessage: null as string | null
}
type InitialStateType = typeof initialState;



const authReducer = (state = initialState, action: any): InitialStateType => {
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


type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    isAuth: boolean
    userData: UserDataType | null
}
const setUserData = (isAuth: boolean, userData: UserDataType | null): SetUserDataActionType => ({ type: SET_USER_DATA, isAuth, userData });


type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captcha: string
}
const setCaptcha = (captcha: string): SetCaptchaActionType => ({ type: SET_CAPTCHA, captcha });


type SetErrorMessageActionType = {
    type: typeof SET_ERROR_MESSAGE
    errorMessage: string | null
}
const setErrorMessage = (errorMessage: string | null): SetErrorMessageActionType => ({ type: SET_ERROR_MESSAGE, errorMessage });




export const userAuthorizing = () => (dispatch: any) => {
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


export const logout = () => (dispatch: any) => {
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


type LoginDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
    captcha: string | null
}
export const login = (loginData: LoginDataType) => (dispatch: any) => {
    debugger
    authAPI.login(loginData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(userAuthorizing());
                dispatch(setErrorMessage(null));
            } else if (response.data.resultCode === 10) {
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