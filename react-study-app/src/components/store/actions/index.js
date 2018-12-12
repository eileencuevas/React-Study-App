import axios from 'axios';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const url = 'https://lambda-study-app.herokuapp.com/api/';

export const fetchPosts = () => dispatch => {
    dispatch({ type: FETCH_POSTS_START });
    axios
        .get(`${url}posts`)
        .then(response => {
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_POSTS_FAILURE, payload: error})
        });
}