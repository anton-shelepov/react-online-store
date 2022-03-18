import { FETCH_CATEGORIES_REQUEST } from './../../../actions/catalogActions/catalogActionsTypes';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from './../../../actions/catalogActions/catalogActions';
import { ICreateCategoryRequest } from './../../../actions/adminActions/adminActionsTypes';
import { api } from '../../../../api/index';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import { CREATE_CATEGORY_REQUEST } from '../../../actions/adminActions/adminActionsTypes';


function* createCategoryRequestSaga({ formData }: ICreateCategoryRequest) {
    try {
        const response: AxiosResponse = yield call(api.admin.createCategory, formData)
        yield put(fetchCategoriesSuccess(response.data));

    } catch (error) {
        yield put(fetchCategoriesFailure(error));
    }
}

function* adminSaga(): Generator<StrictEffect> {
    yield takeLatest(CREATE_CATEGORY_REQUEST, createCategoryRequestSaga)
} 

export default adminSaga
