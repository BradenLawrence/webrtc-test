import React, { Component }     from 'react'
import Modal                    from 'react-modal'
import downloadImage            from '../images/download.png'

class ShareModal extends Component {
    constructor(props) {
        super(props)
        this.downloadFile = this.downloadFile.bind(this)
    }


    downloadFile() {
        var filePath = this.props.url
        var a = document.createElement('a')
        a.href = filePath
        a.download = 'photobooth.gif'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)  
    }

    render() {
        return(
            <Modal 
                isOpen = { this.props.isOpen }
                className="share-modal"
                overlayClassName="share-overlay"
            >
                <img className="frame" src={ this.props.url } alt="" />
                <div className="share-controls">
                    <button className="button-download" onClick= { this.downloadFile } ><img src={ downloadImage } alt="Download" /></button><br/>
                    <button className="button-cancel" onClick= { this.props.onClose } >{ this.props.closeText }</button>
                </div>
            </Modal>
        )
    }
}

export { ShareModal }