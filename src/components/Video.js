import React, { Component } from 'react'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stream: MediaSource
        }

        this.start  = this.start.bind(this)
        this.stop   = this.stop.bind(this)
    }

    start() {
        this.props.controls.acquireStream(this.props.constraints)
        .then( stream => {this.setState({ stream }, 
            () => this.video.srcObject = this.state.stream)} 
        )
    }

    stop(event) {
        this.props.controls.stop(this.state.stream)
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
                <button onClick={ () => this.start() }>Start recording</button>
                <button onClick={ () => this.stop() }>Stop recording</button>
            </div>
        )
    }
}

export { Video }