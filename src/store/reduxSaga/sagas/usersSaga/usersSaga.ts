import { FETCH_ALL_USERS_REQUEST } from './../../../actions/usersActions/usersActionsTypes';
import { fetchCategoryProductsFailure } from '../../../actions/catalogActions/catalogActions';
import { api } from '../../../../api/index';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import { fetchAllUsersSuccess } from '../../../actions/usersActions/usersActions';


function* fetchAllUsersSaga() {
    try {
        const response: AxiosResponse = yield call(api.users.fetchAllUsers)
        yield put(fetchAllUsersSuccess(response.data));
    } catch (error) {
        yield put(
            fetchCategoryProductsFailure({ error })
        );
    }
}

function* usersSaga(): Generator<StrictEffect> {
    yield takeLatest(FETCH_ALL_USERS_REQUEST, fetchAllUsersSaga)
}

export default usersSaga
