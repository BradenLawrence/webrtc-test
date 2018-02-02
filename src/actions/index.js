const START_STREAM  = 'START_STREAM',
      STOP_STREAM   = 'STOP_STREAM',
      RECORD_IMAGE  = 'RECORD_IMAGE'

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

const RecordImage = function(stream) {
    // Pull image from stream here
    return {
        type:       'RECORD_IMAGE',
        payload:    image
    }
}

export {
    START_STREAM,   StartStream,
    STOP_STREAM,    StopStream,
    RECORD_IMAGE,   RecordImage
}