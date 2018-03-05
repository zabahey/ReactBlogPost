import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            // don't want to throw away existing post
            // const post = action.payload.data;
            // const newState =  { ...state };
            // newState[post.id] = post;
            // return newState;

            // ES6
            return { ...state, [action.payload.data.id]: action.payload.data}
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}