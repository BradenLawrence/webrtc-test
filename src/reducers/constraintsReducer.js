import { SET_CONSTRAINTS }  from '../actions'

const defaultState = {
    video: {
        width:  { ideal: 800 },
        height: { ideal: 600 }
    },
    audio:  false
}

const constraintsReducer = function(state = defaultState, action) {
    switch(action.type) {
        case SET_CONSTRAINTS:
            const newConstraints =  { ...state, ...action.payload }
            console.log(newConstraints)
            return newConstraints
        default:
            return state
    }
}

export { constraintsReducer }