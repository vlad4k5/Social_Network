import { profileAPI } from "../api/profile-api"
import { InferActionTypes } from "./store"
import { CommonThunkCreatorType, PhotosType, PostType, ProfileInfoType } from "./types/types"

const SET_PROFILE = "SN/PROFILE/SET_PROFILE"
const SET_STATUS = "SN/PROFILE/SET_STATUS"
const SET_PHOTO = "SN/PROFILE/SET_PHOTO"
const ADD_NEW_POST = "SN/PROFILE/ADD_NEW_POST"



let initialState = {
    status: "",
    profileInfo: null as ProfileInfoType | null,
    posts: [
        { id: 1, message: "My first post", likesCount: 190 },
        { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", likesCount: 21 },
        { id: 3, message: "Just an example", likesCount: 16 },
    ] as Array<PostType>
}


const profileReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE: {
            return { ...state, profileInfo: action.profileInfo }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_PHOTO: {
            return { ...state, profileInfo: { ...state.profileInfo, photos: action.photos } as ProfileInfoType }
        }
        case ADD_NEW_POST: {
            let newPost = { id: state.posts.length + 1, message: action.postText, likesCount: 0 }
            return { ...state, posts: [...state.posts, newPost] }
        }
        default: return state
    }
}


export const profileActions = {
    setProfile: (profileInfo: ProfileInfoType | null) => ({ type: SET_PROFILE, profileInfo } as const),
    setStatus: (status: string) => ({ type: SET_STATUS, status } as const),
    setPhoto: (photos: PhotosType) => ({ type: SET_PHOTO, photos } as const),
    addNewPost: (postText: string) => ({ type: ADD_NEW_POST, postText } as const)
}




export const getProfile = (userId: number): ThunkType => async dispatch => {
    const res = await profileAPI.getProfile(userId)

    dispatch(profileActions.setProfile(res))
}

export const updateProfile = (profileInfo: ProfileInfoType): ThunkType => async dispatch => {
    const res = await profileAPI.setProfile(profileInfo)

    if (res.resultCode === 0) {
        dispatch(profileActions.setProfile(profileInfo))
    }
}


export const getStatus = (userId: number): ThunkType => async dispatch => {
    const res = await profileAPI.getStatus(userId)
    if (res === null) {
        dispatch(profileActions.setStatus(""))
    } else {
        dispatch(profileActions.setStatus(res))
    }
}

export const updateStatus = (status: string): ThunkType => async dispatch => {
    const res = await profileAPI.setStatus(status)
    if (res.resultCode === 0) {
        dispatch(profileActions.setStatus(status))
    }
}


export const updatePhoto = (photoFile: File): ThunkType => async dispatch => {
    const res = await profileAPI.setUserImage(photoFile)
    if (res.resultCode === 0) {
        dispatch(profileActions.setPhoto(res.data.photos))
    }
}


export default profileReducer;


type InitialStateType = typeof initialState;
export type ProfileActionsType = InferActionTypes<typeof profileActions>
type ThunkType = CommonThunkCreatorType<ProfileActionsType>