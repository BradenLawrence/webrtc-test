import React, { Component } from 'react'
import { DisplayContainer } from '../containers/DisplayContainer'
import { ControlContainer } from '../containers/ControlContainer'


class Photobooth extends Component {
    constructor(props) {
        super(props)
        this.setMedia = this.setMedia.bind(this)
        this.getVideo = this.getVideo.bind(this)
    }

    setMedia(media) {
        return this.control.getWrappedInstance().setMedia(media)
    }

    getVideo() {
        return this.display.getWrappedInstance().getVideo()
    }

    componentDidMount() {
        this.setMedia(this.getVideo())
    }

    render() {
        return (
            <div>
                <DisplayContainer ref= { ref => this.display = ref } />
                <ControlContainer ref= { ref => this.control = ref } />
            </div>
        )
    }
}


export { Photobooth }