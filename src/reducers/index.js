import { combineReducers } from 'redux';
import post from './post';
// TODO: add users
// import users from './users';

const message = combineReducers({
    post
})

export default message;