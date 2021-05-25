import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "../store/profile-reducer"
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    users: usersReducer
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;