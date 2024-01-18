import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../action/index.action.js";
import * as api from "../../API/index.API.js";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log(`[posts]`, posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPosts);
    console.log(`createPostSaga - [post]`, post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPosts.createPostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
}

export default mySaga;
