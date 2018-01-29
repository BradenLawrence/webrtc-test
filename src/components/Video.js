import React, { Component } from 'react'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stream: MediaSource
        }
    }
    
    render() {
        const controls      = this.props.controls
        const constraints   = this.props.contraints

        return (
            <div className="video-frame">
                <video 
                    ref         = { video => this.video = video } 
                    width       = { constraints.video.width } 
                    height      = { constraints.video.height } 
                    autoPlay    = "true" 
                />
                <button onClick={ () => {
                        controls.acquireStream(constraints)
                        .then( stream => {this.setState({ stream }, 
                            () => this.video.srcObject = this.state.stream)} 
                        )
                    }
                }>Start recording</button>
                <button onClick={ () => controls.stop(this.state.stream) }>Stop recording</button>
            </div>
        )
    }
}

export { Video }