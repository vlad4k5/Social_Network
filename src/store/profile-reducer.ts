import { Dispatch } from "redux"
import { profileAPI } from "../api/api"
import { InferActionTypes } from "./store"
import { PhotosType, PostType, ProfileInfoType } from "./types/types"



let initialState = {
    status: "",
    profileInfo: null as ProfileInfoType | null,
    posts: [
        { id: 1, message: "My first post", likesCount: 190 },
        { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", likesCount: 21 },
        { id: 3, message: "Just an example", likesCount: 16 },
    ] as Array<PostType>
}
type InitialStateType = typeof initialState;


type ActionsType = InferActionTypes<typeof profileActions>

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_PROFILE': {
            return { ...state, profileInfo: action.profileInfo }    // refactoring from profileInfo : {...state.profileInfo, ...actionProfileInfo}
        }
        case 'SET_STATUS': {
            return { ...state, status: action.status }
        }
        case 'SET_PHOTO': {
            return { ...state, profileInfo: { ...state.profileInfo, photos: action.photos } as ProfileInfoType } // !!!!!!!!!!!
        }
        case 'ADD_NEW_POST': {
            let newPost = { id: state.posts.length + 1, message: action.postText, likesCount: 0 }
            return { ...state, posts: [...state.posts, newPost] }
        }
        default: return state
    }
}


export const profileActions = {
    setProfile: (profileInfo: ProfileInfoType | null) => ({ type: 'SET_PROFILE', profileInfo } as const),
    setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),
    setPhoto: (photos: PhotosType) => ({ type: 'SET_PHOTO', photos } as const),
    addNewPost: (postText: string) => ({ type: 'ADD_NEW_POST', postText } as const)
}





type DispatchType = Dispatch<ActionsType>

export const getProfile = (userId: number) => (dispatch: DispatchType) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(profileActions.setProfile(response))
        })

}

export const updateProfile = (profileInfo: ProfileInfoType) => (dispatch: DispatchType) => {
    profileAPI.setProfile(profileInfo)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(profileActions.setProfile(profileInfo))
            }
        })

}


export const getStatus = (userId: number) => (dispatch: DispatchType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            if (response === null) {
                dispatch(profileActions.setStatus(""))
            } else {
                dispatch(profileActions.setStatus(response))
            }
        })
}

export const updateStatus = (status: string) => (dispatch: DispatchType) => {
    profileAPI.setStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(profileActions.setStatus(status))
            }
        })
}


export const updatePhoto = (photoFile: any) => (dispatch: DispatchType) => {
    profileAPI.setUserImage(photoFile)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(profileActions.setPhoto(response.data.photos))
            }
        })

}


export default profileReducer;