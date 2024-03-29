import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (error) => error,
});

export const createPost = createActions({
  createPostRequest: (padload) => padload,
  createPostSuccess: (payload) => payload,
  createPostFailure: (error) => error,
});

export const updatePost = createActions({
  updatePostRequest: (padload) => padload,
  updatePostSuccess: (payload) => payload,
  updatePostFailure: (error) => error,
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");
