import React, { Component }         from 'react'
import { connect }                  from 'react-redux'
import { bindActionCreators }       from 'redux'
import { StartStream, StopStream }  from '../actions'

class Video extends Component {
    constructor(props) {
        super(props)
        this.start  = this.start.bind(this)
        this.stop   = this.stop.bind(this)
    }

    start(event) {
        event.preventDefault()
        this.props.StartStream(this.props.constraints)
    }

    stop(event) {
        event.preventDefault()
        this.props.StopStream(this.props.stream)
    }

    componentWillReceiveProps(nextProps) {
        this.video.srcObject = nextProps.stream
        
    }

    render() {
        return (
            <div className="video-frame">
                <video 
                    ref         = { video => this.video = video } 
                    width       = { this.props.constraints.video.width } 
                    height      = { this.props.constraints.video.height } 
                    autoPlay    = "true" 
                />
                <button onClick={ this.start }>Start recording</button>
                <button onClick={ this.stop }>Stop recording</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stream:         state.stream,
        constraints:    state.constraints
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ StartStream, StopStream }, dispatch)
}

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video)

export { VideoContainer }