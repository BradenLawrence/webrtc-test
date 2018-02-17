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
                <div className="button-restart">
                    <a href={ this.props.url } download="photobooth.gif">
                    <button className="button-download">Download</button>
                    </a><br/>
                    <button className="button-restart" onClick= { this.props.onClose } >{ this.props.closeText }</button>
                </div>
            </Modal>
        )
    }
}

export { ShareModal }