import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import profileReducer from "./profile-reducer"
import authReducer from "./auth-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer"


const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    users: usersReducer,
    dialogs: dialogsReducer
});
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>





type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>





const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;