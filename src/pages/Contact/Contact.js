import React, { useState } from "react";
import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify/dist/react-toastify.cjs";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      // toast.error("Please provide all fields");
      alert("Please provide all fields");
      return;
    }

    // Your EmailJS service configuration
    const serviceId = "service_eluvzdv"; // Replace with your EmailJS service ID
    const templateId = "template_h04p46r"; // Replace with your EmailJS template ID
    const userId = "oc9JNzFOuIkMpFvLZ"; // Replace with your EmailJS user ID

    // Prepare email parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: msg,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent:", response);
        // toast.success("Your message has been sent successfully!");
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        // toast.error("Failed to send message. Please try again later.");
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact container">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="Contact image"
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card2 d-flex card border-0 px-4 py-5">
              <div className="row">
                <div className="row">
                  <h6 className="social">
                    Contact With
                    <a
                      href="https://www.linkedin.com/in/aryan-bansal-425901235/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2"
                    >
                      <BsLinkedin color="blue" size={30} />
                    </a>
                    <a
                      href="https://github.com/Bansal29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2"
                    >
                      <BsGithub color="black" size={30} />
                    </a>
                  </h6>
                </div>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <button className="button" onClick={handleSubmit}>
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
