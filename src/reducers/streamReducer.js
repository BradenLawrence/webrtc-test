import { START_STREAM, STOP_STREAM } from '../actions'

const streamReducer = function(state = {}, action) {
    switch(action.type) {
        case START_STREAM: 
            console.log('Reducer says: ' + action.payload)
            return action.payload
        case STOP_STREAM: 
            // console.log(action.payload)
            // action.payload.getTracks()[0].stop()
            return action.payload
        default:
            return state
    }
}

export { streamReducer }