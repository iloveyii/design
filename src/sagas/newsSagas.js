import { call, put } from 'redux-saga/effects';
import api from '../api/feed';
import { newsReadSuccessAction, newsReadFailAction } from "../actions/NewsAction";

export function* newsReadSaga(action) {
    try {
        const resp = yield call(api.feed.news, action.payload.newsId);

        if(Array.isArray(resp)) {
            yield put(newsReadSuccessAction(resp));
        } else {
            yield put(newsReadFailAction(resp));
        }
    } catch (err) {
        console.log('error', err);
        yield put(newsReadFailAction(err));
    }
}
