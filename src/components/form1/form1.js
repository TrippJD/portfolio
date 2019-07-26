import React from "react"
import "./form1.css"

const Form1 = () => (
  <div className="form-div">
    <form
      className="form"
      method="post"
      name="contact"
      action="/success"
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
)

export default Form1
