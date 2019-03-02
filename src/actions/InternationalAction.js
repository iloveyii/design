import { INTERNATIONAL_READ, INTERNATIONAL_READ_SUCCESS, INTERNATIONAL_READ_FAIL } from '../types/International';

export const internationalReadAction = (newsId) => {
    console.log('Inside internationalReadAction');
    return {
        type: INTERNATIONAL_READ,
        payload: {
            newsId
        }
    }
};

export const internationalReadSuccessAction = (international) => {
    return {
        type: INTERNATIONAL_READ_SUCCESS,
        payload: {
            international
        }
    }
};

export const internationalReadFailAction = () => {
    return {
        type: INTERNATIONAL_READ_FAIL,
        payload: {}
    }
};
