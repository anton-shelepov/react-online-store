import { IFetchCategoryProductsRequest, FETCH_CATEGORIES_REQUEST } from './../../../actions/catalogActions/catalogActionsTypes';
import { fetchCategoryProductsFailure, fetchCategoryProductsSuccess, fetchCategoriesSuccess, fetchCategoriesFailure } from './../../../actions/catalogActions/catalogActions';
import { api } from '../../../../api/index';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { FETCH_CATEGORY_PRODUCTS_REQUEST } from '../../../actions/catalogActions/catalogActionsTypes';
import { AxiosResponse } from 'axios';


function* fetchCategoryProductsSaga({ categoryName, queryPage }: IFetchCategoryProductsRequest) {
    try {
        const response: AxiosResponse = yield call(api.catalog.fetchCategoryProducts, categoryName, queryPage)
        if (response?.data?.response?.statusCode === 404) throw new Error(response.data.message)
        yield put(fetchCategoryProductsSuccess(response.data));
    } catch (error: any | unknown) { 
        yield put(
            fetchCategoryProductsFailure(error.message)
        );
    }
}

function* fetchCategoriesSaga() {
    try {
        const response: AxiosResponse = yield call(api.catalog.fetchCategories)
        yield put(fetchCategoriesSuccess(response.data))
    } catch (error) {
        fetchCategoriesFailure(error)
    }
}

function* catalogSaga(): Generator<StrictEffect> {
    yield takeLatest(FETCH_CATEGORY_PRODUCTS_REQUEST, fetchCategoryProductsSaga)
    yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga)
}

export default catalogSaga
