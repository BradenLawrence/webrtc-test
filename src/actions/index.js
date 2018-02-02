const START_STREAM  = 'START_STREAM',
      STOP_STREAM   = 'STOP_STREAM',
      RECORD_IMAGE  = 'RECORD_IMAGE'

const StartStream = function(constraints) {
    const stream = navigator.mediaDevices.getUserMedia(constraints)
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

const RecordImage = function(video, canvas) {
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    const image = canvas.toDataURL('image/png')
    console.log(image)
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