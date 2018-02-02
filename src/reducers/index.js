import { combineReducers }      from 'redux'
import { streamReducer }        from './streamReducer'
import { constraintsReducer }   from './constraintsReducer';

const rootReducer = combineReducers({
    stream:         streamReducer,
    constraints:    constraintsReducer,
    screenshots:    screenshotReducer
})

export { rootReducer }