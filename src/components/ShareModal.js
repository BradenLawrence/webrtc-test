import React, { Component }     from 'react'
import Modal                    from 'react-modal'

class ShareModal extends Component {

    render() {
        return(
            <Modal 
                isOpen = { this.props.isOpen }
                className="share-modal"
                overlayClassName="share-overlay"
            >
                <img className="frame" src={ this.props.url } alt="" />
                <div className="share-controls">
                    <a href={ this.props.url } download="photobooth.gif">
                    <button className="button-download">Download</button>
                    </a><br/>
                    <button className="button-cancel" onClick= { this.props.onClose } >{ this.props.closeText }</button>
                </div>
            </Modal>
        )
    }
}

export { ShareModal }