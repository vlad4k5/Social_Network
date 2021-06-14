import { InferActionTypes } from './store';
import { Dispatch } from "redux";
import { authAPI } from "../api/api"
import { getProfile, getStatus, setProfile, setStatus } from "./profile-reducer";
import { LoginDataType, UserDataType } from "./types/types";





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

type ActionsType = InferActionTypes<typeof actions>

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return { ...state, isAuth: action.isAuth, userData: action.userData ? action.userData : { email: null, id: null, login: null } }
        }
        case 'SET_CAPTCHA': {
            return { ...state, captcha: action.captcha }
        }
        case 'SET_ERROR_MESSAGE': {
            debugger
            return { ...state, errorMessage: action.errorMessage }
        }
        default: return state
    }
}




const actions = {
    setUserData: (isAuth: boolean, userData: UserDataType | null) => ({ type: 'SET_USER_DATA', isAuth, userData } as const),
    setCaptcha: (captcha: string) => ({ type: 'SET_CAPTCHA', captcha } as const),
    setErrorMessage: (errorMessage: string | null) => ({ type: 'SET_ERROR_MESSAGE', errorMessage } as const)
}



// type TDispatch = Dispatch<ActionsType>

export const userAuthorizing = () => (dispatch: any) => {
    authAPI.isUserAuthorized()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(actions.setUserData(true, response.data));
                dispatch(getProfile(response.data.id));
                dispatch(getStatus(response.data.id));
            } else {
                dispatch(actions.setUserData(false, null));
            }
        })
}


export const logout = () => (dispatch: any) => {
    debugger
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(actions.setUserData(false, null));
                dispatch(setProfile(null));
                dispatch(setStatus(null));
            }
        })
}



export const login = (loginData: LoginDataType) => (dispatch: any) => {
    debugger
    authAPI.login(loginData)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(userAuthorizing());
                dispatch(actions.setErrorMessage(null));
            } else if (response.resultCode === 10) {
                dispatch(actions.setErrorMessage(response.messages[0]))
                authAPI.getCaptcha()
                    .then(res => {
                        debugger
                        dispatch(actions.setCaptcha(res.url))
                    })
            }
        })
}


export default authReducer;