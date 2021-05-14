import { profileAPI } from "../api/api"

const SET_PROFILE = "profile-reducer/SET_PROFILE"
const SET_STATUS = "profile-reducer/SET_STATUS"


let initialState = {
    status: null,
    profileInfo: null,
    posts: [
        { id: 1, message: "My first post", likesCount: 190 },
        { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", likesCount: 190 },
        { id: 3, message: "Just example", likesCount: 190 },
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: return { ...state, profileInfo: action.profileInfo }
        case SET_STATUS: return { ...state, status: action.status }
        default: return state
    }
}


const setProfile = (profileInfo) => ({ type: SET_PROFILE, profileInfo });
const setStatus = (status) => ({ type: SET_STATUS, status });



export const getProfile = (userId) => dispatch => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setProfile(response.data))
        })

}
export const getStatus = (userId) => dispatch => {
    debugger
    profileAPI.getStatus(userId)
        .then(response => {
            debugger
            if (response.status === 200)
                dispatch(setStatus(response.data))
        })

}




export default profileReducer;