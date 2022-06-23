import { FETCH_POPULAR_PRODUCTS_REQUEST } from '../../../actions/homeActions/homeActionsTypes';
import { api } from '../../../../api/index';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import { fetchPopularProductsFailure, fetchPopularProductsSuccess } from '../../../actions/homeActions/homeActions';


function* fetchPopularProductsSaga() {
    try {
        const response: AxiosResponse = yield call(api.home.fetchPopularProducts)
        yield put(fetchPopularProductsSuccess(response.data));
    } catch (error) {
        yield put(
            fetchPopularProductsFailure({ error })
        );
    }
}


function* homeSaga(): Generator<StrictEffect> {
    yield takeLatest(FETCH_POPULAR_PRODUCTS_REQUEST, fetchPopularProductsSaga)
}

export default homeSaga
