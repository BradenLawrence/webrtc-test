import React, { Component } from 'react'
import { Video }            from '../components/Video';

class VideoContainer extends Component {
    render() {
        const controls = {
            acquireStream(constraints) {
              return navigator.mediaDevices.getUserMedia(constraints)
              .then( stream => { return stream } )
            },
            stop(stream) {
              stream.getTracks()[0].stop()
            }
          }
      
        const constraints = {
        video: {
            width:  800,
            height: 600
        },
        audio:  false
        }
        
        return (
            <Video 
                controls    = { controls }
                constraints = { constraints }
            />
        )
    }
}

export { VideoContainer }