

const defaultState = {
    video: true,
    audio:  false
}

const constraintsReducer = function(state = defaultState, action) {
    switch(action.type) {
        default:
            return state
    }
}

export { constraintsReducer }