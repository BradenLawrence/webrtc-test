import { combineReducers }      from 'redux'
import { streamReducer }        from './streamReducer'
import { constraintsReducer }   from './constraintsReducer'
import { encoderReducer }       from './encoderReducer'
import { gifReducer }           from './gifReducer'
import { activeReducer }        from './activeReducer'
import { overlayReducer }       from './overlayReducer'

const rootReducer = combineReducers({
    stream:         streamReducer,
    constraints:    constraintsReducer,
    gif:            gifReducer,
    encoder:        encoderReducer,
    active:         activeReducer,
    overlay:        overlayReducer
})

export { rootReducer }