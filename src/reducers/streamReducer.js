import { START_STREAM, STOP_STREAM } from '../actions'

const streamReducer = function(state = null, action) {
    switch(action.type) {
        case START_STREAM:
            return action.payload
        case STOP_STREAM: 
            return action.payload
        default:
            return state
    }
}

export { streamReducer }