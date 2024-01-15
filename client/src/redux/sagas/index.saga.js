import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../action/index.action.js";
import * as api from "../../API/index.API.js";

function* fetchPostSaga(action) {
  const posts = yield call(api.fetchPosts);
  console.log(`[posts]`, posts);
  yield put(actions.getPosts.getPostsSuccess(posts));
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

export default mySaga;
