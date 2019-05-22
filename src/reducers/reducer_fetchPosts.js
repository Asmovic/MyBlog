import _ from 'lodash';
import {
    FETCH_POSTS,
    CREATE_POST,
    FETCH_POST,
    DELETE_POST,
} from '../actions/index';

const INITIAL_STATE = {
    all: [],
    post: null,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            /* return _.mapKeys(action.payload.data, 'id'); */
            return { ...state, all: action.payload.data };
        case FETCH_POST:
            /* return [action.payload.data, ...state]; */

            /*  return { ...state, [action.payload.data.id]: action.payload.data }; */
            return { ...state, post: action.payload.data };
        /*             const post = action.payload.data;
            const newState = { ...state };
            newState[post.id] = post;
            return newState;
 */
        case DELETE_POST:
            const { id } = action.payload;
            return _.omit(state, id);
        default:
            return state;
    }
}
