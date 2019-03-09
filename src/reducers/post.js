import ActionTypes from '../actions/ActionTypes';

const addRepliesToMessages = (messages) => {
    const parents = messages.filter(message => message.parentId === null);
    parents.forEach(parent => {
        const parentId = parent.id;
        // check if message belongs to parent.
        messages.forEach(message => {
            if (message.parentId === parentId) {
                parent.reply.push(message);
            }
            return message;
        })
    })
    return messages.filter(message => message.parentId === null);
};

const post = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST:
            return [...state, action.post];
        case ActionTypes.DELETE_POST:
            return state.filter(message => message.id !== action.id);
        case ActionTypes.EDIT_POST:
            const { detail } = action;
            return state.map(message => {
                return (message.id === detail.id) ?
                    { ...message, message: detail.message } : message
            })
        case ActionTypes.UPDATE_POST:
            const allMessage = [...state, action.detail];
            // Same as API Response : allMessage
            // console.log('[All messages]', allMessage);
            return addRepliesToMessages(allMessage);
        default:
            return state;
    }
}
export default post;
