const START_STREAM  = 'START_STREAM',
      STOP_STREAM   = 'STOP_STREAM'

const StartStream = function(constraints) {
    const stream = navigator.mediaDevices.getUserMedia(constraints)
    console.log('Action says: ' + stream)
    return {
        type:       'START_STREAM',
        payload:    stream
    }
}

const StopStream = function(stream) {
    
    return {
        type:       'STOP_STREAM',
        payload:    stream
    }
}

export {
    START_STREAM,   StartStream,
    STOP_STREAM,    StopStream
}