import { combineReducers }      from 'redux'
import { streamReducer }        from './streamReducer'
import { constraintsReducer }   from './constraintsReducer'
import { screenshotReducer }    from './screenshotReducer'
import { gifReducer }           from './gifReducer'

const rootReducer = combineReducers({
    stream:         streamReducer,
    constraints:    constraintsReducer,
    screenshots:    screenshotReducer,
    gif:            gifReducer
})

export { rootReducer }