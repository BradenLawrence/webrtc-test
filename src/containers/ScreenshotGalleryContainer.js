import React, { Component }         from 'react'
import { connect }                  from 'react-redux'

class ScreenshotGallery extends Component {
    
    listImages() {
            return this.props.screenshots.map(
                (screenshot) => {
                    return(
                        <li><img src={ screenshot } /></li>
                    )
                }
            )
    }

    render() {
        return (
            <div className="gallery-frame">
                <ul>
                    { this.listImages() }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        screenshots:    state.screenshots
    }
}

const ScreenshotGalleryContainer = connect(mapStateToProps)(ScreenshotGallery)

export { ScreenshotGalleryContainer }