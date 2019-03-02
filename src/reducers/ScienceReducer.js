import { SCIENCE_READ_SUCCESS } from '../types/Science';

const initState = [];

const ScienceReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case SCIENCE_READ_SUCCESS:
            console.log('Inside ScienceReducer', action.payload);
            return action.payload.science;
        default:
            return state;
    }
};

export default ScienceReducer;
