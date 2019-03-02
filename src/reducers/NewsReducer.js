import { NEWS_READ_SUCCESS } from '../types/News';

const initState = [];

const NewsReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case NEWS_READ_SUCCESS:
            return action.payload.news;
        default:
            return state;
    }
};

export default NewsReducer;
