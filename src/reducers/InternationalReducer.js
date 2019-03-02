import { INTERNATIONAL_READ_SUCCESS } from '../types/International';

const initState = [];

const InterestingReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case INTERNATIONAL_READ_SUCCESS:
            console.log('Inside InterestingReducer', action.payload);
            return action.payload.international;
        default:
            return state;
    }
};

export default InterestingReducer;
