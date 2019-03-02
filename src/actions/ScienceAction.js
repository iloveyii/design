import { SCIENCE_READ, SCIENCE_READ_SUCCESS, SCIENCE_READ_FAIL } from '../types/Science';

export const scienceReadAction = (newsId) => {
    console.log('Inside scienceReadAction');
    return {
        type: SCIENCE_READ,
        payload: {
            newsId
        }
    }
};

export const scienceReadSuccessAction = (science) => {
    return {
        type: SCIENCE_READ_SUCCESS,
        payload: {
            science
        }
    }
};

export const scienceReadFailAction = () => {
    return {
        type: SCIENCE_READ_FAIL,
        payload: {}
    }
};
