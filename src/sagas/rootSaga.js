import { NEWS_READ  } from '../types/News';
import { INTERESTING_READ  } from '../types/Interesting';
import { takeLatest} from 'redux-saga/effects';

import { newsReadSaga } from "./newsSagas";
import { interestingReadSaga } from "./interestingSagas";


export default function* rootSaga() {
    yield takeLatest(NEWS_READ, newsReadSaga);
    yield takeLatest(INTERESTING_READ, interestingReadSaga);
}
