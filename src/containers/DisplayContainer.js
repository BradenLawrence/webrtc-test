import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import { Restart }              from '../actions'
import { ShareModal }           from '../components/ShareModal';


class Display extends Component {
    constructor(props) {
        super(props)
        this.tryAgain = this.tryAgain.bind(this)
        this.getVideo = this.getVideo.bind(this)
    }

    tryAgain(event) {
        event.preventDefault()
        this.props.Restart()
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

    render() {
        return(
            <div className="media-frame">
                <ShareModal 
                    isOpen      = { this.props.active === 'gif' }
                    url         = { this.props.gif }
                    onClose     = { this.tryAgain }
                    closeText   = { 'Try Again' }
                />
                <video 
                    ref         = { video => this.video = video } 
                    width       = { this.props.constraints.width } 
                    height      = { this.props.constraints.height } 
                    autoPlay    = "true" 
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
        active:         state.active
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ Restart }, dispatch)
}

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Display)

export { DisplayContainer }