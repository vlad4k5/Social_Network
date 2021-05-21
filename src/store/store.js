import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "../store/profile-reducer"
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;