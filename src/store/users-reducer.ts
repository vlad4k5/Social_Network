import { InferActionTypes } from './store';
import { usersAPI } from "../api/users-api";
import { CommonThunkCreatorType, UserType } from "./types/types";

const SET_USERS = "SN/USERS/SET_USERS";

type EntireUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | number
}


let initialState = {
    users: null as EntireUsersType | null,
}


const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users, totalUsersCount: action.totalUsersCount } as any
        }
        default: return state
    }
}


export const usersActions = {
    setUsers: (users: Array<UserType>, totalUsersCount: number) => ({ type: SET_USERS, users, totalUsersCount })
}




export const getUsers = (count: number, page: number): ThunkType => async dispatch => {
    const res = await usersAPI.getUsers(count, page)
    if (!res.error) {
        dispatch(usersActions.setUsers(res.items, res.totalCount));
    }
}


export default usersReducer;


type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof usersActions>
type ThunkType = CommonThunkCreatorType<ActionsType>