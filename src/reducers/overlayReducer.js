import { SET_OVERLAY, CLEAR_OVERLAY } from '../actions'

const defaultSetting = {
    isOpen: false,
    type:   'overlay-off',
    text:   ''
}

const overlayReducer = function(state = defaultSetting, action) {
    switch(action.type) {
        case SET_OVERLAY:
            return action.payload
        case CLEAR_OVERLAY:
            return {
                isOpen: false,
                type:   'overlay-off',
                text:   ''
            }
        default:
            return state
    }
}

export { overlayReducer }