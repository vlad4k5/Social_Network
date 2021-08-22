import { applyMiddleware, combineReducers, compose, createStore } from "redux"
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
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never



const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));

export default store;