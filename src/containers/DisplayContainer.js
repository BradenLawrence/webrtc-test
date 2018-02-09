import React, { Component } from 'react'
import { connect }          from 'react-redux'

class Display extends Component {
    constructor(props) {
        super(props)
        this.getVideo       = this.getVideo.bind(this)
        this.renderDisplay  = this.renderDisplay.bind(this)
    }

    getVideo() {
        return this.video
    }
    
    componentDidUpdate() {
        if(this.props.active === 'video') {
            this.video.srcObject = this.props.stream
            this.props.initMedia()
        }
    }

    renderDisplay() {
        switch(this.props.active) {
            case 'gif':
                return(
                    <img className="playback" src={ this.props.gif } alt='' />
                )
            default:
                return(
                    <video 
                        ref         = { video => this.video = video } 
                        width       = { this.props.constraints.width } 
                        height      = { this.props.constraints.height } 
                        autoPlay    = "true" 
                    />
                )
        }
    }

    render() {
        return(
            <div className="media-frame">
                { this.renderDisplay() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stream:         state.stream,
        constraints:    state.constraints,
        gif:            state.gif,
        active:         state.active
    }
}

const DisplayContainer = connect(mapStateToProps, null, null, { withRef: true })(Display)

export { DisplayContainer }