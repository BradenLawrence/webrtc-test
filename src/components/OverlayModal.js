import React, { Component }     from 'react'
import Modal                    from 'react-modal'

class OverlayModal extends Component {

    render() {
        return(
            <Modal 
                isOpen = { this.props.isOpen }
                className="overlay-window"
                overlayClassName={ this.props.type }
            >
                <p>{ this.props.text }</p>
            </Modal>
        )
    }
}

export { OverlayModal }