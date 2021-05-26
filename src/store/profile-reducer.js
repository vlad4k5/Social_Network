import { profileAPI } from "../api/api"

const SET_PROFILE = "profile-reducer/SET_PROFILE"
const SET_STATUS = "profile-reducer/SET_STATUS"
const SET_PHOTO = "profile-reducer/SET_PHOTO"
const ADD_NEW_POST = "profile-reducer/ADD_NEW_POST"


let initialState = {
    status: null,
    profileInfo: null,
    posts: [
        { id: 1, message: "My first post", likesCount: 190 },
        { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", likesCount: 21 },
        { id: 3, message: "Just an example", likesCount: 16 },
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return { ...state, profileInfo: { ...state.profileInfo, ...action.profileInfo } }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_PHOTO: {
            debugger
            return { ...state, profileInfo: { ...state.profileInfo, photos: action.photos } }
        }
        case ADD_NEW_POST: {
            let newPost = { id: state.posts.lengtg + 1, message: action.postText, likesCount: 0 }
            return { ...state, posts: [...state.posts, newPost] }
        }
        default: return state
    }
}


export const setProfile = (profileInfo) => ({ type: SET_PROFILE, profileInfo });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setPhoto = (photos) => ({ type: SET_PHOTO, photos });
export const addNewPost = (postText) => ({ type: ADD_NEW_POST, postText });



export const getProfile = (userId) => dispatch => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setProfile(response.data))
        })

}

export const updateProfile = (profile) => dispatch => {
    profileAPI.setProfile(profile)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfile(profile))
            }
        })

}


export const getStatus = (userId) => dispatch => {
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

export const updateStatus = (status) => dispatch => {
    profileAPI.setStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

}


export const updatePhoto = (photoFile) => dispatch => {
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