import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../store"

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileInfoType = {
    fullName: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}



export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type UserDataType = {
    email: string | null
    id: number | null
    login: string | null
}
export type UserDialogType = {
    userName: string
    id: number
}



export type LoginDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
    captcha: string | null
}


export type CommonThunkCreatorType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>