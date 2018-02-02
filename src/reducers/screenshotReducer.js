import { RECORD_IMAGE } from '../actions'

const screenshotReducer = function(state = [], action) {
    switch(action.type) {
        case RECORD_IMAGE: 
            return [action.payload, ...state]
        default:
            return state
    }
}

export { screenshotReducer }