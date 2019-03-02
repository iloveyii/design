import { call, put } from 'redux-saga/effects';
import api from '../api/feed';
import { scienceReadSuccessAction, scienceReadFailAction } from "../actions/ScienceAction";

export function* scienceReadSaga(action) {
    try {
        const resp = yield call(api.feed.science, action.payload.newsId);

        if(Array.isArray(resp)) {
            console.log('Inside scienceReadSaga', action, resp);
            yield put(scienceReadSuccessAction(resp));
        } else {
            yield put(scienceReadFailAction(resp));
        }
    } catch (err) {
        console.log('error', err);
        yield put(scienceReadFailAction(err));
    }
}
