import { STATES } from 'store/actions/stateAction';

const initialState = {
    states: []
};

export function stateReducer(state = initialState, action) {
    switch (action.type) {
        case STATES:
            return { ...state, states: action.states };            
        default:
            return state;
    }
}