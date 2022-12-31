import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_il99oas",
        "template_v3l7cbc",
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
  };

  return (
    <div className=" text-white grid grid-cols-12 mb-48">
      <div className="bg-peach-main col-start-5 col-span-6 grid grid-cols-4">
        <div className="col-start-2 col-span-3 my-5 text-grey-main text-3xl">
          Let's work together
          <form ref={form} onSubmit={sendEmail}>
            <TextField id="user_name" label="Name" variant="standard" />
            <br />
            <TextField id="user_email" label="Email" variant="standard" />
            <br />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="standard"
            />
            <br />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

{
  /* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" className="text-black" name="user_name" />
            <label>Email</label>
            <input type="email" className="text-black" name="user_email" />
            <label>Message</label>
            <textarea className="text-black" name="message" />
            <input type="submit" value="Send" />
          </form> */
}
