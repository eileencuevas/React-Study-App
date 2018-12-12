import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions';

const initialState = {
    posts: [],
    fetchingPosts: false,
    error: null,
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_START:
            return {
                ...state,
                fetchingPosts: true,
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                fetchingPosts: false,
                error: null,
                posts: action.payload,
            }
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                fetchingPosts: false,
                error: action.payload,
            }
        default:
            return state;
    }
}