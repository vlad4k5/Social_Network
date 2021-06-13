const ADD_NEW_MESSAGE = "auth-reducer/ADD_NEW_MESSAGE";

type UserDialogType = {
    userName: string
    id: number
}
let initialState = {
    users: [
        { userName: "Dmitry", id: 1 },
        { userName: "Alexander", id: 2 },
        { userName: "Vladimir", id: 3 },
        { userName: "Konstantin", id: 4 },
        { userName: "Maxim", id: 5 }] as Array<UserDialogType>,
    messages: ["Hello, my name is Dmitry", "What's up?", "How old are you?", "Where are you from?", "Nice to meet you! :)"] as Array<string>
}
type InitialStateType = typeof initialState;


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return { ...state, messages: [...state.messages, action.message] }
        }
        default: return state
    }
}



type ActionsType = AddNewMessageActionType

type AddNewMessageActionType = {
    type: typeof ADD_NEW_MESSAGE
    message: string
}
export const addNewMessage = (message: string): AddNewMessageActionType => ({ type: ADD_NEW_MESSAGE, message });




export default dialogsReducer;
