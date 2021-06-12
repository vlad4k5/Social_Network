import { profileAPI } from "../api/api"
import { PhotosType, PostType, ProfileInfoType } from "./types/types"

const SET_PROFILE = "profile-reducer/SET_PROFILE"
const SET_STATUS = "profile-reducer/SET_STATUS"
const SET_PHOTO = "profile-reducer/SET_PHOTO"
const ADD_NEW_POST = "profile-reducer/ADD_NEW_POST"


let initialState = {
    status: null as string | null,
    profileInfo: null as ProfileInfoType | null,
    posts: [
        { id: 1, message: "My first post", likesCount: 190 },
        { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", likesCount: 21 },
        { id: 3, message: "Just an example", likesCount: 16 },
    ] as Array<PostType>
}
type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE: {
            return { ...state, profileInfo: { ...state.profileInfo, ...action.profileInfo } }
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

type SetProfileActionType = {
    type: typeof SET_PROFILE
    profileInfo: ProfileInfoType | null
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string | null
}
type SetPhotoActionType = {
    type: typeof SET_PHOTO
    photos: PhotosType
}
type AddNewPostActionType = {
    type: typeof ADD_NEW_POST
    postText: string
}

export const setProfile = (profileInfo: ProfileInfoType | null): SetProfileActionType => ({ type: SET_PROFILE, profileInfo });
export const setStatus = (status: string | null): SetStatusActionType => ({ type: SET_STATUS, status });
export const setPhoto = (photos: PhotosType): SetPhotoActionType => ({ type: SET_PHOTO, photos });
export const addNewPost = (postText: string): AddNewPostActionType => ({ type: ADD_NEW_POST, postText });



export const getProfile = (userId: number) => (dispatch: any) => {
    profileAPI.getProfile(userId)
        .then(response => {
            debugger
            dispatch(setProfile(response.data))
        })

}

export const updateProfile = (profileInfo: ProfileInfoType) => (dispatch: any) => {
    profileAPI.setProfile(profileInfo)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfile(profileInfo))
            }
        })

}


export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            if (response.status === 200) {
                if (response.data === null) {
                    dispatch(setStatus("user has no status"))
                } else {
                    dispatch(setStatus(response.data))
                }
            }
        })
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.setStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

}


export const updatePhoto = (photoFile: any) => (dispatch: any) => {
    debugger
    profileAPI.setUserImage(photoFile)
        .then(response => {
            if (response.data.resultCode === 0) {
                debugger
                dispatch(setPhoto(response.data.data.photos))
            }
        })

}


export default profileReducer;