import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import { StartStream, 
         StopStream,
         RecordImage,
         GenerateGif }          from '../actions'

class Media extends Component {
    constructor(props) {
        super(props)
        this.start          = this.start.bind(this)
        this.stop           = this.stop.bind(this)
        this.takePic        = this.takePic.bind(this)
        this.createGif      = this.createGif.bind(this)
        this.renderMedia    = this.renderMedia.bind(this)
        this.renderControls = this.renderControls.bind(this)
        this.renderCanvas   = this.renderCanvas.bind(this)
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
        this.props.RecordImage(this.video, this.canvas, this.props.encoder)
    }

    createGif(event) {
        event.preventDefault()
        this.props.GenerateGif(this.props.encoder)
    }

    componentDidUpdate() {
        if(this.props.active === 'video') {
            this.video.srcObject = this.props.stream
        }
    }

    renderMedia() {
        switch(this.props.active) {
            case 'video':
                return (
                    <video 
                        ref         = { video => this.video = video } 
                        width       = { this.props.constraints.video.width } 
                        height      = { this.props.constraints.video.height } 
                        autoPlay    = "true" 
                    />
                )
            case 'gif':
                return <img className="playback" src={ this.props.gif } alt='' />
            default:
                return <div className="placeholder" />
        }
    }

    renderControls() {
        switch(this.props.active) {
            case 'video':
                return( 
                    <span>
                        <button onClick = { this.stop      }>Cancel</button>
                        <button onClick = { this.takePic   }>Take Picture</button>
                        <button onClick = { this.createGif }>Create a gif</button>
                    </span>
                )
            case 'gif':
                return(
                    <span>
                        <button>Try Again</button>
                        <button>Share</button>
                    </span>
                )
            default:
                return(
                    <span>
                        <button onClick = { this.start }>Start recording</button>
                    </span>
                )
        }
    }

    renderCanvas() {
        return(
            <canvas 
                ref         = { canvas => this.canvas = canvas }
                width       = { this.props.constraints.video.width } 
                height      = { this.props.constraints.video.height } 
            />
        )
    }

    render() {
        return (
            <div>
                <div className="media-frame">
                    { this.renderMedia() }
                </div>
                <div className="controls">
                    { this.renderControls() }
                </div>
                {/* A canvas element must be present to take screenshots, this one is hidden via css. */}
                <div className="canvas-frame">
                    { this.renderCanvas() }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stream:         state.stream,
        constraints:    state.constraints,
        encoder:        state.encoder,
        gif:            state.gif,
        active:         state.active
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ StartStream, StopStream, RecordImage, GenerateGif }, dispatch)
}

const MediaContainer = connect(mapStateToProps, mapDispatchToProps)(Media)

export { MediaContainer }