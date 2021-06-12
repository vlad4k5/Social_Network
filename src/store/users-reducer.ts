import { usersAPI } from "../api/api";
import { PhotosType, UserType } from "./types/types";

const SET_USERS = "users-reducer/SET_USERS";

type EntireUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | number
}

let initialState = {
    users: null as EntireUsersType | null,
}
type InitialStateType = typeof initialState


const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users, totalUsersCount: action.totalUsersCount } as any
        }
        default: return state
    }
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: UserType
    totalUsersCount: number
}
const setUsers = (users: UserType, totalUsersCount: number): SetUsersActionType => ({ type: SET_USERS, users, totalUsersCount });


export const getUsers = (count: number, page: number) => (dispatch: any) => {
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
