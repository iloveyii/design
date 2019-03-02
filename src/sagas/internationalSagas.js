import { call, put } from 'redux-saga/effects';
import api from '../api/feed';
import { internationalReadSuccessAction, internationalReadFailAction } from "../actions/InternationalAction";

export function* internationalReadSaga(action) {
    try {
        const resp = yield call(api.feed.international, action.payload.newsId);

        if(Array.isArray(resp)) {
            console.log('Inside internationalReadSaga', action, resp);
            yield put(internationalReadSuccessAction(resp));
        } else {
            yield put(internationalReadFailAction(resp));
        }
    } catch (err) {
        console.log('error', err);
        yield put(internationalReadFailAction(err));
    }
}
