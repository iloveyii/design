import { call, put } from 'redux-saga/effects';
import api from '../api/feed';
import { mazahiaReadSuccessAction, mazahiaReadFailAction } from "../actions/MazahiaAction";

export function* mazahiaReadSaga(action) {
    try {
        const resp = yield call(api.feed.mazahia, action.payload.newsId);

        if(Array.isArray(resp)) {
            console.log('Inside mazahiaReadSaga', action, resp);
            yield put(mazahiaReadSuccessAction(resp));
        } else {
            yield put(mazahiaReadFailAction(resp));
        }
    } catch (err) {
        console.log('error', err);
        yield put(mazahiaReadFailAction(err));
    }
}
