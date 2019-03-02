import { INTERESTING_READ, INTERESTING_READ_SUCCESS, INTERESTING_READ_FAIL } from '../types/Interesting';

export const interestingReadAction = (newsId) => {
    console.log('Inside interestingReadAction');
    return {
        type: INTERESTING_READ,
        payload: {
            newsId
        }
    }
};

export const interestingReadSuccessAction = (interesting) => {
    return {
        type: INTERESTING_READ_SUCCESS,
        payload: {
            interesting
        }
    }
};

export const interestingReadFailAction = () => {
    return {
        type: INTERESTING_READ_FAIL,
        payload: {}
    }
};
