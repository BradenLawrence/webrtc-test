import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import { StartStream, 
         StopStream,
         RecordImage,
         GenerateGif }          from '../actions'

class Control extends Component {
    constructor(props) {
        super(props)
        this.start          = this.start.bind(this)
        this.stop           = this.stop.bind(this)
        this.takePic        = this.takePic.bind(this)
        this.createGif      = this.createGif.bind(this)
        this.tryAgain       = this.tryAgain.bind(this)
        this.share          = this.share.bind(this)
        this.photoshoot     = this.photoshoot.bind(this)
        this.setMedia       = this.setMedia.bind(this)
        this.renderControls = this.renderControls.bind(this)

        this.state = { media: undefined }
    }

    start(event) {
        event.preventDefault()
        this.props.StartStream(this.props.constraints)
    }

    stop(event) {
        event.preventDefault()
        this.props.StopStream(this.props.stream)
    }

    takePic() {
        // The drawImage method takes an HTMLVideoElement and HTMLCanvasElement as arguments, so we pass them as refs here
        this.props.RecordImage(this.state.media, this.canvas, this.props.encoder)
    }

    createGif() {
        this.props.GenerateGif(this.props.encoder)
    }

    tryAgain(event) {
        event.preventDefault()
        // restart
    }

    share(event) {
        event.preventDefault()
        // share media
    }

    photoshoot(event) {
        event.preventDefault()
        const queue = [
            this.takePic,
            this.takePic,
            this.takePic,
            this.takePic,
            this.createGif
        ]
        const timer = setInterval( () => {
            if(queue[0] !== undefined) {
                return queue.shift()()
            } else {
                return window.clearInterval(timer)
            }
        }, 1000)
    }

    setMedia(media) {
        this.setState({ media })
    }

    renderControls() {
        switch(this.props.active) {
            case 'video':
                return( 
                    <span>
                        <button onClick = { this.stop       }>Cancel</button>
                        <button onClick = { this.photoshoot }>Start Photobooth</button>
                    </span>
                )
            case 'gif':
                return(
                    <span>
                        <button onClick = { this.tryAgain }>Try Again</button>
                        <button onClick = { this.share    }>Share</button>
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

    render() {
        return(
            <div className="controls">
                { this.renderControls() }
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
        encoder:        state.encoder,
        active:         state.active
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ StartStream, StopStream, RecordImage, GenerateGif }, dispatch)
}

const ControlContainer = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Control)

export { ControlContainer }