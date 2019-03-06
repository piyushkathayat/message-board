import ActionTypes from '../actions/ActionTypes';

const post = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            // console.log("ADD_POST");
            return [...state, action.post];
        case ActionTypes.DELETE_POST:
            // console.log("DELETE_POST");
            return state.filter(message => message.id !== action.id);
        case ActionTypes.EDIT_POST:
            console.log("EDIT_POST - Check when we have reply.");
            const { detail } = action;
            return state.map(message => {
                return (message.id === detail.id) ?
                    { ...message, message: detail.message } : message
            })
        case ActionTypes.UPDATE_POST:
            // add reply to message 
            console.log("UPDATE_POST")
            return state;
        default:
            return state;
    }
}
export default post;
