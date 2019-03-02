import { call, put } from 'redux-saga/effects';
import api from '../api/feed';
import { interestingReadSuccessAction, interestingReadFailAction } from "../actions/InterestingAction";

export function* interestingReadSaga(action) {
    try {
        const resp = yield call(api.feed.interesting, action.payload.newsId);

        if(Array.isArray(resp)) {
            console.log('Inside interestingReadSaga', action, resp);
            yield put(interestingReadSuccessAction(resp));
        } else {
            yield put(interestingReadFailAction(resp));
        }
    } catch (err) {
        console.log('error', err);
        yield put(interestingReadFailAction(err));
    }
}
