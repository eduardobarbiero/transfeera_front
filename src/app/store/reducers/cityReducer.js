import { CITIES } from 'store/actions/cityAction';

const initialState = {
    cities: []
};

export function cityReducer(state = initialState, action) {
    switch (action.type) {
        case CITIES:
            return { ...state, cities: action.cities };            
        default:
            return state;
    }
}