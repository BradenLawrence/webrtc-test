

// const defaultState = {
//     video: true,
//     audio:  false
// }

const defaultState = {
    video: {
        width:  { ideal: 800 },
        height: { ideal: 600 }
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