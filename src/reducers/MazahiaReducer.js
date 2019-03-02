import { MAZAHIA_READ_SUCCESS } from '../types/Mazahia';

const initState = [];

const MazahiaReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case MAZAHIA_READ_SUCCESS:
            console.log('Inside MazahiaReducer', action.payload);
            return action.payload.mazahia;
        default:
            return state;
    }
};

export default MazahiaReducer;
