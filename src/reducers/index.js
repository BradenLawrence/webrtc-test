import { combineReducers }      from 'redux'
import { streamReducer }        from './streamReducer'
import { constraintsReducer }   from './constraintsReducer'
import { screenshotReducer }    from './screenshotReducer'
import { gifReducer }           from './gifReducer'
import { activeReducer }        from './activeReducer'

const rootReducer = combineReducers({
    stream:         streamReducer,
    constraints:    constraintsReducer,
    screenshots:    screenshotReducer,
    gif:            gifReducer,
    active:         activeReducer
})

export { rootReducer }