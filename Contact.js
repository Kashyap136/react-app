import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Email:</label>
        <input type="email" required />
        <label>Message:</label>
        <textarea required></textarea>
        <button type="submit">Send</button>
      </form>
      <div>
        <h3>Social Links:</h3>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://github.com">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
