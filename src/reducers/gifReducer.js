import { GENERATE_GIF } from '../actions'

const gifReducer = function(state = '', action) {
    switch(action.type) {
        case GENERATE_GIF: 
            return state
        default:
            return state
    }
}

export { gifReducer }