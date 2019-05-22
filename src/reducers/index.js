import { combineReducers } from 'redux';
import fetchPostReducer from './reducer_fetchPosts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: fetchPostReducer,
    form: formReducer,
});

export default rootReducer;
