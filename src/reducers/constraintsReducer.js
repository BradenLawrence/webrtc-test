

const defaultState = {
    video: {
        width:  800,
        height: 600
    },
    audio:  false
}

const constraintsReducer = function(state = defaultState, action) {
    switch(action.type) {
        default:
            return state
    }
}

export { constraintsReducer }