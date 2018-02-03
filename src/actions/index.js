import GifEncoder   from 'gif-encoder'

const START_STREAM  = 'START_STREAM',
      STOP_STREAM   = 'STOP_STREAM',
      RECORD_IMAGE  = 'RECORD_IMAGE',
      GENERATE_GIF  = 'GENERATE_GIF'

const StartStream = function(constraints) {
    const stream = navigator.mediaDevices.getUserMedia(constraints)
    return {
        type:       START_STREAM,
        payload:    stream
    }
}

const StopStream = function(stream) {
    return {
        type:       STOP_STREAM,
        payload:    stream
    }
}

const RecordImage = function(video, canvas) {
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    const image = canvas.toDataURL('image/png')
    return {
        type:       RECORD_IMAGE,
        payload:    image
    }
}

const GenerateGif = function(images=[], options) {
    // maek gif
    const gif = new GifEncoder(10, 10)
    console.log(gif)
    return {
        type:       GENERATE_GIF,
        payload:    gif
    }
}

export {
    START_STREAM,   StartStream,
    STOP_STREAM,    StopStream,
    RECORD_IMAGE,   RecordImage,
    GENERATE_GIF,   GenerateGif
}