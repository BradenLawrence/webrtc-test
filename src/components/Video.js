import React from 'react'

const Video = (props) => {
    
    const initStream = (target) => {
        props.acquireStream(props.constraints)
        .then( stream => target.srcObject = stream )
    }
    
    const stopStream = (target) => {
        this.state.videoSource.getTracks()[0].stop()
    }

    return (
        <div className="video-frame">
            <video 
                ref         = { video => this.video = video } 
                width       = { props.constraints.video.width } 
                height      = { props.constraints.video.height } 
                autoPlay    ="true" 
            />
            <button onClick={ () => initStream(this.video) }>Start recording</button>
            <button onClick={ () => stopStream(this.video) }>Stop recording</button>
        </div>
    )
}

export { Video }