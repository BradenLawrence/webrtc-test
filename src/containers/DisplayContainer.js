import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import { Restart }              from '../actions'
import { ShareModal }           from '../components/ShareModal'
import { OverlayModal }         from '../components/OverlayModal'
import { ControlContainer }     from '../containers/ControlContainer'


class Display extends Component {
    constructor(props) {
        super(props)
        this.tryAgain = this.tryAgain.bind(this)
    }

    tryAgain(event) {
        event.preventDefault()
        this.props.Restart()
    }

    componentDidUpdate() {
        if(this.props.active === 'video') {
            this.video.srcObject = this.props.stream
        }
    }

    render() {
        return(
            <div className={ this.props.active === null ? 'media-frame inactive-video':'media-frame' } >
                <OverlayModal
                    isOpen      = { this.props.overlay.isOpen }
                    type        = { this.props.overlay.type   }
                    text        = { this.props.overlay.text   }
                />
                <ShareModal 
                    isOpen      = { this.props.active === 'gif' }
                    url         = { this.props.gif }
                    onClose     = { this.tryAgain }
                    closeText   = { 'Try Again' }
                />
                <video 
                    ref         = { video => this.video = video   } 
                    width       = { this.props.stream !== null ? this.props.stream.getVideoTracks()[0].getSettings().width : 0  } 
                    height      = { this.props.stream !== null ? this.props.stream.getVideoTracks()[0].getSettings().height : 0 } 
                    autoPlay    = "true" 
                />
                <ControlContainer 
                    media       = { this.video }
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stream:         state.stream,
        constraints:    state.constraints,
        gif:            state.gif,
        active:         state.active,
        overlay:        state.overlay
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ Restart }, dispatch)
}

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(Display)

export { DisplayContainer }