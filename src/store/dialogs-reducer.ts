import { InferActionTypes } from "./store";
import { UserDialogType } from "./types/types";

const ADD_NEW_MESSAGE = "SN/DIALOGS/ADD_NEW_MESSAGE";

let initialState = {
    users: [
        { userName: "Dmitry", id: 1 },
        { userName: "Alexander", id: 2 },
        { userName: "Vladimir", id: 3 },
        { userName: "Konstantin", id: 4 },
        { userName: "Maxim", id: 5 }] as Array<UserDialogType>,
    messages: ["Hello, my name is Dmitry", "What's up?", "How old are you?", "Where are you from?", "Nice to meet you! :)"] as Array<string>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return { ...state, messages: [...state.messages, action.message] }
        }
        default: return state
    }
}

export const dialogsActions = {
    addNewMessage: (message: string) => ({ type: ADD_NEW_MESSAGE, message } as const)
}

export default dialogsReducer;

type InitialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof dialogsActions>