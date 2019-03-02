import { call, put } from 'redux-saga/effects';
import api from '../api/interesting';
import { newsReadSuccessAction, newsReadFailAction } from "../actions/NewsAction";

export function* newsReadSaga(action) {
    try {
        const resp = yield call(api.feed.interesting, action.payload.newsId);

        if(Array.isArray(resp)) {
            console.log('resp', resp);
            yield put(newsReadSuccessAction(resp));
        } else {
            yield put(newsReadFailAction(resp));
        }
    } catch (err) {
        console.log('error', err);
        yield put(newsReadFailAction(err));
    }
}
