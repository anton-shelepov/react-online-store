import { all, fork } from "redux-saga/effects";
import adminSaga from "./sagas/adminSaga/adminSaga";
import authSaga from "./sagas/authSaga/authSaga";
import catalogSaga from "./sagas/catalogSaga/catalogSaga";

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(catalogSaga),
        fork(adminSaga),
    ]);
}