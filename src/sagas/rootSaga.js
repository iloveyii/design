import { NEWS_READ, NEWS_READ_SUCCESS, NEWS_READ_FAIL } from '../types/News';
import { takeLatest} from 'redux-saga/effects';

import { newsReadSaga } from "./newsSagas";


export default function* rootSaga() {
    yield takeLatest(NEWS_READ, newsReadSaga);
}
