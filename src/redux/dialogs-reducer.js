const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Seva'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Lisa'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Roma'},
        {id: 7, name: 'Masha'},
        {id: 8, name: 'Sasha'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: "What's your name?"},
        {id: 3, message: 'Mau-mau!!!'},
        {id: 4, message: 'Yo!Yo!Yo!'},
        {id: 5, message: 'Mau-mau-mau!!!'},
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return{
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}],
                newMessageText: ''
            }
           // stateCopy.messages.push({id: 6, message: newMessage});
            //stateCopy.newMessageText = '';
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText}
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;