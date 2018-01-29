import React, { Component } from 'react'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stream: MediaSource
        }
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
                <button onClick={ () => {
                        this.props.controls.acquireStream(this.props.constraints)
                        .then( stream => {this.setState({ stream }, 
                            () => this.video.srcObject = this.state.stream)} 
                        )
                    }
                }>Start recording</button>
                <button onClick={ () => this.props.controls.stop(this.state.stream) }>Stop recording</button>
            </div>
        )
    }
}

export { Video }