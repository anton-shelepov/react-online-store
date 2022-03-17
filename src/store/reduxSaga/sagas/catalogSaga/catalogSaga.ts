import { IFetchCategoryProductsRequest } from './../../../actions/catalogActions/catalogActionsTypes';
import { fetchCategoryProductsFailure, fetchCategoryProductsSuccess } from './../../../actions/catalogActions/catalogActions';
import { api } from '../../../../api/index';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { FETCH_CATEGORY_PRODUCTS_REQUEST } from '../../../actions/catalogActions/catalogActionsTypes';
import { AxiosResponse } from 'axios';


function* fetchCategoryProductsSaga({ categoryName, queryPage }: IFetchCategoryProductsRequest) {
    try {
        const response: AxiosResponse = yield call(api.catalog.fetchCategoryProducts, categoryName, queryPage)
        yield put(fetchCategoryProductsSuccess(response.data));
    } catch (error) {
        yield put(
            fetchCategoryProductsFailure({ error })
        );
    }
}

function* catalogSaga(): Generator<StrictEffect> {
    yield takeLatest(FETCH_CATEGORY_PRODUCTS_REQUEST, fetchCategoryProductsSaga)
}

export default catalogSaga
