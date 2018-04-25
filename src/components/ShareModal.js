import React, { Component }     from 'react'
import Modal                    from 'react-modal'
import downloadImage            from '../images/save.png'

class ShareModal extends Component {
    constructor(props) {
        super(props)
        this.downloadFile = this.downloadFile.bind(this)
        this.state = { input: "Photowave" }
    }

    onInputChange(input) {
        this.setState({ input })
    }

    escapeText(text) {
        return (
            text
            .replace(/@/g,'_at_')
            .replace(/\./g,'_dot_')
        )
    }

    downloadFile() {
        let filePath = this.props.url
        let a = document.createElement('a')
        a.href = filePath
        a.download = this.escapeText(this.state.input) + "_" + Date.now() + ".gif"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        this.setState({ input: "Photowave" })
        this.props.onClose
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
                    <p>Remember this moment</p>
                    <p>Email: <input className="input-email" placeholder="you@example.com" onChange={ event => this.onInputChange(event.target.value) } /></p>
                    <button className="button-download" onClick= { this.downloadFile } ><img src={ downloadImage } alt="Download" /></button><br/>
                    <button className="button-cancel" onClick= { this.props.onClose } >{ this.props.closeText }</button>
                </div>
            </Modal>
        )
    }
}

export { ShareModal }