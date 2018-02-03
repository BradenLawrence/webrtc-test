import { START_STREAM, STOP_STREAM } from '../actions'

const streamReducer = function(state = {}, action) {
    switch(action.type) {
        case START_STREAM:
            return action.payload
        case STOP_STREAM: 
            action.payload.getTracks()[0].stop()
            return action.payload
        default:
            return state
    }
}

export { streamReducer }