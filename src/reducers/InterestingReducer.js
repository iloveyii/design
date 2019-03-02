import { INTERESTING_READ_SUCCESS } from '../types/Interesting';

const initState = [];

const InterestingReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case INTERESTING_READ_SUCCESS:
            console.log('Inside InterestingReducer', action.payload);
            return action.payload.interesting;
        default:
            return state;
    }
};

export default InterestingReducer;
