import ActionTypes from './ActionTypes';

export const addPost = (detail) => {
    // console.log("AT - ADDPost", detail);
    return {
        type: ActionTypes.ADD_POST,
        post: detail
    }
}

export const deletePost = (id) => {
    console.log("AT - DeletePost", id);
    return {
        type: ActionTypes.DELETE_POST,
        id
    }
}

export const editPost = (detail) => {
    console.log("AT - EditPost");
    return {
        type: ActionTypes.EDIT_POST,
        detail
    }
}

export const updatePost = (detail) => {
    console.log("AT - updatePost");
    return {
        type: ActionTypes.UPDATE_POST,
        detail
    }
}
