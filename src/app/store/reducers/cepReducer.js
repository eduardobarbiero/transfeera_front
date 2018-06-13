import { CEPS } from 'store/actions/cepAction';

const initialState = {
    ceps: []
};

export function cepReducer(state = initialState, action) {
    switch (action.type) {
        case CEPS:
            return { ...state, ceps: action.ceps };            
        default:
            return state;
    }
}