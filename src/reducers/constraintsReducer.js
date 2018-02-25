import { SET_CONSTRAINTS }  from '../actions'

const defaultState = {
    video: true,
    audio:  false
}

const constraintsReducer = function(state = defaultState, action) {
    switch(action.type) {
        case SET_CONSTRAINTS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export { constraintsReducer }