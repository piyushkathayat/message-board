import ActionTypes from './ActionTypes';

export const getPost = () => {
    return {
        type: ActionTypes.GET_POST
    }
};

export const addPost = (detail) => {
    return {
        type: ActionTypes.ADD_POST,
        post: detail
    }
}

export const deletePost = (id) => {
    return {
        type: ActionTypes.DELETE_POST,
        id
    }
}

export const editPost = (detail) => {
    return {
        type: ActionTypes.EDIT_POST,
        detail
    }
}

export const updatePost = (detail) => {
    return {
        type: ActionTypes.UPDATE_POST,
        detail
    }
}
