import { all, call, put, takeLatest } from "redux-saga/effects"; 
import { api } from "../../../../api";


function* fetchUserSignin() {
    // try {
    //     const response = yield call(api.auth.setUserSignin());
    //     yield put(
    //         fetchPostsSuccess({
    //             jwt_token: response.data
    //         })
    //     );
    // } catch (e) {
    //     yield put(
    //         fetchPostsFailure({
    //             error: e.message
    //         })
    //     );
    // }
}

function* authSaga() {
    // yield all([takeLatest(FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default authSaga;
