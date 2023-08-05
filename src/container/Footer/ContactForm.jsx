import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import { TiTickOutline } from "react-icons/ti";

import "./ContactForm.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px #8FD5A6 solid",
    background: "#EAFAEF",
  },
};

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_il99oas",
        "template_tma0lh2",
        form.current,
        "9Pj0bSRiXuu78VSsA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setPhone("");
    setMsg("");
    openModal();
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="contactform__modal">
          <div className="contactform__tick__div">
            <TiTickOutline className="contactform__tick" />
          </div>
          <div>your response has been recorded</div>
          <p className="contactform__close" onClick={closeModal}>close</p>
          {/* <button onClick={closeModal}>close</button> */}
        </div>
      </Modal>

      <form ref={form} onSubmit={sendEmail}>
        <div className="contactform__container">
          <input
            type="text"
            name="user_name"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="number"
            name="user_phone"
            placeholder="your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <textarea
            name="message"
            placeholder="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows="3"
            cols="50"
          />
          <input type="submit" value="Send" id="contactform__submit" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
