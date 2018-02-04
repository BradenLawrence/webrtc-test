import GifReadWrite from 'readwrite-gif'
import base64       from '../base64'

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
    stream.getTracks()[0].stop()
    return {
        type:       STOP_STREAM,
        payload:    stream
    }
}

const RecordImage = function(video, canvas, encoder) {
    if(!encoder) {
        encoder = new GifReadWrite.Encoder()
        encoder.setRepeat(0)
        encoder.setDelay(100)
        encoder.start()
    }
    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    encoder.addFrame(context)
    return {
        type:       RECORD_IMAGE,
        payload:    encoder
    }
}

const GenerateGif = function(encoder) {
    encoder.finish()
    const binary_gif = encoder.stream().getData()
    const data_url = 'data:image/gif;base64,' + base64(binary_gif);
    return {
        type:       GENERATE_GIF,
        payload:    data_url
    }
}

export {
    START_STREAM,   StartStream,
    STOP_STREAM,    StopStream,
    RECORD_IMAGE,   RecordImage,
    GENERATE_GIF,   GenerateGif
}