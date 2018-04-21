import GifReadWrite from 'readwrite-gif'
import base64       from '../base64'

const START_STREAM      = 'START_STREAM',
      STOP_STREAM       = 'STOP_STREAM',
      RECORD_IMAGE      = 'RECORD_IMAGE',
      START_PHOTOSHOOT  = 'START_PHOTOSHOOT',
      GENERATE_GIF      = 'GENERATE_GIF',
      RESTART           = 'RESTART',
      SET_OVERLAY       = 'SET_OVERLAY',
      CLEAR_OVERLAY     = 'CLEAR_OVERLAY',
      SET_CONSTRAINTS   = 'SET_CONSTRAINTS'

const StartStream = function(stream) {
    // const stream = navigator.mediaDevices.getUserMedia(constraints)
    // Moved this logic to the control container in order to allow the use of promises
    // Should use Redux Thunk in the future
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

const StartPhotoshoot = function() {
    return {
        type:       START_PHOTOSHOOT
    }
}

const GenerateGif = function(encoder) {
    encoder.finish()
    const binary_gif = encoder.stream().getData()
    const data_url = 'data:image/gif;base64,' + base64(binary_gif)
    return {
        type:       GENERATE_GIF,
        payload:    data_url
    }
}

const Restart = function() {
    return {
        type:       RESTART
    }
}

const SetOverlay = function(isOpen=false, type='', text='') {
    const overlay = { isOpen, type, text }
    return {
        type:       SET_OVERLAY,
        payload:    overlay
    }
}

const ClearOverlay = function() {
    return {
        type:       CLEAR_OVERLAY
    }
}

const SetConstraints = function(constraints) {
    return {
        type:       SET_CONSTRAINTS,
        payload:    constraints
    }
}

export {
    START_STREAM,       StartStream,
    STOP_STREAM,        StopStream,
    RECORD_IMAGE,       RecordImage,
    START_PHOTOSHOOT,   StartPhotoshoot,
    GENERATE_GIF,       GenerateGif,
    RESTART,            Restart,
    SET_OVERLAY,        SetOverlay,
    CLEAR_OVERLAY,      ClearOverlay,
    SET_CONSTRAINTS,    SetConstraints
}