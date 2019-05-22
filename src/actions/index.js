import React from 'react';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
import axios from 'axios';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asmovic123';

export function fetchPosts() {
    const response = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: response,
    };
}

export function fetchPost(id) {
    const response = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: response,
    };
}

/* export function createPost(values, callback) {
    const response = axios
        .post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: response,
    };
} */

export function createPost(values) {
    const response = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
        type: CREATE_POST,
        payload: response,
    };
}

/* export function deletePost(id, callback) {
    const response = axios
        .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id,
    };
} */
export function deletePost(id) {
    const response = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: response,
    };
}
