import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import { StartStream, 
         StopStream, 
         RecordImage,
         GenerateGif }          from '../actions'

class Video extends Component {
    constructor(props) {
        super(props)
        this.start      = this.start.bind(this)
        this.stop       = this.stop.bind(this)
        this.takePic    = this.takePic.bind(this)
        this.createGif  = this.createGif.bind(this)
    }

    start(event) {
        event.preventDefault()
        this.props.StartStream(this.props.constraints)
    }

    stop(event) {
        event.preventDefault()
        this.props.StopStream(this.props.stream)
    }

    takePic(event) {
        event.preventDefault()
        this.props.RecordImage(this.video, this.canvas)
    }

    createGif(event) {
        event.preventDefault()
        this.props.GenerateGif(this.props.screenshots)
    }

    componentWillReceiveProps(nextProps) {
        this.video.srcObject = nextProps.stream
    }

    render() {
        return (
            <div>
                <div className="video-frame">
                    <video 
                        ref         = { video => this.video = video } 
                        width       = { this.props.constraints.video.width } 
                        height      = { this.props.constraints.video.height } 
                        autoPlay    = "true" 
                    />
                    <button onClick = { this.start     }>Start recording</button>
                    <button onClick = { this.stop      }>Stop recording</button>
                    <button onClick = { this.takePic   }>Take Picture</button>
                    <button onClick = { this.createGif }>Create a gif</button>
                </div>
                {/* A canvas element must be present to take screenshots, this one is hidden via css. */}
                <div className="canvas-frame">
                    <canvas 
                        ref         = { canvas => this.canvas = canvas }
                        width       = { this.props.constraints.video.width } 
                        height      = { this.props.constraints.video.height } 
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stream:         state.stream,
        constraints:    state.constraints,
        screenshots:    state.screenshots,
        gif:            state.gif
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ StartStream, StopStream, RecordImage, GenerateGif }, dispatch)
}

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video)

export { VideoContainer }