import { NEWS_READ  } from '../types/News';
import { INTERESTING_READ  } from '../types/Interesting';
import {INTERNATIONAL_READ} from "../types/International";

import { takeLatest, takeEvery} from 'redux-saga/effects';

import { newsReadSaga } from "./newsSagas";
import { interestingReadSaga } from "./interestingSagas";
import { internationalReadSaga } from "./internationalSagas";



export default function* rootSaga() {
    yield takeLatest(NEWS_READ, newsReadSaga);
    yield takeLatest(INTERESTING_READ, interestingReadSaga);
    yield takeLatest(INTERNATIONAL_READ, internationalReadSaga);
}
