import { MAZAHIA_READ, MAZAHIA_READ_SUCCESS, MAZAHIA_READ_FAIL } from '../types/Mazahia';

export const mazahiaReadAction = (newsId) => {
    console.log('Inside mazahiaReadAction');
    return {
        type: MAZAHIA_READ,
        payload: {
            newsId
        }
    }
};

export const mazahiaReadSuccessAction = (mazahia) => {
    return {
        type: MAZAHIA_READ_SUCCESS,
        payload: {
            mazahia
        }
    }
};

export const mazahiaReadFailAction = () => {
    return {
        type: MAZAHIA_READ_FAIL,
        payload: {}
    }
};
