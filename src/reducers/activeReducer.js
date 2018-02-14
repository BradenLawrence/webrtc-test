import { START_STREAM,
         STOP_STREAM,
         START_PHOTOSHOOT,
         GENERATE_GIF,
         RESTART} from '../actions'

const activeReducer = function(state = null, action) {
    switch(action.type) {
        case START_STREAM:
            return 'video'
        case STOP_STREAM:
            return null
        case START_PHOTOSHOOT:
            return 'photoshoot'
        case GENERATE_GIF:
            return 'gif'
        case RESTART:
            return 'video'
        default:
            return state
    }
}

export { activeReducer }