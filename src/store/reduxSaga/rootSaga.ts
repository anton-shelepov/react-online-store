import { all, fork } from "redux-saga/effects";
import authSaga from "./sagas/authSaga/authSaga";

export function* rootSaga() {
    yield all([fork(authSaga)]);
}
