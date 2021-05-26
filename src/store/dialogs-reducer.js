


const ADD_NEW_MESSAGE = "auth-reducer/ADD_NEW_MESSAGE";


let initialState = {
    users: [
        { userName: "Dmitry", id: 1 },
        { userName: "Alexander" },
        { userName: "Vladimir", id: 3 },
        { userName: "Konstantin", id: 4 },
        { userName: "Maxim", id: 5 }],
    messages: ["Hello, my name is Dmitry", "What's up?", "how old are you?", "where are you from?", "Nice to meet you! :)"]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return { ...state, messages: [...state.messages, action.message] }
        }
        default: return state
    }
}


export const addNewMessage = (message) => ({ type: ADD_NEW_MESSAGE, message });




export default dialogsReducer;
