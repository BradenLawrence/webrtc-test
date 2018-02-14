import { RECORD_IMAGE, GENERATE_GIF } from '../actions'

const encoderReducer = function(state = null, action) {
    switch(action.type) {
        case RECORD_IMAGE: 
            return action.payload
        case GENERATE_GIF:
            // encoder is no longer needed once the gif has been generated
            return null
        default:
            return state
    }
}

export { encoderReducer }