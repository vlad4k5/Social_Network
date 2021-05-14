import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "../store/profile-reducer"

const reducers = combineReducers({
    profile: profileReducer
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;