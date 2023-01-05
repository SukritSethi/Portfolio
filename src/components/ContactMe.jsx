import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import { FiMapPin, FiMail } from "react-icons/fi";

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
      );
  };

  return (
    <div className=" text-white flex justify-center z-10 pl-52 mt-24 mb-40 indexdedo">
      <div className="relative bg-peach-main w-3/5 grid grid-cols-12">
        <div className="col-start-5 col-span-7 my-5 text-grey-main text-3xl">
          <h1 className="mb-2">Let's work together</h1>
          <form ref={form} onSubmit={sendEmail} className="pl-1 ">
            <TextField id="user_name" label="Name" variant="standard" className="w-80 my-1" />
            <TextField id="user_email" label="Email" variant="standard" className="w-80 my-1"/>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={2}
              variant="standard"
              className="w-80 h-20 my-1"
            />
            <br />
            <input type="submit" value="Send" className="text-xl hover:cursor-pointer"/>
          </form>
        </div>
        <div className="absolute top-10 w-80 -left-28 h-96  bg-grey-main ">
          <div className="pl-12">
            <div className="text-peach-main text-3xl mt-8">Contact Info</div>
            <div className="text-peach-main flex text-center mt-5">
              <FiMapPin className="text-2xl pr-2" /> Gurugram, Haryana, India
            </div>
            <div className="text-peach-main flex text-center mt-3">
              <FiMail className="text-2xl pr-2" /> sukritsethi18@gmail.com
            </div>
          </div>
          <div className="flex justify-center">
          <div className="bg-peach-main w-11/12 h-1 mx-auto rounded absolute bottom-5"> </div></div>
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
