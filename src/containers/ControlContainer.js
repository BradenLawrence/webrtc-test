import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import { StartStream, 
         StopStream,
         RecordImage,
         StartPhotoshoot,
         GenerateGif,
         SetOverlay,
         ClearOverlay }         from '../actions'
import buttonImage              from '../images/kick-it.png'

class Control extends Component {
    constructor(props) {
        super(props)
        this.start          = this.start.bind(this)
        this.stop           = this.stop.bind(this)
        this.showCountdown  = this.showCountdown.bind(this)
        this.takePic        = this.takePic.bind(this)
        this.createGif      = this.createGif.bind(this)
        this.photoshoot     = this.photoshoot.bind(this)
        this.renderControls = this.renderControls.bind(this)
        this.renderCanvas   = this.renderCanvas.bind(this)
    }

    start() {
        const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
        if(!iOS) {
            navigator.mediaDevices.getUserMedia(this.props.constraints)
                .then( stream => {
                    this.props.StartStream(stream)
                }).catch( error => {
                    console.log(error)
                })
        }
    }

    stop(event) {
        event.preventDefault()
        this.props.StopStream(this.props.stream)
    }

    showCountdown(count) {
        this.props.SetOverlay(true, 'countdown', count)
    }

    takePic() {
        // The drawImage method takes an HTMLVideoElement and HTMLCanvasElement as arguments, so we pass them as refs here
        this.props.RecordImage(this.props.media, this.canvas, this.props.encoder)
        this.props.ClearOverlay()
        this.props.SetOverlay(true, 'flash')
    }

    createGif() {
        this.props.ClearOverlay()
        this.props.GenerateGif(this.props.encoder);
    }

    photoshoot(event) {
        event.preventDefault()
        this.props.StartPhotoshoot()
        const queue = [
            () => { this.showCountdown('3') },
            () => { this.showCountdown('2') },
            () => { this.showCountdown('1') },
            this.takePic,
            this.takePic,
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
        }, 500)
    }

    renderControls() {
        switch(this.props.active) {
            case 'video':
                return( 
                    <span>
                        <button className="button-photo"  onClick = { this.photoshoot }><img src={ buttonImage } alt="Start Photobooth" /></button>
                    </span>
                )
            case 'photoshoot':
                return( 
                    null
                )
            case 'gif':
                return( 
                    null
                )
            default:
                return(
                    <span>
                        <button className="button-start"  onClick = { this.start }>Start Recording</button>
                    </span>
                )
        }
    }

    renderCanvas() {
        let width = window.innerWidth
        let height = window.innerHeight
        if(window.innerWidth >= 768) {
            width = 640
            height = 480
        } else if(window.innerWidth >= 1100) {
            width = 800
            height = 600
        } else if(window.innerWidth >= 1300) {
            width = 1024
            height = 768
        }
        return (
            <div className="canvas-frame">
                <canvas 
                    ref     = { canvas => this.canvas = canvas }
                    width   = { width  } 
                    height  = { height }
                />
            </div>
        )
    }

    componentDidMount() {
        this.start()
    }

    render() {
        return(
            <div className="controls">
                { this.renderControls() }
                { this.renderCanvas() }
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
    return bindActionCreators({ 
        StartStream, 
        StopStream, 
        RecordImage, 
        StartPhotoshoot, 
        GenerateGif, 
        SetOverlay, 
        ClearOverlay 
    }, dispatch)
}

const ControlContainer = connect(mapStateToProps, mapDispatchToProps)(Control)

export { ControlContainer }