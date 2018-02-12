import React, { Component } from 'react'
import { DisplayContainer } from '../containers/DisplayContainer'
import { ControlContainer } from '../containers/ControlContainer'


class Photobooth extends Component {
    constructor(props) {
        super(props)
        this.setVideo   = this.setVideo.bind(this)
        this.getVideo   = this.getVideo.bind(this)
        this.initMedia  = this.initMedia.bind(this)
    }

    getVideo() {
        return this.display.getWrappedInstance().getVideo()
    }

    setVideo(video) {
        return this.control.getWrappedInstance().setVideo(video)
    }

    initMedia() {
        this.setVideo(this.getVideo())
    }

    render() {
        return (
            <div>
                <DisplayContainer 
                    ref= { ref => this.display = ref } 
                    initMedia = { this.initMedia }
                />
                <ControlContainer 
                    ref= { ref => this.control = ref } 
                />
            </div>
        )
    }
}


export { Photobooth }