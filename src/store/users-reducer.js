import { usersAPI } from "../api/api";


const SET_USERS = "users-reducer/SET_USERS";


let initialState = {
    users: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users, totalUsersCount: action.totalUsersCount }
        }
        default: return state
    }
}


const setUsers = (users, totalUsersCount) => ({ type: SET_USERS, users, totalUsersCount });


export const getUsers = (count, page) => dispatch => {
    debugger
    usersAPI.getUsers(count, page)
        .then(response => {
            debugger
            if (response.status === 200) {
                dispatch(setUsers(response.data.items, response.data.totalCount));
            }
        })
}



export default usersReducer;
