import { all, fork } from "redux-saga/effects";
import adminSaga from "./sagas/adminSaga/adminSaga";
import authSaga from "./sagas/authSaga/authSaga";
import catalogSaga from "./sagas/catalogSaga/catalogSaga";
import homeSaga from "./sagas/homeSaga/homeSaga";
import usersSaga from "./sagas/usersSaga/usersSaga";

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(catalogSaga),
        fork(adminSaga),
        fork(usersSaga),
        fork(homeSaga),
    ]);
}