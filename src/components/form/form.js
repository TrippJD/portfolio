import React from "react"
import Modal from "react-responsive-modal"
import "./form.css"

export default class Form extends React.Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <button className="modal-button" onClick={this.onOpenModal}>
          Get Started
        </button>
        <Modal className="modal" open={open} onClose={this.onCloseModal} center>
          <div className="modal-div">
            <div className="formm-div">
              <form
                className="formm"
                method="post"
                name="contact"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />

                <label htmlFor="name">
                  Name
                  <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="email">
                  Email
                  <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="subject">
                  Subject
                  <input type="text" name="subject" id="subject" />
                </label>
                <label htmlFor="message">
                  Message
                  <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
              </form>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
