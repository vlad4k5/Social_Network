import { InferActionTypes } from './store';
import { authAPI } from "../api/auth-api"
import { getProfile, getStatus, profileActions, ProfileActionsType } from "./profile-reducer";
import { CommonThunkCreatorType, LoginDataType, UserDataType } from "./types/types";

const SET_USER_DATA = "SN/AUTH/SET_USER_DATA"
const SET_CAPTCHA = "SN/AUTH/SET_CAPTCHA"
const SET_ERROR_MESSAGE = "SN/AUTH/SET_ERROR_MESSAGE"


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



const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, isAuth: action.isAuth, userData: action.userData ? action.userData : { email: null, id: null, login: null } }
        }
        case SET_CAPTCHA: {
            return { ...state, captcha: action.captcha }
        }
        case SET_ERROR_MESSAGE: {
            return { ...state, errorMessage: action.errorMessage }
        }
        default: return state
    }
}



export const authActions = {
    setUserData: (isAuth: boolean, userData: UserDataType | null) => ({ type: SET_USER_DATA, isAuth, userData } as const),
    setCaptcha: (captcha: string | null) => ({ type: SET_CAPTCHA, captcha } as const),
    setErrorMessage: (errorMessage: string | null) => ({ type: SET_ERROR_MESSAGE, errorMessage } as const)
}




export const userAuthorizing = (): ThunkType => async dispatch => {
    const res = await authAPI.isUserAuthorized()
    if (res.resultCode === 0) {
        dispatch(authActions.setUserData(true, res.data));
        dispatch(getProfile(res.data.id));
        dispatch(getStatus(res.data.id));
    } else {
        dispatch(authActions.setUserData(false, null));
    }
}


export const logout = (): ThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(authActions.setUserData(false, null));
        dispatch(profileActions.setProfile(null));
        dispatch(profileActions.setStatus(""));
    }
}



export const login = (loginData: LoginDataType): ThunkType => async dispatch => {
    const res = await authAPI.login(loginData)
    if (res.resultCode === 0) {
        dispatch(userAuthorizing());
        dispatch(authActions.setErrorMessage(null));
        dispatch(authActions.setCaptcha(null))
    } else if (res.resultCode === 10) {
        dispatch(authActions.setErrorMessage(res.messages[0]))
        const captchaRes = await authAPI.getCaptcha()
        dispatch(authActions.setCaptcha(captchaRes.url))
    }
}


export default authReducer;



type InitialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof authActions>
type ThunkType = CommonThunkCreatorType<ActionsType | ProfileActionsType>