import { NEWS_READ, NEWS_READ_SUCCESS, NEWS_READ_FAIL } from '../types/News';

export const newsReadAction = (newsId) => {
    return {
        type: NEWS_READ,
        payload: {
            newsId
        }
    }
};

export const newsReadSuccessAction = (news) => {
    return {
        type: NEWS_READ_SUCCESS,
        payload: {
            news
        }
    }
};

export const newsReadFailAction = () => {
    return {
        type: NEWS_READ_FAIL,
        payload: {}
    }
};
