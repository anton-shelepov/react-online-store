import { api } from '../../../../api/index';
import { userSigninSuccess, userSigninFailure, userSignupRequest, userSignupSuccess, userSignupFailure, userSigninRequest } from '../../../actions/authActions/authActions';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { IUserSigninRequest, IUserSignupRequest, USER_SIGNIN_REQUEST, USER_SIGNUP_REQUEST } from "../../../actions/authActions/authActionsTypes";
import { AxiosResponse } from 'axios';


function* userSigninRequestSaga({ formData }: IUserSigninRequest) {
    try {
        const response: AxiosResponse = yield call(api.auth.userSignin, formData) 
        yield put(userSigninSuccess(response.data.access_token));

    } catch (error) {
        yield put(userSigninFailure(error));
    }
}

function* userSignupRequestSaga({ formData }: IUserSignupRequest) {
    try {
        const response: AxiosResponse = yield call(api.auth.userSignup, formData)
        yield put(userSignupSuccess(response.data));

    } catch (error) {
        yield put(userSignupFailure(error));
    }
}

function* adminSaga(): Generator<StrictEffect> {
    yield takeLatest(USER_SIGNIN_REQUEST, userSigninRequestSaga)
    yield takeLatest(USER_SIGNUP_REQUEST, userSignupRequestSaga)
}

export default adminSaga
