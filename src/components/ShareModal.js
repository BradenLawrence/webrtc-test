import React, { Component }     from 'react'
import Modal                    from 'react-modal'
import { FacebookShareButton,
         TwitterShareButton,
         GooglePlusShareButton,
         WhatsappShareButton,
         EmailShareButton,
    
         FacebookIcon,
         TwitterIcon,
         GooglePlusIcon,
         WhatsappIcon,
         EmailIcon }            from 'react-share'

class ShareModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Modal 
                isOpen = { this.props.isOpen }
                className="Modal"
                overlayClassName="Overlay"
            >
                <img className="frame" src={ this.props.url } />
                <div className="share-wrapper">
                    <TwitterShareButton     className="share-button" url={ this.props.url }>
                        <TwitterIcon    size={40} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton    className="share-button" url={ this.props.url }>
                        <FacebookIcon   size={40} round={true} />
                    </FacebookShareButton>
                    <GooglePlusShareButton  className="share-button" url={ this.props.url }>
                        <GooglePlusIcon size={40} round={true} />
                    </GooglePlusShareButton>
                    <WhatsappShareButton    className="share-button" url={ this.props.url }>
                        <WhatsappIcon   size={40} round={true} />
                    </WhatsappShareButton>
                    <EmailShareButton       className="share-button" url={ this.props.url }>
                        <EmailIcon      size={40} round={true} />
                    </EmailShareButton>
                </div>
                <div className="button-restart">
                    <button onClick= { this.props.onClose } >{ this.props.closeText }</button>
                </div>
            </Modal>
        )
    }
}

export { ShareModal }